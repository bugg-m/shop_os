import { cn } from '@utils/ui-design';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outlined' | 'filled' | 'none';
}

const Input: React.FC<InputProps> = ({
  variant = 'default',
  className = '',
  ...props
}) => {
  const variantStyles = {
    none: '',
    default: 'border border-gray-300 rounded-md',
    outlined: 'border-2 border-blue-500 rounded-md',
    filled: 'bg-gray-100 border border-gray-300 rounded-md',
  };

  return (
    <input
      className={cn(
        `w-full px-5 py-2 text-base text-gray-700 transition focus:outline-none ${variantStyles[variant]}`,
        className
      )}
      {...props}
    />
  );
};

export default Input;
