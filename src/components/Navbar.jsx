import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import icon from "../assets/logo/logo-1.png";

const Navbar = () => {
  const path = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Function to get page title based on the current pathname
  const getTitleFromPathname = (pathname) => {
    switch (pathname) {
      case "/":
        return "";
      case "/tentang-kami":
        return "- Tentang Kami";
      case "/tes-kesehatan-mental":
        return "- Tes Kesehatan Mental";
      default:
        return "- Halaman tidak ditemukan";
    }
  };

  // Function to handle scroll event and update navbar state
  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  // Function to toggle the mobile navbar dropdown
  const toggleNavbar = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Set document title and scroll to top when pathname changes
  useEffect(() => {
    document.title = `MentalKu ${getTitleFromPathname(path.pathname)}`;
    window.scrollTo(0, 0);
  }, [path.pathname]);

  // Add scroll event listener and remove it on component unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-10 bg-white shadow-lg transition-all duration-300 ${
        isSticky ? "bg-opacity-50" : ""
      } ${isSticky ? "sticky top-0" : ""}`}
    >
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto py-4 px-10 lg:px-20">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img srcSet={icon} className="h-12 rounded" alt={icon} />
          <span className="self-center font-black whitespace-nowrap text-2xl lg:text-3xl">
            MentalKu
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-[#FFABAB] focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          <div className="flex flex-col font-semibold p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <Link
              to="/"
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#FFABAB] ${
                path.pathname === "/" ? "text-[#FF8080]" : "text-gray-900"
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/tes-kesehatan-mental"
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#FFABAB] ${
                path.pathname === "/tes-kesehatan-mental"
                  ? "text-[#FF8080]"
                  : "text-gray-900"
              }`}
            >
              Tes Kesehatan Mental
            </Link>
            <Link
              to="/tentang-kami"
              className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#FFABAB] ${
                path.pathname === "/tentang-kami"
                  ? "text-[#FF8080]"
                  : "text-gray-900"
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
