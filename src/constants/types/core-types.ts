import { StaticImageData } from 'next/image';

export interface ISearchBarProps {
  handleSearch: (value: string) => void;
}

export interface IHeaderProps {
  label: string;
  isBorder?: boolean;
  showBackButton?: boolean;
  showActionButton?: boolean;
  actionButtonText?: string;
  onBack?: () => void;
  onAction?: () => void;
}

export interface IStoreExampleCardProps {
  src: StaticImageData;
  label: string;
}
