# 🌟 Destiny Matrix Analyzer

**타로로 읽는 인생 로드맵** - 22개의 타로 아르카나가 만들어내는 신비로운 매트릭스를 통해 당신의 진정한 운명과 숨겨진 재능을 발견하세요.

Based on Natalia Ladini's Destiny Matrix System

[![GitHub stars](https://img.shields.io/github/stars/wheemin1/destiny-matrix-analyzer.svg?style=social&label=Star)](https://github.com/wheemin1/destiny-matrix-analyzer)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-100%25-blue.svg)](https://www.typescriptlang.org/)

## ✨ 주요 기능

- 🔮 **개인 분석**: 나만의 매트릭스로 성격, 재능, 인생 목적을 깊이 있게 분석
- 💕 **커플 분석**: 두 사람의 매트릭스를 비교하여 관계의 조화와 성장 포인트 발견
- ⭐ **상세 해석**: 각 포인트별 의미와 실생활 적용 방법까지 자세한 가이드 제공
- 🚀 **Lazy Loading**: 최적화된 성능으로 빠른 로딩 속도
- 📱 **반응형 디자인**: 모든 디바이스에서 완벽한 사용자 경험
- 📱 **반응형 디자인**: 모든 기기에서 완벽한 사용자 경험

## 🛠️ 기술 스택

### Frontend
- **React 18** + **TypeScript**
- **Vite** - 빠른 개발 서버 및 빌드 도구
- **Tailwind CSS** - 모던한 스타일링
- **Radix UI** - 접근성 중심의 UI 컴포넌트
- **Framer Motion** - 부드러운 애니메이션
- **Lucide React** - 아이콘 라이브러리

### Backend
- **Express.js** + **TypeScript**
- **메모리 스토리지** - 세션 기반 결과 저장
- **자동 정리 시스템** - 메모리 효율성 관리

### 아키텍처
- **Lazy Loading** - 타로 카드 데이터 동적 로딩
- **컴포넌트 기반 설계** - 재사용 가능한 모듈화
- **타입 안전성** - 전체 애플리케이션 TypeScript 적용
- **에러 바운더리** - 안정적인 사용자 경험

## 🚀 설치 및 실행

### 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Windows)
npm run dev

# 개발 서버 실행 (Linux/macOS)
npm run dev:linux

# TypeScript 타입 체크
npm run check
```

### 운영 환경

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행 (Windows)
npm run start

# 프로덕션 서버 실행 (Linux/macOS)
npm run start:linux
```

## 📁 프로젝트 구조

```
DestinyMatrixAnalyzer/
├── client/                 # 프론트엔드 React 앱
│   ├── src/
│   │   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── lib/           # 유틸리티 및 비즈니스 로직
│   │   ├── pages/         # 페이지 컴포넌트
│   │   └── hooks/         # 커스텀 React 훅스
├── server/                # 백엔드 Express 서버
├── shared/                # 공유 타입 정의
├── scripts/               # 유틸리티 스크립트
└── package.json
```

## 🔮 데스티니 매트릭스 시스템

이 애플리케이션은 나탈리아 라디니의 데스티니 매트릭스 시스템을 구현합니다:

- **22개 메이저 아르카나** 타로 카드 사용
- **생년월일 기반** 계산법
- **매트릭스 구조**의 13개 포인트 분석
- **개인 성격, 재능, 카르마** 등 다면적 해석

## 📊 성능 최적화

- **Lazy Loading**: 필요한 타로 카드 데이터만 동적 로딩
- **코드 스플리팅**: Vite를 통한 자동 번들 최적화
- **메모리 관리**: 자동 세션 정리 및 캐시 최적화
- **TypeScript**: 컴파일 타임 오류 방지

## 🚀 Netlify 배포

이 프로젝트는 Netlify에 최적화되어 있으며, 다음과 같이 배포할 수 있습니다:

### Netlify 수동 배포

1. Netlify 계정 생성 및 로그인
2. "Add new site" > "Import an existing project" 선택
3. GitHub 저장소 연결
4. 다음과 같은 배포 설정:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Functions directory: `dist/netlify/functions`
5. "Advanced" > "New variable"에서 필요한 환경 변수 추가
6. "Deploy site" 클릭

### Netlify CLI 배포

```bash
# Netlify CLI 설치
npm install -g netlify-cli

# Netlify 로그인
netlify login

# 사이트 초기화 및 설정
netlify init

# 사이트 배포
netlify deploy --prod
```

### 환경 변수

Netlify 대시보드에서 다음 환경 변수 설정:

- `NODE_ENV`: `production`
- 필요한 경우 추가 환경 변수 설정

### 배포 확인

- 서버리스 함수: `https://your-site-name.netlify.app/.netlify/functions/server`
- API 엔드포인트: `https://your-site-name.netlify.app/api/analyze`

## 🛡️ 보안 및 안정성

- **에러 바운더리**: React 컴포넌트 오류 격리
- **타입 안전성**: 전체 애플리케이션 TypeScript 적용
- **입력 검증**: 클라이언트/서버 양쪽 데이터 검증
- **메모리 제한**: 서버 리소스 보호

## 📜 라이선스

MIT License

## 👨‍💻 개발자

데스티니 매트릭스 분석기는 최신 웹 기술을 활용하여 사용자 친화적이고 성능 최적화된 타로 분석 도구를 제공합니다.

---

✨ **운명의 매트릭스로 당신의 인생을 읽어보세요** ✨
