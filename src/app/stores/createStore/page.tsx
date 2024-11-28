import React from 'react';
import Input from '@components/ui/input';
import Header from '@components/header/Header';
import ContainerWrapper from '@wrappers/ContainerWrapper';
import TextArea from '@components/ui/textarea';
import UploadFile from '@components/ui/uploadFile';
import Button from '@components/ui/button';
import Image from 'next/image';
import { CreateStoreButtonItems } from '@static/store-items';

const CreateStore: React.FC = () => {
  return (
    <ContainerWrapper className="items-start">
      <div className="w-3/4 px-5">
        <header>
          <Header label="Create a new store" />
        </header>
        <div className="mx-auto">
          <div className="mb-4">
            <Input
              id="storeName"
              type="text"
              placeholder="Name your store"
              variant="defaultRounded"
              label="Store Name"
            />
          </div>

          <div className="mb-4">
            <TextArea
              id="storeDescription"
              placeholder="Describe your store"
              variant="default"
              label="Store Description"
            />
          </div>

          <div className="mb-4">
            <UploadFile />
          </div>

          <div className="mb-4 flex items-center justify-between gap-4">
            {CreateStoreButtonItems.map(({ label, src }) => (
              <Button
                variant="outline"
                value={label}
                iconLeft={<Image src={src} alt={label} />}
                className="rounded-xl w-full"
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              className="rounded-xl w-full"
              value="Upload"
            />
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default CreateStore;
