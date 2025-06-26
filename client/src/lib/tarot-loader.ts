// Lazy loading utility for tarot data
import { TarotCard, updateTarotCardCache } from './tarot-data';

// 타로 카드 데이터를 동적으로 로드하는 함수들
const tarotCardLoaders: { [key: number]: () => Promise<TarotCard> } = {};

// 1-22번 카드에 대한 lazy loader 생성
for (let i = 1; i <= 22; i++) {
  tarotCardLoaders[i] = () => import(`./tarot-cards/card-${i}.ts`).then(module => module.default);
}

// 메모리 캐시
const tarotCardCache = new Map<number, TarotCard>();

// 타로 카드 데이터를 가져오는 메인 함수
export async function getTarotCardAsync(cardNumber: number): Promise<TarotCard> {
  // 범위 검증
  if (cardNumber < 1 || cardNumber > 22) {
    throw new Error(`Invalid tarot card number: ${cardNumber}. Must be between 1 and 22.`);
  }

  // 캐시에서 확인
  if (tarotCardCache.has(cardNumber)) {
    return tarotCardCache.get(cardNumber)!;
  }

  try {
    // 동적으로 로드
    const tarotCard = await tarotCardLoaders[cardNumber]();
    
    // 캐시에 저장
    tarotCardCache.set(cardNumber, tarotCard);
    
    // 레거시 캐시도 업데이트 (getTarotCard와 호환성 유지)
    updateTarotCardCache(cardNumber, tarotCard);
    
    return tarotCard;
  } catch (error) {
    console.error(`Failed to load tarot card ${cardNumber}:`, error);
    
    // 폴백: 기본 카드 데이터 반환
    const fallbackCard: TarotCard = {
      number: cardNumber,
      name: `타로 카드 ${cardNumber}`,
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
    
    return fallbackCard;
  }
}

// 여러 카드를 한번에 로드하는 함수
export async function preloadTarotCards(cardNumbers: number[]): Promise<void> {
  const promises = cardNumbers.map(num => getTarotCardAsync(num));
  await Promise.all(promises);
}

// 모든 카드를 백그라운드에서 미리 로드하는 함수 (선택적)
export async function preloadAllTarotCards(): Promise<void> {
  const allCardNumbers = Array.from({ length: 22 }, (_, i) => i + 1);
  await preloadTarotCards(allCardNumbers);
}

// 캐시 통계
export function getTarotCacheStats() {
  return {
    cached: tarotCardCache.size,
    total: 22,
    percentage: Math.round((tarotCardCache.size / 22) * 100)
  };
}
