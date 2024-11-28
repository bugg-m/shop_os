import StoreExampleCard from '@components/cards/StoreExampleCard';
import Header from '@components/header/Header';
import Button from '@components/ui/button';
import { IStoreExampleCardProps } from '@constants/types/core-types';
import { StoreExampleItems } from '@static/store-example-items';
import Image from 'next/image';
import React from 'react';
import addCircle from '@assets/icons/add-circle-icon.svg';

const Stores = () => {
  return (
    <div className="flex size-full items-start justify-center">
      <div className="w-1/2">
        <header>
          <Header label="My Stores" />
        </header>
        <div>
          <div className="rounded-lg bg-neutral-100 px-5 py-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Generate a Store
            </h2>
            <div className="text-sm font-medium text-gray-500">
              <p className="mb-4">
                Generative stores are AI built shopping destinations for your
                users. They adapt, personalize and present information real
                time. It&apos;s simply a better way to shop.
              </p>
              <p>
                Start by adding everything in your mind about the brand and what
                you are selling.
              </p>
            </div>
          </div>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-10">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Examples
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {StoreExampleItems.map(
                  ({ src, label }: IStoreExampleCardProps) => (
                    <StoreExampleCard key={label} src={src} label={label} />
                  )
                )}
              </div>
            </div>
            <div>
              <Button
                variant="primaryRounded"
                value="Create a Store"
                iconLeft={<Image src={addCircle} alt="add icon" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stores;
