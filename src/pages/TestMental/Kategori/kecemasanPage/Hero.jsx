import React from 'react'

import hero from "../../../../assets/cemas-1.png";

const Hero = () => {
    return (
            <div className='min-h-[70vh] flex flex-row max-md:flex-col md:justify-around items-center md:mx-5 mx-5 mt-10 lg:flex-wrap'>
              <div className='basis-2/5'>
                <img srcSet={hero} alt="hero" className='flex flex-col items-stretch ml-5 max-md:w-lg  max-md:ml-0 lg:max-w-md' />
              </div>
              <div className='basis-1/2 max-w-lg ml-5 md:min-w-[300px] lg:w-full'>
                <h2 className='text-2xl font-black pb-6'>Apa itu Kecemasan?</h2>
                <p className='leading-loose text-justify text-lg md:text-[15px] lg:text-xl'>Kecemasan adalah respons alami tubuh terhadap stres atau ketidakpastian. Ini bisa menjadi reaksi singkat terhadap situasi tertentu atau menjadi gangguan yang menetap dalam hidup sehari-hari seseorang. Kecemasan dapat terjadi dalam berbagai tingkatan, mulai dari yang ringan hingga yang parah. Gejalanya meliputi rasa gelisah, ketegangan, sulit berkonsentrasi, dan ketakutan yang berlebihan terhadap situasi tertentu.</p>
              </div>
            </div>
    )
  }
  
  export default Hero