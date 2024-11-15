import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="flex flex-col self-stretch pt-4 pb-4 pl-14 w-full bg-purple-800 max-md:pb-4 max-md:pl-5 max-md:max-w-full">
      <img 
        src={logo} 
        alt="Vajuvenate logo" 
        className="object-contain self-center max-w-full aspect-[3.09] w-[300px]"
      />
    </header>
  );
}

export default Header;