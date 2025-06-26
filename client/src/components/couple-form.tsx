import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { coupleAnalysisSchema, type CoupleAnalysisRequest } from "@shared/schema";

interface CoupleFormProps {
  onSubmit: (data: CoupleAnalysisRequest) => void;
  isLoading: boolean;
}

export default function CoupleForm({ onSubmit, isLoading }: CoupleFormProps) {
  const form = useForm<CoupleAnalysisRequest>({
    resolver: zodResolver(coupleAnalysisSchema),
    defaultValues: {
      mode: 'couple',
      person1Name: '',
      person1Birthdate: '',
      person1Gender: undefined,
      person2Name: '',
      person2Birthdate: '',
      person2Gender: undefined,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Person 1 */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">첫 번째 사람</h4>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="person1Name"
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
                name="person1Birthdate"
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
                name="person1Gender"
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
            </div>
          </div>

          {/* Person 2 */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">두 번째 사람</h4>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="person2Name"
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
                name="person2Birthdate"
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
                name="person2Gender"
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
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            type="submit"
            disabled={isLoading}
            className="mystical-button from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-white font-semibold py-4 px-8 rounded-xl"
          >
            <Sparkles className="mr-2" size={20} />
            {isLoading ? '분석 중...' : '커플 분석하기'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
