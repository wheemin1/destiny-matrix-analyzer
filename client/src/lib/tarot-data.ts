// Comprehensive Tarot Card Database for Destiny Matrix Analysis
// Based on traditional Major Arcana meanings adapted for Korean Destiny Matrix system

export interface TarotCard {
  number: number;
  name: string;
  shortDescription: string;
  coreTraits: string;
  lifeDirection: string;
  keyTraits: string[];
  developmentAreas: string[];
  personalityDescription: string;
  personalityAspects: {
    icon: string;
    title: string;
    description: string;
  }[];
  talentDescription: string;
  talents: {
    icon: string;
    title: string;
    description: string;
  }[];
  karmaDescription: string;
  challenges: string[];
  growthDirections: string[];
  relationshipStyle: string;
  relationshipStrengths: string[];
  relationshipChallenges: string[];
  compatibleTypes: string[];
}

// 레거시 지원을 위한 동기 함수 (기존 코드와 호환성 유지)
// 실제 데이터는 lazy loading으로 로드되며, 초기에는 기본값 반환
const fallbackCards: { [key: number]: TarotCard } = {};

// 기본 카드 데이터 생성 함수
function createFallbackCard(number: number): TarotCard {
  return {
    number,
    name: `타로 카드 ${number}`,
    shortDescription: "카드 정보를 불러오는 중입니다...",
    coreTraits: "로딩 중...",
    lifeDirection: "로딩 중...",
    keyTraits: ["로딩 중..."],
    developmentAreas: ["로딩 중..."],
    personalityDescription: "로딩 중...",
    personalityAspects: [{
      icon: "⏳",
      title: "로딩 중",
      description: "카드 정보를 불러오고 있습니다."
    }],
    talentDescription: "로딩 중...",
    talents: [{
      icon: "⏳",
      title: "로딩 중",
      description: "재능 정보를 불러오고 있습니다."
    }],
    karmaDescription: "로딩 중...",
    challenges: ["로딩 중..."],
    growthDirections: ["로딩 중..."],
    relationshipStyle: "로딩 중...",
    relationshipStrengths: ["로딩 중..."],
    relationshipChallenges: ["로딩 중..."],
    compatibleTypes: ["로딩 중..."]
  };
}

// 1-22번 카드의 기본 데이터 생성
for (let i = 1; i <= 22; i++) {
  fallbackCards[i] = createFallbackCard(i);
}

export function getTarotCard(number: number): TarotCard {
  if (number < 1 || number > 22) {
    // Fallback for numbers outside 1-22 range
    const fallbackNumber = ((number - 1) % 22) + 1;
    return fallbackCards[fallbackNumber] || fallbackCards[1];
  }
  return fallbackCards[number];
}

export function getAllTarotCards(): TarotCard[] {
  return Object.values(fallbackCards);
}

// 레거시 지원을 위한 export
export const tarotCards = fallbackCards;

// 개별 카드 데이터를 캐시에 업데이트하는 함수 (lazy loader에서 사용)
export function updateTarotCardCache(number: number, card: TarotCard): void {
  if (number >= 1 && number <= 22) {
    fallbackCards[number] = card;
  }
}
