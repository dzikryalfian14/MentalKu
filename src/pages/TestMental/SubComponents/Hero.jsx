import React from "react";
import Button from "../../../layout/Button";
import { Link } from "react-scroll";

import hero2 from "../../../assets/psychotest.png";

const Hero = () => {
  return (
    <div className="flex flex-col align-middle items-center justify-center p-10 lg:px-20 lg:flex-row">
      <div className="md:w-3/4 text-center">
        <p className="text-4xl font-bold pt-5 lg:pt-0">
          Test Kesehatan Mental-mu Bersama MentalKu !
        </p>
        <div className="text-xl mt-6">
          <p className="text-black text-xl mt-6">
            Apakah kamu ingin lebih memahami kondisi kesehatan mentalmu saat ini?
            Mari isi tes di bawah ini dan temukan hasilnya!
          </p>
          <div className="mt-3 flex flex-col justify-center items-center gap-4">
            <Link
              to="alur"
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              <Button text="Alur Tes Kesehatan Mental" />
            </Link>
            <Link
              to="daftartest"
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              <Button text="Pilih Kategori Tes" />
            </Link>
            <Link
              to="panduan"
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              <Button text="Panduan Pengisian Tes" />
            </Link>
          </div>
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
