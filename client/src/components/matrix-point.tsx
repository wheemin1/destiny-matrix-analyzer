import React from "react";
import { type MatrixPointConfig, POINT_SIZES, CENTER_POINT_SIZE } from "@/lib/matrix-config";

interface MatrixPointProps {
  config: MatrixPointConfig;
  value: number;
  onClick: (value: number) => void;
}

export default function MatrixPoint({ config, value, onClick }: MatrixPointProps) {
  const sizeConfig = config.key === 'coreEnergy' ? CENTER_POINT_SIZE : POINT_SIZES[config.size];
  
  const handleClick = () => {
    onClick(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(value);
    }
  };

  return (
    <div 
      className="matrix-point absolute rounded-full flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 border-white/40 shadow-xl hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      style={{
        ...config.position,
        width: sizeConfig.width,
        height: sizeConfig.height,
        fontSize: sizeConfig.fontSize,
        background: config.style.background,
        boxShadow: config.style.boxShadow,
        borderWidth: config.style.borderWidth,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderStyle: 'solid'
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${config.label}: ${value}번. ${config.description}`}
      title={`${config.label}: ${value}번`}
    >
      {value}
    </div>
  );
}
