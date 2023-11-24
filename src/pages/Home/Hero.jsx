import React from "react";

import hero1 from "../../assets/hero-1.png";

const Hero = () => {
    return (
        <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
            <div className="md:w-2/4 text-center">
                <p className="text-black text-3xl font-bold leading-[60px] mt-14 max-md:max-w-full max-md:mt-10 italic">
                    “Masa sulit bukanlah tanda kelemahan, melainkan panggilan
                    untuk menemukan kekuatan tersembunyi di dalam diri. Teruslah
                    berjalan, bahkan di saat langkah terasa berat.”
                </p>
            </div>
            <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                <img
                    loading="lazy"
                    srcSet={hero1}
                    className="aspect-[1.19] object-contain object-center w-full overflow-hidden max-md:mt-10"
                    alt="Image"
                />
            </div>
        </div>
    );
};

export default Hero;
