import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';

// Import the needed components
import InputForm from '@/components/input-form';

export default function MatrixPage() {
  const [location, setLocation] = useLocation();

  // Redirect to home if accessed directly for now
  useEffect(() => {
    setLocation('/');
  }, [setLocation]);

  return (
    <>
      <Helmet>
        <title>운명의 매트릭스 13포인트 계산기 | 무료 Destiny Matrix 검사</title>
        <meta name="description" content="5초 만에 13포인트 운명 차트와 Love·Money·Karmic Tail을 무료로 해석합니다." />
        <meta name="keywords" content="운명 매트릭스, 무료 계산기, 13 포인트 차트, 타로 분석" />
        <link rel="canonical" href="https://destinymatrix.kr/matrix" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
        {/* This page will redirect to home for now */}
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-3xl font-bold mb-4">운명의 매트릭스 13포인트 계산기</h1>
          <p className="mb-8">리다이렉트 중...</p>
        </div>
      </div>
    </>
  );
}
