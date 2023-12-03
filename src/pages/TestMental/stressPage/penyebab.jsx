import React from "react"

const Penyebab = () => {
    return (
      <div className="my-36">
        <h1 className="text-2xl font-extrabold mt-10 mb-10 text-center px-8">Penyebab Stress</h1>
        <div className='flex flex-wrap justify-center gap-14 px-10 max-lg:gap-5 '>
          <div className="grid justify-start gap-y-5">
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔ Tekanan Kerja dan Lingkungan Kerja</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔ Masalah Keuangan</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔ Perubahan Hidup yang Besar</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔ Konflik dalam Hubungan</p>
          </div>
          <div className="grid justify-center gap-y-5">
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔ Tekanan Sosial</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔ Tuntutan Waktu</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔ Gangguan Lingkungan</p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current max-md:w-[200px]">✔ Perubahan Sosial atau Politik</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Penyebab