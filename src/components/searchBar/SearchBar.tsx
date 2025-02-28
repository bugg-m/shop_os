// 'use client';

import Input from '@components/ui/input';
import { ISearchBarProps } from '@constants/types/core-types';
import React, { useState } from 'react';
import { MdAddCircleOutline, MdArrowUpward } from 'react-icons/md';

const SearchBar: React.FC<ISearchBarProps> = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = (value: string) => {
    handleSearch(value);
    setSearchQuery(value);
  };

  return (
    <div className="flex items-center space-x-2 rounded-full border border-gray-300 bg-white px-2 py-1">
      <div className="ml-1 flex items-center justify-center">
        <MdAddCircleOutline size={20} />
      </div>
      <Input
        type="text"
        placeholder="What are we selling today?"
        value={searchQuery}
        onChange={(e) => onInputChange(e.target.value)}
        variant="none"
        className="w-full rounded-full px-2"
      />
      <div className="flex items-center justify-center rounded-full bg-gray-300 p-2">
        <MdArrowUpward size={20} color="white" />
      </div>
    </div>
  );
};

export default SearchBar;
