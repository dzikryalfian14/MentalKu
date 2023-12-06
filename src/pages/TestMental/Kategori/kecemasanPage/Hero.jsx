import React from 'react'

import hero from "../../../../assets/cemas-1.png";

const Hero = () => {
    return (
            <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
              <div className='basis-2/5'>
                <img srcSet={hero} alt="hero" className='flex flex-col items-stretch ml-5 max-lg:w-full  max-md:ml-0 ' />
              </div>
              <div className='basis-1/2 pt-10 max-w-lg'>
                <h2 className='text-2xl font-black py-6'>Apa itu Kecemasan ?</h2>
                <p className='leading-loose text-justify'>Kecemasan adalah respons alami tubuh terhadap stres atau ketidakpastian. Ini bisa menjadi reaksi singkat terhadap situasi tertentu atau menjadi gangguan yang menetap dalam hidup sehari-hari seseorang. Kecemasan dapat terjadi dalam berbagai tingkatan, mulai dari yang ringan hingga yang parah. Gejalanya meliputi rasa gelisah, ketegangan, sulit berkonsentrasi, dan ketakutan yang berlebihan terhadap situasi tertentu.</p>
              </div>
            </div>
    )
  }
  
  export default Hero