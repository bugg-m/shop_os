import React from 'react';
import { cn } from '@utils/ui-design';
import Image from 'next/image';
import spinner from '@assets/icons/spinner-icon.svg';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  variant?: 'primary' | 'secondary';
  iconLeft?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  iconLeft,
  className = '',
  value = '',
  onClick,
  loading = false,
  disabled = false,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-600',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
  };

  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={cn(
        `flex items-center justify-center gap-3 rounded-md px-6 py-3 text-base font-normal transition-all ${variantStyles[variant]}`,
        className
      )}
      {...props}
    >
      {iconLeft && !loading && <span>{iconLeft}</span>}
      {loading && (
        <Image src={spinner} alt="spinner" className="size-6 animate-spin" />
      )}
      <span>{loading ? 'Generating...' : value}</span>
    </button>
  );
};

export default Button;
