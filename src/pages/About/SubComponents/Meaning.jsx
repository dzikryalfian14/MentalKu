import React from 'react'

import hero from "../../../assets/Mindfulness1.png";

const Meaning = () => {
  return (
    <div className='flex px-[80px] py-[80px] justify-between'>
      <div className='basis-2/3'>
        <p className='text-2xl font-black'>MentalKu</p>
        <p className=''>Aplikasi Mentalku adalah aplikasi untuk membantu pengguna mengatasi tantangan kesehatan mental mereka dengan memberikan panduan langkah demi langkah dan menghasilkan saran yang komprehensif</p>
      </div>
      <div className='basis-1/4'>
        <img srcSet={hero} alt="hero" className='scale-100' />
      </div>
    </div>
  )
}

export default Meaning