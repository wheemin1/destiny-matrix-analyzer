import { MatrixPoints } from './matrix-config';

// Analysis result types
export interface AnalysisResult {
  id: number;
  mode: 'personal' | 'couple';
  matrixPoints: MatrixPoints | CoupleMatrixPoints;
  name?: string;
  birthdate?: string;
  person1?: {
    name: string;
    birthdate: string;
  };
  person2?: {
    name: string;
    birthdate: string;
  };
}

export interface CoupleMatrixPoints {
  person1: MatrixPoints;
  person2: MatrixPoints;
}

// Re-export MatrixPoints from matrix-config
export type { MatrixPoints } from './matrix-config';
