import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image.png";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-slate-900 text-white">
        <ul className=" flex justify-evenly items-center p-2">
          <li>
            <NavLink to="/">
              <div className=" flex justify-center items-center gap-3">
                <img
                  src={logo}
                  className=" w-[4rem] h-[4rem] rounded-full "
                  alt="logo"
                />
                <p className=" hidden sm:block md:block lg:block">ThepwnExperts</p>
              </div>
            </NavLink>
          </li>
          <li className=" hover:text-sky-800 transition-all duration-200">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" hover:text-sky-800 transition-all duration-200">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className=" hover:text-sky-800 transition-all duration-200">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
