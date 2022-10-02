import React from "react";

const Header = () => {
  return <div className="fixed z-50 w-screen p-6 px-16 bg-slate-300">
    {/* Desktop and tablet */}
    <div className="hidden md:flex w-full h bg-red-500"></div>

    {/* mobile */}
    <div className="flex md:hidden"></div>
  </div>;
};

export default Header;
