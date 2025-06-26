import { Helmet } from 'react-helmet';

export default function FAQPage() {
  const faqs = [
    {
      question: "운명의 매트릭스가 무엇인가요?",
      answer: "운명의 매트릭스는 생년월일을 바탕으로 22개의 타로 아르카나를 활용하여 13개의 핵심 포인트를 분석하는 시스템입니다. 이를 통해 개인의 성격, 재능, 사랑 패턴, 재정 흐름, 카르마적 과제 등을 확인할 수 있습니다."
    },
    {
      question: "분석 결과는 무엇을 알려주나요?",
      answer: "13개의 매트릭스 포인트를 통해 사랑 라인, 머니 라인, 카르마 꼬리 등의 패턴을 확인할 수 있으며, 10년 주기로 변화하는 인생의 흐름을 예측하는 데 도움을 줍니다."
    },
    {
      question: "이 분석은 과학적으로 검증된 것인가요?",
      answer: "운명의 매트릭스는 과학적 심리 검사가 아닌 자기 성찰 및 엔터테인먼트 용도로 활용되는 시스템입니다. 실제 결정은 자신의 판단에 따라 내려야 합니다."
    },
    {
      question: "어떻게 결과를 해석해야 하나요?",
      answer: "각 매트릭스 포인트는 타로 아르카나의 상징과 의미를 담고 있습니다. 해석 가이드에서 각 포인트의 의미를 확인하고, 자신의 상황에 적용해 볼 수 있습니다."
    },
    {
      question: "정말 무료인가요?",
      answer: "네, 기본 13포인트 매트릭스 분석은 완전 무료로 제공됩니다. 추가적인 심층 해석이나 전문가 상담은 유료 서비스로 제공될 수 있습니다."
    }
  ];

  return (
    <>
      <Helmet>
        <title>자주 묻는 질문 | 운명의 매트릭스 무료 검사기</title>
        <meta name="description" content="운명의 매트릭스 분석에 대한 자주 묻는 질문과 답변을 확인하세요. 13포인트 매트릭스 차트의 의미와 활용법을 알아보세요." />
        <meta name="keywords" content="운명 매트릭스 FAQ, 자주 묻는 질문, 매트릭스 해석, 타로 차트 활용법" />
        <link rel="canonical" href="https://destinarymatrix.kr/faq" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8 text-center text-white">자주 묻는 질문 (FAQ)</h1>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-3">{faq.question}</h2>
                <p className="text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
