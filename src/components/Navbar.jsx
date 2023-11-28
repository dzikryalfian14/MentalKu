import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

import icon from "../assets/logo-1.png";

const Navbar = () => {
    const path = useLocation();
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    return (
        <div>
            <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex items-center justify-between ">
                    <img
                        loading="lazy"
                        src={icon}
                        alt="Logo"
                        className="ml-2 mr-2 h-12 w-12 rounded-xl object-contain object-center fill-white overflow-hidden shrink-0 max-w-full"
                    />
                    <Link
                        to="/"
                        className="font-semibold text-2xl p-1 cursor-pointer"
                    >
                        MentalKu
                    </Link>
                </div>

                <nav className="hidden md:flex gap-5 font-medium p-1 text-lg align-middle">
                    <Link
                        to="/"
                        duration={500}
                        className={`hover:text-[#539165] transition-all cursor-pointer flex items-center ${path.pathname === "/" ? "text-[#539165]" : "text-black"}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/testmental"
                        duration={500}
                        className={`hover:text-[#539165] transition-all cursor-pointer flex items-center ${path.pathname === "/testmental" ? "text-[#539165]" : "text-black"}`}
                    >
                        Test Kesehatan Mental
                    </Link>
                    <Link
                        to="/about"
                        duration={500}
                        className={`hover:text-[#539165] transition-all cursor-pointer flex items-center ${path.pathname === "/about" ? "text-[#539165]" : "text-black"}`}
                    >
                        About Us
                    </Link>
                </nav>

                <div className="flex md:hidden" onClick={handleChange}>
                    <div className=" p-2">
                        <AiOutlineMenu size={22} />
                    </div>
                </div>
            </div>
            <div
                className={` ${
                    menu ? "translate-x-0" : "-translate-x-full"
                } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
            >
                <Link
                    to="/"
                    duration={500}
                    className="hover:text-[#539165] transition-all cursor-pointer"
                >
                    Home
                </Link>
                <Link
                    to="/testmental"
                    duration={500}
                    className="hover:text-[#539165] transition-all cursor-pointer"
                >
                    Test Kesehatan Mental
                </Link>
                <Link
                    to="/about"
                    duration={500}
                    className="hover:text-[#539165] transition-all cursor-pointer"
                >
                    About Us
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
