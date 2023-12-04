import React from "react"

const Penyebab = () => {
    return (
      <div className="mt-5">
        <h1 className="text-2xl font-extrabold mt-10 mb-10 text-center">Penyebab Stress</h1>
        <div className='flex flex-wrap justify-center gap-14 px-10'>
          <div className="grid justify-center gap-y-5">
            <p className="bg-[#F6FDC3] text-center p-2 rounded-lg min-w-[400px]">Tekanan Kerja dan Lingkungan Kerja</p>
            <p className="bg-[#F6FDC3] text-center p-2 rounded-lg min-w-[400px]">Masalah Keuangan</p>
            <p className="bg-[#F6FDC3] text-center p-2 rounded-lg min-w-[400px]">Perubahan Hidup yang Besar</p>
            <p className="bg-[#F6FDC3] text-center p-2 rounded-lg min-w-[400px]">Konflik dalam Hubungan</p>
          </div>
          <div className="grid justify-center gap-y-5">
            <p className="bg-[#F6FDC3] text-center p-2 rounded-lg min-w-[400px]">Tekanan Sosial</p>
            <p className="bg-[#F6FDC3] text-center p-2 rounded-lg min-w-[400px]">Tuntutan Waktu</p>
            <p className="bg-[#F6FDC3] text-center p-2 rounded-lg min-w-[400px]">Gangguan Lingkungan</p>
            <p className="bg-[#F6FDC3] text-center p-2 rounded-lg min-w-[400px]">Perubahan Sosial atau Politik</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Penyebab