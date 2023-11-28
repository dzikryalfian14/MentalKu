import React from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import logo from "../assets/logo-2.png";

const Footer = () => {
  return (
    <footer
      className="bg-white"
      style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)" }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img srcSet={logo} className="h-20 me-3" alt="MentalKu Logo" />
              <span className="self-start text-3xl font-semibold whitespace-nowrap">
                MentalKu
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                Halaman
              </h2>
              <div className="text-gray-500 font-medium flex flex-col">
                <Link to="/" className="hover:underline mb-4">
                  Home
                </Link>
                <Link to="/about" className="hover:underline mb-4">
                  About Us
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <div className="text-gray-500 font-medium flex flex-col">
                <a
                  href="https://github.com/dzikryalfian14/MentalKu"
                  className="hover:underline mb-4"
                  target="_blank"
                >
                  Github
                </a>
                <a href="#" className="hover:underline mb-4" target="_blank">
                  Discord
                </a>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <div className="text-gray-500 font-medium flex flex-col">
                <Link to="#" className="mb-4 hover:underline">
                  Privacy Policy
                </Link>
                <Link to="#" className="mb-4 hover:underline">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              MentalKu™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
              target="_blank"
            >
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
              target="_blank"
            >
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
              target="_blank"
            >
              <FaXTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/dzikryalfian14/MentalKu"
              className="text-gray-500 hover:text-gray-900 ms-5"
              target="_blank"
            >
              <FaGithub />
              <span className="sr-only">Github page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
