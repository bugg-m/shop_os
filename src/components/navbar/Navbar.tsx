import Image from 'next/image';
import logo from '@assets/icons/logo-icon.svg';
import NavigationItems from './NavigationItems';

const Navbar = () => {
  return (
    <nav className="flex min-h-screen w-20 flex-col items-center justify-between border-r border-gray-300 bg-white py-6 md:w-20">
      <div className="flex items-center justify-center">
        <Image src={logo} alt="logo icon" />
      </div>
      <NavigationItems />
      <div className="flex size-10 items-center justify-center rounded-full border border-gray-900">
        <span className="text-gray-900">S</span>
      </div>
    </nav>
  );
};

export default Navbar;
