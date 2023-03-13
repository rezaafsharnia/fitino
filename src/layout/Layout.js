import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";
import { AiOutlineUser } from "react-icons/ai";
function Layout({ children }) {
  return (
    <div className="w-full">
      <header className="sticky top-0 z-10 py-2 shadow-md bg-white/30 flex justify-between backdrop-filter backdrop-blur-lg items-center border-b border-gray-200">
        <nav className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center gap-8">
            <Link className="ml-8">
              <img src={logo} alt="logo-header" width={100} />
            </Link>
            <NavLink> خانه </NavLink>
            <NavLink>فروشگاه</NavLink>
          </div>
          <Link
            to="/login"
            className="border border-gray-300 py-2 px-4 rounded-xl duration-300 transition hover:border-green-400 hover:text-green-400 flex justify-between items-center gap-2"
          >
            ورود / ثبت نام
            <AiOutlineUser />
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;
