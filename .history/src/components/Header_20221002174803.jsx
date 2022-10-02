import React from "react";
import Logo from "../img/logo.png";
import { MdSOuthopping } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16 ">
      {/* Desktop and tablet */}
      <div className="hidden md:flex w-full h-full ">
        <div className="flex items-center gap-2">
          <img className="w-8 object-cover" src={Logo} alt="logo" />
          <p className="text-xl font-bold text-headingColor">Xplorer</p>
        </div>

        <ul className="flex items-center gap-x-8 ml-auto">
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
            Home
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
            Menu
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
            About Us
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
            Services
          </li>
        </ul>

        <div>
          <MdShoppingBasket />
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </header>
  );
};

export default Header;
