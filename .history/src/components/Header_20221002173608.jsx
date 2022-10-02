import React from "react";
import Logo from '../img/logo.png'

const Header = () => {
  return <header className="fixed z-50 w-screen p-6 px-16 ">
    {/* Desktop and tablet */}
    <div className="hidden md:flex w-full h-full ">
      <div className="flex items-center gap-2">
        <img className="w-8 object-cover" src={Logo} alt="logo" />
        <p className="text-xl font-bold text-headingColor">Xplorer</p>
      </div>

      <ul className="flex items-center">
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Services</li>
      </ul>
    </div>

    {/* mobile */}
    <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
  </header>;
};

export default Header;
