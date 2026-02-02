import React from 'react';
import { PAYMENT_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'cta';
  className?: string;
  showIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  showIcon = true
}) => {
  // Enhanced base styles for readability: font-extrabold, tracking-wide
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-extrabold tracking-wide rounded-full transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-offset-2";
  
  const variants = {
    // Primary: Very strong Indigo
    primary: "bg-indigo-700 hover:bg-indigo-800 text-white shadow-xl hover:shadow-indigo-600/40 focus:ring-indigo-600",
    
    // CTA: High contrast (e.g., Orange or very dark) for main sales actions if needed, or just a distinct style.
    // Using a gradient for 'cta' to pop against both light and dark backgrounds
    cta: "bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white shadow-2xl hover:shadow-indigo-500/50 border border-indigo-500/50 focus:ring-violet-500",

    // Secondary: White with strong text
    secondary: "bg-white text-indigo-950 hover:bg-slate-50 shadow-lg border-2 border-slate-100 focus:ring-slate-300",
    
    // Outline: White text, thick border
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white/50",
  };

  return (
    <a 
      href={PAYMENT_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {showIcon && <ArrowRight className="ml-2 h-6 w-6 stroke-[3]" />}
    </a>
  );
};

export default Button;