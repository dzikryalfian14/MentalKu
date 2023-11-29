import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import icon from "../assets/logo/logo-1.png";

const Navbar = () => {
  const path = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDoubleDropdown = (e) => {
    e.stopPropagation();
    setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10 lg:px-30">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img srcSet={icon} className="h-12 rounded" alt={icon} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            MentalKu
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-[#FFCF96] focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-multi-level"
          aria-expanded={isDropdownOpen}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <AiOutlineMenu className="text-black" />
        </button>
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <Link
              to="/"
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#FFCF96] ${
                path.pathname === "/" ? "text-[#FF971C]" : "text-gray-900"
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/tes-kesehatan-mental"
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#FFCF96] ${
                path.pathname === "/tes-kesehatan-mental" ? "text-[#FF971C]" : "text-gray-900"
              }`}
            >
              Tes Kesehatan Mental
            </Link>
            <Link
              to="/tentang-kami"
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#FFCF96] ${
                path.pathname === "/tentang-kami" ? "text-[#FF971C]" : "text-gray-900"
              }`}
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
