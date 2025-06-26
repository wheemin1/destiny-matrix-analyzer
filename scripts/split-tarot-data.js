import fs from 'fs';
import path from 'path';

// 타로 데이터 파일 분할 스크립트
const sourceFile = './client/src/lib/tarot-data.ts';
const targetDir = './client/src/lib/tarot-cards';

// 타로 데이터 파일 읽기
const content = fs.readFileSync(sourceFile, 'utf8');
const lines = content.split('\n');

// 각 카드의 시작과 끝 라인 찾기
const cardRanges = [];
let currentCard = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // 카드 시작 라인 찾기 (예: "  1: {")
  const cardMatch = line.match(/^\s+(\d+):\s*{/);
  if (cardMatch) {
    // 이전 카드 종료
    if (currentCard) {
      currentCard.end = i - 1;
      cardRanges.push({ ...currentCard, end: currentCard.end });
    }
    
    // 새 카드 시작
    currentCard = {
      number: parseInt(cardMatch[1]),
      start: i
    };
  }
  
  // 카드 종료 라인 찾기 (다음 카드 시작 전까지)
  if (line.match(/^\s*}\s*,?\s*$/) && currentCard && !currentCard.end) {
    // 다음 라인이 카드 시작이거나 파일 끝이면 현재 카드 종료
    const nextLine = lines[i + 1];
    if (!nextLine || nextLine.match(/^\s*(\d+:\s*{|};)/) || nextLine.trim() === '') {
      currentCard.end = i;
      cardRanges.push({ ...currentCard, end: currentCard.end });
      currentCard = null;
    }
  }
}

// 마지막 카드 처리
if (currentCard) {
  currentCard.end = lines.length - 1;
  cardRanges.push({ ...currentCard, end: currentCard.end });
}

console.log('Found card ranges:', cardRanges);

// 각 카드 파일 생성
for (const range of cardRanges) {
  const cardLines = lines.slice(range.start, range.end + 1);
  
  // 인덴트 제거 및 객체 형태로 변환
  let cardContent = cardLines.join('\n');
  
  // 카드 번호와 중괄호 제거
  cardContent = cardContent.replace(/^\s*\d+:\s*{/, '{');
  
  // 마지막 쉼표 제거
  cardContent = cardContent.replace(/,\s*$/, '');
  
  // 파일 내용 생성
  const fileContent = `import { TarotCard } from '../tarot-data';

const card${range.number}: TarotCard = ${cardContent};

export default card${range.number};
`;

  // 파일 저장
  const filename = `card-${range.number}.ts`;
  const filepath = path.join(targetDir, filename);
  fs.writeFileSync(filepath, fileContent, 'utf8');
  
  console.log(`Created ${filename}`);
}

console.log('All card files created successfully!');
