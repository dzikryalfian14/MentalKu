import React from "react"

const Penyebab = () => {
    return (
      <div className="mt-32 mb-48">
        <h1 className="text-2xl font-extrabold mt-10 mb-10 text-center px-8">Penyebab Stress</h1>
        <div className='flex flex-wrap justify-center gap-14 px-10 max-lg:gap-5 '>
          <div className="grid justify-start gap-y-5">
            <p className="flex-shrink-0 bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current sm:min-w-max md:w-[400px]">✔ Tekanan Kerja dan Lingkungan Kerja</p>
            <p className="flex-shrink-0 bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current sm:min-w-max md:w-[400px]">✔ Masalah Keuangan</p>
            <p className="flex-shrink-0 bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current sm:min-w-max md:w-[400px]">✔ Perubahan Hidup yang Besar</p>
            <p className="flex-shrink-0 bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current sm:min-w-max md:w-[400px]">✔ Konflik dalam Hubungan</p>
          </div>
          <div className="grid justify-center gap-y-5">
            <p className="flex-shrink-0 bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current sm:min-w-max md:w-[400px]">✔ Tekanan Sosial</p>
            <p className="flex-shrink-0 bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current sm:min-w-max md:w-[400px]">✔ Tuntutan Waktu</p>
            <p className="flex-shrink-0 bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current sm:min-w-max md:w-[400px]">✔ Gangguan Lingkungan</p>
            <p className="flex-shrink-0 bg-[#FFF] text-start p-2 rounded-lg min-w-[300px] font-bold text-slate-400 border border-current sm:min-w-max md:w-[400px]">✔ Perubahan Sosial atau Politik</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Penyebab