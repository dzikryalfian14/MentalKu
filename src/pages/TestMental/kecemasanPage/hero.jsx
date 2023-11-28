import React from 'react'

import hero from "../../../assets/cemas-1.png";

const Hero = () => {
    return (
            <div className='grid grid-cols-2 gap-px px-10 py-13 justify-between'>
              <div className='basis-2/5'>
                <img srcSet={hero} alt="hero" className='scale-100' />
              </div>
              <div className='basis-1/2 pt-10 max-w-lg'>
                <h2 className='text-2xl font-black py-6'>Apa itu Kecemasan ?</h2>
                <p className='leading-loose text-justify'>Kecemasan adalah respons alami tubuh terhadap stres atau ketidakpastian. Ini bisa menjadi reaksi singkat terhadap situasi tertentu atau menjadi gangguan yang menetap dalam hidup sehari-hari seseorang. Kecemasan dapat terjadi dalam berbagai tingkatan, mulai dari yang ringan hingga yang parah. Gejalanya meliputi rasa gelisah, ketegangan, sulit berkonsentrasi, dan ketakutan yang berlebihan terhadap situasi tertentu.</p>
              </div>
            </div>
    )
  }
  
  export default Hero