// Matrix visualization configuration
export interface MatrixPointConfig {
  key: keyof MatrixPoints;
  size: 'small' | 'medium' | 'large';
  position: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    transform: string;
  };
  style: {
    background: string;
    boxShadow: string;
    borderWidth: string;
  };
  label: string;
  description: string;
}

export interface MatrixPoints {
  coreEnergy: number;
  spiritualPurpose: number;
  behavior: number;
  talent: number;
  karma: number;
  additional1: number;
  additional2: number;
  additional3: number;
  additional4: number;
  outer1: number;
  outer2: number;
  outer3: number;
  outer4: number;
}

export const MATRIX_POINT_CONFIGS: MatrixPointConfig[] = [
  // Main cardinal points
  {
    key: 'spiritualPurpose',
    size: 'large',
    position: {
      left: '50%',
      top: '12%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
      boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
      borderWidth: '2px'
    },
    label: '영적 목적',
    description: '인생의 영적 목표와 사명'
  },
  {
    key: 'talent',
    size: 'large',
    position: {
      right: '12%',
      top: '50%',
      transform: 'translate(50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #10B981, #059669)',
      boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
      borderWidth: '2px'
    },
    label: '재능',
    description: '타고난 재능과 능력'
  },
  {
    key: 'karma',
    size: 'large',
    position: {
      left: '50%',
      bottom: '12%',
      transform: 'translate(-50%, 50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #EF4444, #DC2626)',
      boxShadow: '0 0 30px rgba(239, 68, 68, 0.4)',
      borderWidth: '2px'
    },
    label: '카르마',
    description: '해결해야 할 과제와 시련'
  },
  {
    key: 'behavior',
    size: 'large',
    position: {
      left: '12%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
      boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
      borderWidth: '2px'
    },
    label: '행동 패턴',
    description: '기본적인 행동 양식과 성향'
  },
  // Center point
  {
    key: 'coreEnergy',
    size: 'large',
    position: {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #F59E0B, #D97706)',
      boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)',
      borderWidth: '3px'
    },
    label: '핵심 에너지',
    description: '인생의 중심 에너지와 본질'
  },
  // Additional inner points
  {
    key: 'additional1',
    size: 'small',
    position: {
      left: '72%',
      top: '28%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
      borderWidth: '1px'
    },
    label: '추가 포인트 1',
    description: '보조 에너지 포인트'
  },
  {
    key: 'additional2',
    size: 'small',
    position: {
      left: '72%',
      top: '72%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #F97316, #EA580C)',
      boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)',
      borderWidth: '1px'
    },
    label: '추가 포인트 2',
    description: '보조 에너지 포인트'
  },
  {
    key: 'additional3',
    size: 'small',
    position: {
      left: '28%',
      top: '72%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #EC4899, #DB2777)',
      boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
      borderWidth: '1px'
    },
    label: '추가 포인트 3',
    description: '보조 에너지 포인트'
  },
  {
    key: 'additional4',
    size: 'small',
    position: {
      left: '28%',
      top: '28%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #06B6D4, #0891B2)',
      boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
      borderWidth: '1px'
    },
    label: '추가 포인트 4',
    description: '보조 에너지 포인트'
  },
  // Outer ring points
  {
    key: 'outer1',
    size: 'medium',
    position: {
      left: '50%',
      top: '2%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
      boxShadow: '0 0 25px rgba(99, 102, 241, 0.3)',
      borderWidth: '2px'
    },
    label: '외부 포인트 1',
    description: '외부 고리 에너지'
  },
  {
    key: 'outer2',
    size: 'medium',
    position: {
      right: '2%',
      top: '50%',
      transform: 'translate(50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #14B8A6, #0D9488)',
      boxShadow: '0 0 25px rgba(20, 184, 166, 0.3)',
      borderWidth: '2px'
    },
    label: '외부 포인트 2',
    description: '외부 고리 에너지'
  },
  {
    key: 'outer3',
    size: 'medium',
    position: {
      left: '50%',
      bottom: '2%',
      transform: 'translate(-50%, 50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #F59E0B, #D97706)',
      boxShadow: '0 0 25px rgba(245, 158, 11, 0.3)',
      borderWidth: '2px'
    },
    label: '외부 포인트 3',
    description: '외부 고리 에너지'
  },
  {
    key: 'outer4',
    size: 'medium',
    position: {
      left: '2%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    style: {
      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
      boxShadow: '0 0 25px rgba(139, 92, 246, 0.3)',
      borderWidth: '2px'
    },
    label: '외부 포인트 4',
    description: '외부 고리 에너지'
  }
];

export const POINT_SIZES = {
  small: { width: '2.5rem', height: '2.5rem', fontSize: '0.875rem' }, // w-10 h-10 text-sm
  medium: { width: '3rem', height: '3rem', fontSize: '0.875rem' },    // w-12 h-12 text-sm
  large: { width: '3.5rem', height: '3.5rem', fontSize: '1.125rem' }  // w-14 h-14 text-lg
};

// Center point gets special treatment
export const CENTER_POINT_SIZE = { width: '4rem', height: '4rem', fontSize: '1.25rem' }; // w-16 h-16 text-xl
