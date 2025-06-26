import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { personalAnalysisSchema, type PersonalAnalysisRequest } from "@shared/schema";

interface PersonalFormProps {
  onSubmit: (data: PersonalAnalysisRequest) => void;
  isLoading: boolean;
}

export default function PersonalForm({ onSubmit, isLoading }: PersonalFormProps) {
  const form = useForm<PersonalAnalysisRequest>({
    resolver: zodResolver(personalAnalysisSchema),
    defaultValues: {
      mode: 'personal',
      personalName: '',
      personalBirthdate: '',
      personalGender: undefined,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
        <FormField
          control={form.control}
          name="personalName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">이름</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="이름을 입력하세요"
                  className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-yellow-400 focus:ring-yellow-400/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="personalBirthdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">생년월일</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="date"
                  className="bg-white/10 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="personalGender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">성별</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50">
                    <SelectValue placeholder="성별을 선택하세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-900 border-white/30">
                  <SelectItem value="male" className="text-white hover:bg-white/10">남성</SelectItem>
                  <SelectItem value="female" className="text-white hover:bg-white/10">여성</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full mystical-button from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-semibold py-4 rounded-xl"
        >
          <Sparkles className="mr-2" size={20} />
          {isLoading ? '분석 중...' : '운명 분석하기'}
        </Button>
      </form>
    </Form>
  );
}
