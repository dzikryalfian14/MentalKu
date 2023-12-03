import React from "react"

const Penyebab = () => {
    return (
      <div className="mt-36">
        <h1 className="text-2xl font-extrabold mt-10 mb-10 text-center px-8">Penyebab Kecemasan</h1>
        <div className='flex flex-wrap justify-center gap-14 px-10 max-lg:gap-5'>
          <div className="grid justify-center gap-y-5">
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔Trauma atau Pengalaman Traumatis</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔Perubahan Hormonal</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔Kebiasaan Hidup dan Gaya Hidup</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔Kondisi Lingkungan</p>
          </div>
          <div className="grid justify-center gap-y-5">
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔Kondisi Kesehatan Mental atau Fisik Lainnya</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔Perubahan Kimia Otak</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔Faktor Genetik dan Keturunan</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔Perubahan Hidup yang Besar</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Penyebab