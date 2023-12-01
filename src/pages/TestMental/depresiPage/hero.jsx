import React from 'react'

import hero from "../../../assets/hero-depresi.png";

const Hero = () => {
    return (
            <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
              <div className='basis-2/5'>
                <img srcSet={hero} alt="hero" className='flex flex-col items-stretch ml-5 max-lg:w-full  max-md:ml-0 ' />
              </div>
              <div className='basis-1/2 pt-10 max-w-lg'>
                <h2 className='text-2xl font-black py-6'>Apa itu Depresi?</h2>
                <p className='leading-loose text-justify'>Depresi adalah kondisi mental yang lebih serius daripada sekadar merasa sedih atau murung. Ini melibatkan perasaan sedih yang dalam dan menetap dalam jangka waktu yang lama, seringkali berbulan-bulan atau bertahun-tahun. Gejalanya meliputi kehilangan minat pada hal-hal yang biasanya dinikmati, perubahan berat badan atau nafsu makan, kesulitan tidur atau tidur terlalu banyak, perasaan putus asa, serta pikiran tentang kematian atau bunuh diri.</p>
              </div>
            </div>
    )
  }
  
  export default Hero