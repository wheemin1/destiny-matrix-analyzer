import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
          <div className="glass-card p-8 max-w-md text-center">
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">앗! 뭔가 잘못되었습니다</h2>
            <p className="text-white/70 mb-6">
              예상치 못한 오류가 발생했습니다. 페이지를 새로고침하거나 다시 시도해보세요.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-4 bg-red-900/20 rounded p-4 border border-red-500/30">
                <summary className="text-red-300 cursor-pointer mb-2">개발자 정보</summary>
                <pre className="text-xs text-red-200 overflow-auto">
                  {this.state.error.message}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={this.handleReset}
                className="mystical-button from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white"
              >
                <RefreshCw className="mr-2" size={16} />
                다시 시도
              </Button>
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                페이지 새로고침
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export function useErrorHandler() {
  return (error: Error, errorInfo?: ErrorInfo) => {
    console.error("Error caught by useErrorHandler:", error, errorInfo);
    // You could also send to error reporting service here
  };
}
