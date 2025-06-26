import { matrixAnalyses, type MatrixAnalysis, type InsertMatrixAnalysis } from "@shared/schema";

export interface IStorage {
  createMatrixAnalysis(analysis: InsertMatrixAnalysis): Promise<MatrixAnalysis>;
  getMatrixAnalysis(id: number): Promise<MatrixAnalysis | undefined>;
  cleanupOldAnalyses?(): Promise<void>;
}

export class MemStorage implements IStorage {
  private analyses: Map<number, MatrixAnalysis>;
  private currentId: number;
  private readonly maxEntries: number;
  private readonly cleanupThreshold: number;

  constructor(maxEntries: number = 1000) {
    this.analyses = new Map();
    this.currentId = 1;
    this.maxEntries = maxEntries;
    this.cleanupThreshold = Math.floor(maxEntries * 0.8); // 80% 이상일 때 정리
  }

  async createMatrixAnalysis(insertAnalysis: InsertMatrixAnalysis): Promise<MatrixAnalysis> {
    // 메모리 정리 필요시 정리
    if (this.analyses.size >= this.cleanupThreshold) {
      await this.cleanupOldAnalyses();
    }

    const id = this.currentId++;
    const analysis: MatrixAnalysis = {
      ...insertAnalysis,
      id,
      createdAt: new Date(),
    };
    this.analyses.set(id, analysis);
    return analysis;
  }

  async getMatrixAnalysis(id: number): Promise<MatrixAnalysis | undefined> {
    return this.analyses.get(id);
  }

  async cleanupOldAnalyses(): Promise<void> {
    if (this.analyses.size <= this.maxEntries * 0.5) return;

    // 생성일 기준으로 정렬하여 오래된 것부터 삭제
    const sortedEntries = Array.from(this.analyses.entries())
      .sort(([, a], [, b]) => a.createdAt.getTime() - b.createdAt.getTime());

    const toDelete = sortedEntries.slice(0, Math.floor(this.analyses.size * 0.3)); // 30% 삭제
    
    for (const [id] of toDelete) {
      this.analyses.delete(id);
    }

    console.log(`Cleaned up ${toDelete.length} old matrix analyses. Current count: ${this.analyses.size}`);
  }

  // 개발용 통계 메소드
  getStats() {
    return {
      totalEntries: this.analyses.size,
      maxEntries: this.maxEntries,
      cleanupThreshold: this.cleanupThreshold,
      oldestEntry: this.analyses.size > 0 ? 
        Math.min(...Array.from(this.analyses.values()).map(a => a.createdAt.getTime())) : null,
      newestEntry: this.analyses.size > 0 ? 
        Math.max(...Array.from(this.analyses.values()).map(a => a.createdAt.getTime())) : null,
    };
  }
}

export const storage = new MemStorage();
