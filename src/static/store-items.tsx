import { IStoreExampleCardProps } from '@constants/types/core-types';
import shirt from '@assets/images/shirt.png';
import makupBox from '@assets/images/makupBox.png';
import headphone from '@assets/images/headphone.png';
import googleDriveIcon from '@assets/icons/google-drive-icon.svg';
import linkIcon from '@assets/icons/link-icon.svg';
import pasteIcon from '@assets/icons/paste-icon.svg';
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

export const CreateStoreButtonItems: IStoreExampleCardProps[] = [
  {
    label: 'Google Drive',
    src: googleDriveIcon,
  },
  {
    label: 'Link',
    src: linkIcon,
  },
  {
    label: 'Plain Text',
    src: pasteIcon,
  },
];
