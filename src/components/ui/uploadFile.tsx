'use client';

import Image from 'next/image';
import uploadIcon from '@assets/icons/upload-icon.svg';
import React, { useRef, useState } from 'react';
import { IUploadFileProps } from '@constants/types/ui-types';

const UploadFile: React.FC<IUploadFileProps> = ({
  title = 'Upload Sources',
  subtitle = 'Drag and drop or choose file to upload',
  accept = '*/*',
  multiple = false,
  onFileSelect,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileSelect) {
      onFileSelect(event.target.files);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    if (onFileSelect) {
      onFileSelect(files);
    }
  };

  return (
    <div>
      <div
        className={`relative flex h-44 flex-col items-center justify-center rounded-xl border-2 ${
          isDragging
            ? 'border-blue-500 bg-blue-100'
            : 'border-dashed border-gray-300 bg-gray-100'
        } transition hover:bg-gray-200`}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Image src={uploadIcon} alt="Upload" className="mb-3 size-8" />
        <p className="font-medium text-gray-700">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <input
          type="file"
          ref={fileInputRef}
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          className="absolute inset-0 cursor-pointer opacity-0"
          aria-label="Upload Files"
        />
      </div>
    </div>
  );
};

export default UploadFile;
