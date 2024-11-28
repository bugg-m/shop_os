import { IContainerWrapperProps } from '@constants/types/core-types';
import { cn } from '@utils/ui-design';
import React from 'react';

const ContainerWrapper: React.FC<IContainerWrapperProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={cn('flex size-full items-center justify-center', className)}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
