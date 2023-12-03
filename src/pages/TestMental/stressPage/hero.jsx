import React from 'react'

import hero from "../../../assets/hero-stress.png";

const Hero = () => {
    return (
            <div className='min-h-[70vh] flex flex-row max-md:flex-col md:justify-between items-center md:mx-5 mx-5 mt-10 lg:flex-wrap'>
              <div className='basis-2/5'>
                <img srcSet={hero} alt="hero" className='flex flex-col items-stretch ml-5 max-md:w-full  max-md:ml-0 ' />
              </div>
              <div className='basis-1/2 pt-10 max-w-lg'>
                <h2 className='text-2xl font-black py-6'>Apa itu Stress?</h2>
                <p className='leading-loose text-justify text-lg'>Stres adalah respons tubuh terhadap tekanan fisik atau emosional. Ini bisa disebabkan oleh berbagai faktor, seperti tuntutan pekerjaan, masalah keuangan, atau perubahan dalam kehidupan. Stres bisa bersifat sementara atau berkelanjutan. Gejalanya meliputi ketegangan otot, sakit kepala, perubahan nafsu makan, sulit tidur, kesulitan berkonsentrasi, dan perubahan suasana hati</p>
              </div>
            </div>
    )
  }
  
  export default Hero