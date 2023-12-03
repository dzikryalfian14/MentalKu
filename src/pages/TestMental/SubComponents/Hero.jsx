import React from "react";
import Button from "../../../layout/Button";
import { Link } from "react-scroll";

import hero2 from "../../../assets/psychotest.png";

const Hero = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center">
        <p className="text-black text-4xl font-bold  mt-0 max-md:max-w-full max-md:mt-5 pt-2">
          Test Kesehatan Mental-mu Bersama MentalKu !
        </p>
        <p className="text-black text-xl mt-10">
          Apakah kamu ingin lebih memahami kondisi kesehatan mentalmu saat ini?
          Mari isi tes di bawah ini dan temukan hasilnya!
        </p>
        <div className="mt-10">
          <Link
            to="alur"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            <Button title="ALUR TEST KESEHATAN MENTAL" />
          </Link>
          <Link
            to="daftartest"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            <Button title="PILIH KATEGORI TEST" />
          </Link>
          <Link
            to="panduan"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            <Button title="PANDUAN PENGISIAN TEST" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[50%] ml-7 max-md:w-full max-md:ml-0">
        <img
          loading="lazy"
          srcSet={hero2}
          className="aspect-[1.19] object-contain object-center w-full overflow-hidden max-md:mt-10"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Hero;
