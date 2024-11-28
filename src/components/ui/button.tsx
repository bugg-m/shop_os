import React from 'react';
import { cn } from '@utils/ui-design';
import Image from 'next/image';
import spinner from '@assets/icons/spinner-icon.svg';
import { IButtonProps } from '@constants/types/ui-types';

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
    outline: 'text-black hover:bg-gray-100 border border-gray-300',
    outlineRounded:
      'text-black hover:bg-gray-100 border border-gray-300 rounded-full',
    primary: 'bg-black text-white hover:bg-zinc-800',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    primaryRounded: 'bg-black text-white hover:bg-zinc-800 rounded-full',
    secondaryRounded: 'bg-gray-200 text-black hover:bg-gray-300 rounded-full',
  };

  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={cn(
        `flex items-center justify-center gap-3 shadow-md rounded-md px-6 py-3 text-base font-normal transition-all ${variantStyles[variant]}`,
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
