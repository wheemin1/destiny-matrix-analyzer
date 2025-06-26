import { useLocation } from 'wouter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function MatchPage() {
  const [location, setLocation] = useLocation();
  
  // Redirect to home for now
  useEffect(() => {
    setLocation('/');
  }, [setLocation]);
  
  return (
    <>
      <Helmet>
        <title>궁합 분석 | 운명의 매트릭스 무료 검사기</title>
        <meta name="description" content="두 사람의 생년월일로 13포인트 매트릭스 궁합을 무료로 분석하세요. 관계의 시너지와 도전 포인트를 확인하세요." />
        <meta name="keywords" content="운명 매트릭스 궁합, 커플 분석, 무료 궁합 검사, 아르카나 궁합" />
        <link rel="canonical" href="https://destinarymatrix.kr/match" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-3xl font-bold mb-4">운명의 매트릭스 궁합 분석</h1>
          <p className="mb-8">리다이렉트 중...</p>
        </div>
      </div>
    </>
  );
}
