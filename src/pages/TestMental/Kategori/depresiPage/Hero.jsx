import React from 'react'

import hero from "../../../../assets/hero-depresi.png";

const Hero = () => {
    return (
            <div className='min-h-[70vh] flex flex-row max-md:flex-col md:justify-around items-center md:mx-5 mx-5 mt-10 lg:flex-wrap'>
              <div className='basis-2/5'>
                <img srcSet={hero} alt="hero" className='flex flex-col items-stretch ml-5 max-md:w-lg  max-md:ml-0 lg:max-w-md' />
              </div>
              <div className='basis-1/2 max-w-lg ml-5 md:min-w-[300px] lg:w-full'>
                <h2 className='text-2xl font-black pb-6'>Apa Depresi?</h2>
                <p className='leading-loose text-justify text-lg md:text-[15px] lg:text-xl'>Depresi adalah kondisi mental yang lebih serius daripada sekadar merasa sedih atau murung. Ini melibatkan perasaan sedih yang dalam dan menetap dalam jangka waktu yang lama, seringkali berbulan-bulan atau bertahun-tahun. Gejalanya meliputi kehilangan minat pada hal-hal yang biasanya dinikmati, perubahan berat badan atau nafsu makan, kesulitan tidur atau tidur terlalu banyak, perasaan putus asa, serta pikiran tentang kematian atau bunuh diri.</p>
              </div>
            </div>
    )
  }
  
  export default Hero