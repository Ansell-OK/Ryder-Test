import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  icon
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-300 font-semibold text-sm md:text-base cursor-pointer";
  
  const variants = {
    primary: "bg-white text-text-dark rounded-full px-8 py-3 shadow-[0px_4px_12px_rgba(255,255,255,0.15)] hover:translate-y-[-2px] hover:shadow-[0px_0px_15px_rgba(255,255,255,0.3)]",
    secondary: "bg-white/5 text-white border border-white/10 rounded-full px-6 py-2.5 hover:border-primary-accent hover:text-primary-accent backdrop-blur-md",
    accent: "bg-primary-accent text-white rounded-full px-8 py-3 shadow-lg hover:bg-blue-600 hover:shadow-blue-500/30"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};