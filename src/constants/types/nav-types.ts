import { StaticImageData } from 'next/image';

export interface IMenuItems {
  path: string;
  icon: StaticImageData;
  selectedIcon: StaticImageData;
}
export interface IQuickMenuItems {
  path: string;
  label: string;
  icon: StaticImageData;
}
