import React from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16 ">
      {/* Desktop and tablet */}
      <div className="hidden md:flex w-full h-full justify-between">
        <div className="flex items-center gap-2 cursor-pointer ">
          <img className="w-8 object-cover" src={Logo} alt="logo" />
          <p className="text-xl font-bold text-headingColor">Xplorer</p>
        </div>

       <div className="flex  ">
       <ul className="flex items-center gap-x-8 ">
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

        <div className="flex relative items-center justify-center">
          <MdOutlineShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer"/>
          <div className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-sm text-white font-semibold">2</p>
          </div>
        </div>
        <img className="w-10 min" src={Avatar} alt="profile" />
       </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </header>
  );
};

export default Header;
