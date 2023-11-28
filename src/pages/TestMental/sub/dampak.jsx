import React from "react"

import produktivitas from "../../../assets/cemas-2.png";
import gangguanTidur from "../../../assets/cemas-3.png";
import kesehatanFisik from "../../../assets/cemas-4.png";
import kondisiEmosional from "../../../assets/cemas-5.png";

const Dampak = () => {
    return (
      <div className="bg-orange-300 mt-11">
        <h2 className="text-2xl font-extrabold mt-15 text-center py-6">Apa Dampak Kecemasan ?</h2>
        <div className="flex flex-wrap justify-around items-center justify-items-center gap-5 px-7">
          <div className="max-w-[170px] py-10">
            <img srcSet={produktivitas} alt="" className="p-5" />
            <h3 className="text-center text-2xl font-medium">Produktivitas Menurun</h3>
          </div>
          <div className="max-w-[140px] py-10">
            <img srcSet={gangguanTidur} alt="" className="p-5"/>
            <h3 className="text-center text-2xl font-medium">Gangguan Tidur</h3>
          </div>
          <div className="max-w-[140px] py-10">
            <img srcSet={kesehatanFisik} alt="" className="p-5" />
            <h3 className="text-center text-2xl font-medium">Masalah Kesehatan Fisik</h3>
          </div>
          <div className="max-w-[170px] py-10">
            <img srcSet={kondisiEmosional} alt="" className="p-5" />
            <h3 className="text-center text-2xl font-medium">Berpengaruh Pada Kondisi Emosional</h3>
          </div>
        </div>
      </div>
    )
  }
  
  export default Dampak