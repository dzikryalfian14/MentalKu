import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import icon from "../assets/logo-1.png";

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
              Home
            </Link>
            <button
              className={`flex items-center justify-between w-auto py-2 px-3 hover:text-[#FFCF96] md:hover:bg-transparent md:border-0 md:p-0 ${
                isDoubleDropdownOpen ? "text-[#FF971C]" : "text-gray-900"
              }`}
              onClick={toggleDoubleDropdown}
            >
              Tes Mental
              {!isDoubleDropdownOpen ? <FaChevronDown className="pl-1" /> : <FaChevronUp className="pl-1" />}
            </button>
            {isDoubleDropdownOpen && (
              <div
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 absolute top-48 left-auto md:top-14 md:left-auto lg:top-14 lg:left-auto"
                id="doubleDropdownButton"
              >
                <div
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="doubleDropdownButton"
                >
                  <Link
                    to="/topik1"
                    className={`block px-4 py-2 hover:text-[#FFCF96] ${
                      path.pathname === "/topik1"
                        ? "text-[#FF971C]"
                        : "text-gray-900"
                    }`}
                  >
                    Topik 1
                  </Link>
                  <Link
                    to="/topik2"
                    className={`block px-4 py-2 hover:text-[#FFCF96] ${
                      path.pathname === "/topik2"
                        ? "text-[#FF971C]"
                        : "text-gray-900"
                    }`}
                  >
                    Topik 2
                  </Link>
                  <Link
                    to="/topik3"
                    className={`block px-4 py-2 hover:text-[#FFCF96] ${
                      path.pathname === "/topik3"
                        ? "text-[#FF971C]"
                        : "text-gray-900"
                    }`}
                  >
                    Topik 3
                  </Link>
                </div>
              </div>
            )}
            <Link
              to="/about"
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#FFCF96] ${
                path.pathname === "/about" ? "text-[#FF971C]" : "text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#FFCF96] ${
                path.pathname === "/contact"
                  ? "text-[#FF971C]"
                  : "text-gray-900"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
