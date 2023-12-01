import React from "react"

const Penyebab = () => {
    return (
      <div className="mt-5">
        <h1 className="text-2xl font-extrabold mt-10 mb-10 text-center">Penyebab Kecemasan</h1>
        <div className='flex flex-wrap justify-center gap-14 px-10'>
          <div className="grid justify-center gap-y-5">
            <p className="bg-[#CDFAD5] text-center p-2 rounded-lg">Stres Berkepanjangan</p>
            <p className="bg-[#CDFAD5] text-center p-2 rounded-lg">Ketidakmampuan Mengelola Emosi</p>
            <p className="bg-[#CDFAD5] text-center p-2 rounded-lg">Kebiasaan Hidup dan Gaya Hidup</p>
            <p className="bg-[#CDFAD5] text-center p-2 rounded-lg">Kondisi Lingkungan</p>
          </div>
          <div className="grid justify-center gap-y-5">
            <p className="bg-[#CDFAD5] text-center p-2 rounded-lg">Kondisi Kesehatan fisik dan penyakit Lainnya</p>
            <p className="bg-[#CDFAD5] text-center p-2 rounded-lg">Perubahan Kimia Otak</p>
            <p className="bg-[#CDFAD5] text-center p-2 rounded-lg">Faktor Genetik dan Keturunan</p>
            <p className="bg-[#CDFAD5] text-center p-2 rounded-lg">Perubahan Hidup yang Besar</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Penyebab