import React from "react";
import hero1 from "../../../assets/hero-1.png";

const Hero = () => {
  return (
    <div className="flex flex-col align-middle items-center justify-center p-10 lg:flex-row-reverse lg:px-30 bg-[#FFCF96]">
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
          className="text-[#CDFAD5] text-lg lg:text-3xl font-bold leading-normal lg:leading-[60px] mt-5 lg:max-w-full italic"
          style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)" }}
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
