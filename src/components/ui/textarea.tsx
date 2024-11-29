import { ITextAreaProps } from '@constants/types/ui-types';
import { cn } from '@utils/ui-design';
import React from 'react';

const TextArea: React.FC<ITextAreaProps> = ({
  variant = 'default',
  label,
  className = '',
  ...props
}) => {
  const variantStyles = {
    none: '',
    default: 'border border-gray-200 rounded-lg',
    filled: 'bg-gray-100 border border-gray-200 rounded-lg',
    defaultRounded: 'border border-gray-200 rounded-full',
    filledRounded: 'bg-gray-100 border border-gray-200 rounded-full',
  };

  return (
    <div>
      <label
        htmlFor={label}
        className="mb-2 block text-sm font-semibold text-gray-900"
      >
        {label}
      </label>
      <textarea
        className={cn(
          `w-full min-h-32 px-5 py-2 text-base text-gray-700 transition focus:outline-none ${variantStyles[variant]}`,
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TextArea;
