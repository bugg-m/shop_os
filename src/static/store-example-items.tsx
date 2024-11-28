import { IStoreExampleCardProps } from '@constants/types/core-types';
import shirt from '@assets/images/shirt.png';
import makupBox from '@assets/images/makupBox.png';
import headphone from '@assets/images/headphone.png';

export const StoreExampleItems: IStoreExampleCardProps[] = [
  {
    label: 'Men’s Dress Shirt',
    src: shirt,
  },
  {
    label: 'Natural Eyeshadow Palette',
    src: makupBox,
  },
  {
    label: 'Noise - Cancelling Headphone',
    src: headphone,
  },
];
