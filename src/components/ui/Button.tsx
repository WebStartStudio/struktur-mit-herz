import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, className = '', variant = 'primary' }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-md transition-colors';
  const variantClasses = variant === 'primary' 
    ? 'bg-sage text-white hover:bg-opacity-90' 
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}