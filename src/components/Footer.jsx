import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
import logo from "../assets/logo-2.png";

const Footer = () => {
    return (
        <div className="bg-brightColor text-black">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 w-full ">
                <div className="flex items-center mb-8 md:mb-0 mx-auto md:mx-0 flex-col md:flex-row">
                    <img
                        loading="lazy"
                        src={logo}
                        alt="Logo"
                        className="h-20 w-20 rounded-xl object-contain object-center fill-white overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="md:ml-5 md:text-left text-center mt-3 md:mt-0">
                        <h1 className="font-semibold text-xl pb-4 underline">
                            MentalKu
                        </h1>
                        <p className="text-m md:text-left text-center md:max-w-[200px] max-w-none pt-0 ">
                            Teman Sejati di Setiap Langkah Perjalanan Kesehatan
                            Mental Anda
                        </p>
                    </div>
                </div>

                <div className="mb-8 md:mb-0 mx-auto md:mx-0 hidden md:block">
                    <h2 className="font-medium text-xl pb-4 pt-5 md:pt-0 underline">
                        Navigasi
                    </h2>
                    <nav className="flex flex-col gap-2">
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-[#539165] transition-all cursor-pointer"
                        >
                            Beranda
                        </Link>
                        <a
                            className="hover:text-[#539165] transition-all cursor-pointer"
                            href="/testmental"
                        >
                            Test Kesehatan Mental
                        </a>
                        <a
                            className="hover:text-[#539165] transition-all cursor-pointer"
                            href="/about"
                        >
                            Tentang Kami
                        </a>
                    </nav>
                </div>

                <div className="mb-8 md:mb-0 mx-auto md:mx-0 hidden md:block">
                    <h2 className="font-medium text-xl pb-4 pt-5 md:pt-0 underline">
                        Kontak Kami
                    </h2>
                    <nav className="flex flex-col gap-2">
                        <a
                            className="hover:text-[#539165] transition-all cursor-pointer"
                            href="/"
                        >
                            mentalku@gmail.com
                        </a>
                    </nav>
                </div>

                <div className="mx-auto md:mx-0">
                    <h2 className="font-medium text-xl pb-4 pt-5 md:pt-0 underline">
                        Follow Us
                    </h2>
                    <nav className="flex flex-row md:items-center gap-2">
                        <BsFacebook
                            size={25}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        />
                        <RiTwitterXFill
                            size={25}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        />
                        <BsInstagram
                            size={25}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        />
                    </nav>
                </div>
            </div>
            <div>
                <p className="text-center py-4 ">
                    <span className="text-brightColor ">
                        Copyright © 2024 MentalKu | All rights reserved
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
