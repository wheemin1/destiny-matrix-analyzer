import { useMutation } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { type PersonalAnalysisRequest, type CoupleAnalysisRequest } from "@shared/schema";
import { type AnalysisResult } from "@/lib/types";
import PersonalForm from "./personal-form";
import CoupleForm from "./couple-form";

interface InputFormProps {
  mode: 'personal' | 'couple';
  onAnalysisComplete: (result: AnalysisResult) => void;
  onBack: () => void;
}

export default function InputForm({ mode, onAnalysisComplete, onBack }: InputFormProps) {
  const { toast } = useToast();
  
  const analysisMutation = useMutation({
    mutationFn: async (data: PersonalAnalysisRequest | CoupleAnalysisRequest): Promise<AnalysisResult> => {
      const response = await apiRequest('POST', '/api/analyze', data);
      return response.json();
    },
    onSuccess: (result: AnalysisResult) => {
      toast({
        title: "분석 완료",
        description: "데스티니 매트릭스 분석이 완료되었습니다.",
      });
      onAnalysisComplete(result);
    },
    onError: (error: Error) => {
      toast({
        title: "분석 실패",
        description: error.message || "분석 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    },
  });

  const handlePersonalSubmit = (data: PersonalAnalysisRequest) => {
    analysisMutation.mutate(data);
  };

  const handleCoupleSubmit = (data: CoupleAnalysisRequest) => {
    analysisMutation.mutate(data);
  };

  return (
    <div className="glass-card p-8 mb-8">
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="ghost" 
          onClick={onBack}
          className="text-white/70 hover:text-white"
        >
          <ArrowLeft className="mr-2" size={16} />
          뒤로가기
        </Button>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            {mode === 'personal' ? '개인 정보 입력' : '커플 정보 입력'}
          </h3>
          <p className="text-white/70">정확한 분석을 위해 생년월일 정보가 필요합니다</p>
        </div>
        <div className="w-20"></div>
      </div>
      
      {mode === 'personal' ? (
        <PersonalForm 
          onSubmit={handlePersonalSubmit}
          isLoading={analysisMutation.isPending}
        />
      ) : (
        <CoupleForm 
          onSubmit={handleCoupleSubmit}
          isLoading={analysisMutation.isPending}
        />
      )}
    </div>
  );
}
