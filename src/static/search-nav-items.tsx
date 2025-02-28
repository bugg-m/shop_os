import { IQuickMenuItems } from '@constants/types/nav-types';
import uploadIcon from '@assets/icons/upload-icon.svg';
import robotIcon from '@assets/icons/robot-icon.svg';
import imageIcon from '@assets/icons/image-icon.svg';

export const QuickMenuItems: IQuickMenuItems[] = [
  {
    path: '/stores',
    icon: uploadIcon,
    label: 'Upload',
  },
  {
    path: '/agents',
    icon: robotIcon,
    label: 'Agents',
  },
  {
    path: '/templates',
    icon: imageIcon,
    label: 'Templates',
  },
];
