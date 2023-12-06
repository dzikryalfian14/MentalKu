import React from "react";
import hero1 from "../../../assets/hero-1.png";

const Hero = () => {
  return (
    <div className="flex flex-col align-middle items-center justify-center py-8 px-10 lg:px-0 lg:flex-row-reverse bg-[#CDFAD5]">
      <div className="lg:w-1/3 lg:mr-5">
        <img
          loading="lazy"
          src={hero1}
          className="w-full h-auto lg:object-contain lg:object-center"
          alt="Image"
        />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <p
          className="text-2xl lg:text-3xl font-black leading-normal lg:leading-loose mt-5 lg:mt-0 italic"
        >
          “Masa sulit bukanlah tanda kelemahan, melainkan panggilan untuk
          menemukan kekuatan tersembunyi di dalam diri. Teruslah berjalan,
          bahkan di saat langkah terasa berat.”
        </p>
      </div>
    </div>
  );
};

export default Hero;
