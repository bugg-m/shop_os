import { IMenuItem } from '@constants/types/nav-types';
import homeIcon from '@assets/icons/home-icon.svg';
import selectedHomeIcon from '@assets/icons/selected-home-icon.svg';
import storeIcon from '@assets/icons/store-icon.svg';
import selectedStoreIcon from '@assets/icons/selected-store-icon.svg';
import workflowIcon from '@assets/icons/workflow-icon.svg';
import selectedWorkflowIcon from '@assets/icons/selected-workflow-icon.svg';

export const MenuItems: IMenuItem[] = [
  {
    icon: homeIcon,
    selectedIcon: selectedHomeIcon,
    path: '/',
  },
  {
    icon: storeIcon,
    selectedIcon: selectedStoreIcon,
    path: '/stores',
  },
  {
    icon: workflowIcon,
    selectedIcon: selectedWorkflowIcon,
    path: '/workflows',
  },
];
