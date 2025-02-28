import { IInputProps } from '@constants/types/ui-types';
import { cn } from '@utils/ui-design';
import React from 'react';

const Input: React.FC<IInputProps> = ({
  variant = 'default',
  label,
  className = '',
  ...props
}) => {
  const variantStyles = {
    none: '',
    default: 'border border-gray-200 rounded-md',
    filled: 'bg-gray-100 border border-gray-200 rounded-md',
    defaultRounded: 'border border-gray-200 rounded-full',
    filledRounded: 'bg-gray-100 border border-gray-200 rounded-full',
  };

  return (
    <>
      {label && (
        <label
          htmlFor={label}
          className="mb-2 block text-sm font-semibold text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        className={cn(
          `w-full px-5 py-2 text-base text-gray-700 transition focus:outline-none ${variantStyles[variant]}`,
          className
        )}
        {...props}
      />
    </>
  );
};

export default Input;
