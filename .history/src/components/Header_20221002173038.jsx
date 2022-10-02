import React from "react";
import Logo from '../img/logo.png'

const Header = () => {
  return <div className="fixed z-50 w-screen p-6 px-16 ">
    {/* Desktop and tablet */}
    <div className="hidden md:flex w-full h-full ">
      <div>
        
      </div>
    </div>

    {/* mobile */}
    <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
  </div>;
};

export default Header;
