import React from 'react';
import { cn } from '@utils/ui-design';
import Image from 'next/image';
import spinner from '@assets/icons/spinner-icon.svg';
import { IButtonProps } from '@constants/types/ui-types';

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  shadowVariant = 'shadow',
  iconLeft,
  className = '',
  value = '',
  onClick,
  loading = false,
  disabled = false,
  ...props
}) => {
  const variantStyles = {
    outline: 'text-black hover:bg-gray-100 border border-gray-200',
    outlineRounded:
      'text-black hover:bg-gray-100 border border-gray-200 rounded-full',
    primary: 'bg-black text-white hover:bg-zinc-800',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    primaryRounded: 'bg-black text-white hover:bg-zinc-800 rounded-full',
    secondaryRounded: 'bg-gray-200 text-black hover:bg-gray-300 rounded-full',
  };

  const shadowStyles = {
    none: '',
    shadow: 'shadow',
    shadowMd: 'shadow-md',
    shadowLg: 'shadow-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={cn(
        `flex items-center justify-center gap-3 rounded-md px-6 py-3 text-base font-normal transition-all ${variantStyles[variant]} ${shadowStyles[shadowVariant]}`,
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
