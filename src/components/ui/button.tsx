import { cn } from '@utils/ui-design';
import Image from 'next/image';
import React from 'react';
// import spinnerIcon from '@assets/icons/spinner-icon.svg';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  variant?: 'default' | 'primary' | 'secondary';
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  variant = 'default',
  iconLeft,
  iconRight,
  className = '',
  value = '',
  onClick,
  loading = false,
  disabled = false,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-gray-300 text-black hover:bg-gray-400',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  };

  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={cn(
        `flex items-center justify-center rounded-md px-6 py-2 font-medium transition-all ${variantStyles[variant]}`,
        className
      )}
      {...props}
    >
      {iconLeft && !loading && <span className="mr-2">{iconLeft}</span>}
      {loading && (
        <div className="ml-2">
          {/* <Image src={spinnerIcon} alt="spinner" className="size-5" /> */}
        </div>
      )}
      <span>{loading ? 'Generating...' : value}</span>
      {iconRight && !loading && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
