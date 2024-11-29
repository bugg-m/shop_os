import { IStoreExampleCardProps } from '@constants/types/core-types';
import Image from 'next/image';
import React from 'react';

const StoreExampleCard: React.FC<IStoreExampleCardProps> = ({ src, label }) => {
  return (
    <div>
      <div className="mb-2 rounded-md">
        <Image src={src} alt={label} className="size-full object-cover" />
      </div>
      <p className="text-nowrap text-sm font-medium text-gray-500">
        {label.length > 25 ? `${label.slice(0, 25)}...` : label}
      </p>
    </div>
  );
};

export default StoreExampleCard;
