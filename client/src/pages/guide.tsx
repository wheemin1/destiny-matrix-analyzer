import { Helmet } from 'react-helmet';

export default function GuidePage() {
  const guideItems = [
    {
      title: "1. 매트릭스 차트 이해하기",
      content: "13포인트 매트릭스 차트는 당신의 생년월일을 바탕으로 형성됩니다. 각 포인트는 생명의 특정 영역을 나타내며, 22개의 타로 아르카나 중 하나가 배정됩니다."
    },
    {
      title: "2. 사랑 라인 해석",
      content: "사랑 라인은 당신의 감정적 패턴과 관계에서의 성향을 보여줍니다. 이 라인에 나타난 아르카나를 통해 당신이 어떤 유형의 파트너에게 끌리는지, 어떤 관계 패턴을 반복하는지 이해할 수 있습니다."
    },
    {
      title: "3. 머니 라인 활용",
      content: "머니 라인은 당신의 재정적 패턴과 부에 대한 접근 방식을 보여줍니다. 이 라인을 통해 재정적 강점과 약점을 파악하고, 번영을 위한 최적의 경로를 찾을 수 있습니다."
    },
    {
      title: "4. 카르마 꼬리 이해",
      content: "카르마 꼬리는 당신이 이번 생에서 해결해야 할 과제를 나타냅니다. 이 패턴을 이해함으로써 반복되는 어려움을 극복하고 영적 성장을 이룰 수 있습니다."
    },
    {
      title: "5. 10년 주기 활용하기",
      content: "매트릭스는 10년 주기로 변화하는 당신의 인생 흐름을 보여줍니다. 각 주기의 특성을 이해하면 다가오는 도전과 기회에 더 잘 대비할 수 있습니다."
    }
  ];

  return (
    <>
      <Helmet>
        <title>해석 가이드 | 운명의 매트릭스 무료 검사기</title>
        <meta name="description" content="운명의 매트릭스 13포인트 차트 해석 가이드. 사랑 라인, 머니 라인, 카르마 꼬리를 이해하고 일상에 적용하는 방법을 알아보세요." />
        <meta name="keywords" content="운명 매트릭스 가이드, 매트릭스 해석법, 타로 차트 활용, 아르카나 의미" />
        <link rel="canonical" href="https://destinarymatrix.kr/guide" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8 text-center text-white">매트릭스 해석 가이드</h1>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {guideItems.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-3">{item.title}</h2>
                <p className="text-white/80">{item.content}</p>
              </div>
            ))}
            
            <div className="bg-yellow-600/20 backdrop-blur-md rounded-lg p-6 shadow-lg border border-yellow-500/30">
              <h2 className="text-xl font-semibold text-white mb-3">전문가 상담 받기</h2>
              <p className="text-white/80">
                더 깊이 있는 매트릭스 해석과 개인화된 가이드가 필요하신가요? 전문 상담사와의 1:1 세션을 통해 당신만의 운명 지도를 더 자세히 살펴볼 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
