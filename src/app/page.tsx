'use client';

import SearchBar from '@components/searchBar/SearchBar';
import Button from '@components/ui/button';
import { IQuickMenuItems } from '@constants/types/nav-types';
import { QuickMenuItems } from '@static/search-nav-items';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const handleSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-semibold">
        How can I assist you today?
      </h1>
      <div className="relative w-3/5">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="mt-6 flex space-x-4">
        {QuickMenuItems.map(({ path, icon, label }: IQuickMenuItems) => (
          <Link href={path} key={label}>
            <Button
              variant="outlineRounded"
              value={label}
              iconLeft={<Image src={icon} alt={label} />}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
