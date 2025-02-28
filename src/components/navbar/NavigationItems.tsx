'use client';

import React, { useMemo } from 'react';
import { MenuItems } from '@static/nav-items';
import { IMenuItems } from '@constants/types/nav-types';
import Link from 'next/link';
import Image from 'next/image';
import usePathNavigator from '@hooks/useNavigator';

const NavigationItems: React.FC = () => {
  const { pathname } = usePathNavigator();

  const menuItemsWithActiveState = useMemo(
    () =>
      MenuItems.map((item: IMenuItems) => ({
        ...item,
        isActive:
          pathname === item.path || pathname.startsWith(item.path + '/'),
      })),
    [pathname]
  );

  return (
    <nav className="flex flex-col items-center justify-center">
      {menuItemsWithActiveState.map(
        ({ path, selectedIcon, icon, isActive }) => (
          <Link key={path} href={path} className="p-2">
            <Image
              src={isActive ? selectedIcon : icon}
              alt="menu icon"
              className="size-6"
            />
          </Link>
        )
      )}
    </nav>
  );
};

export default NavigationItems;
