import React, { useState } from "react";
import Logo from "../img/grasperlogo.png";
import Avatar from "../img/avatar.png";
import { MdOutlineShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({ type: actionType.SET_USER, user: providerData[0] });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 ">
      {/* Desktop and tablet */}
      <div className="hidden md:flex w-full h-full justify-between">
        <Link to={"/"} className="flex items-center gap-2 cursor-pointer ">
          <img className="w-10 object-cover rounded-lg" src={Logo} alt="logo" />
          <p className="text-xl font-bold text-headingColor">Grasper Market</p>
        </Link>

        <div className="flex  gap-x-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-x-8 "
          >
            <li className="text-xs text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-xs text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-xs text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-xs text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Services
            </li>
          </motion.ul>

          <div className="flex relative items-center justify-center">
            <MdOutlineShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer" />
            <div className="absolute top-1 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-[10px] text-white ">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              className=" rounded-full w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
              src={user ? user.photoURL : Avatar}
              alt="profile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
              >
                {user && user.email === "emorylebo@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 gap-3 cursor-pointer hover:bg-slate-200 flex items-center transition-all duration-150 ease-in-out text-xs text-textColor">
                      {" "}
                      <MdAdd /> New Item
                    </p>
                  </Link>
                )}
                <p
                  className="m-2 bg-gray-200 rounded-lg px-4 py-2 gap-3 cursor-pointer hover:bg-slate-300  items-center flex transition-all duration-150 ease-in-out text-xs text-textColor"
                  onClick={logout}
                >
                  <MdLogout /> Logout
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div className="flex relative items-center justify-center">
          <MdOutlineShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer" />
          <div className="absolute -top-2 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-[10px] text-white ">2</p>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2 cursor-pointer ">
          <img className="w-10 object-cover rounded-lg" src={Logo} alt="logo" />
          <p className="text-xl font-bold text-amber-600">Grasper</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            className=" rounded-full w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
            src={user ? user.photoURL : Avatar}
            alt="profile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
            >
              {user && user.email === "emorylebo@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 gap-3 cursor-pointer rounded-lg hover:bg-slate-200 flex items-center transition-all duration-150 ease-in-out text-xs text-textColor">
                    {" "}
                    New Items <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col   ">
                <li className="text-xs text-textColor cursor-pointer  px-4 py-2 hover:bg-slate-200 hover:text-headingColor duration-100 transition-all ease-in-out">
                  Home
                </li>
                <li className="text-xs text-textColor cursor-pointer  px-4 py-2 hover:bg-slate-200 hover:text-headingColor duration-100 transition-all ease-in-out">
                  Menu
                </li>
                <li className="text-xs text-textColor cursor-pointer  px-4 py-2 hover:bg-slate-200 hover:text-headingColor duration-100 transition-all ease-in-out">
                  About Us
                </li>
                <li className="text-xs text-textColor cursor-pointer  px-4 py-2 hover:bg-slate-200 hover:text-headingColor duration-100 transition-all ease-in-out">
                  Services
                </li>
              </ul>
              <p
                className="m-2 p-2 shadow-md gap-3 cursor-pointer hover:bg-slate-400 rounded-lg items-center flex transition-all duration-150 ease-in-out text-xs text-textColor bg-gray-200 justify-center"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
