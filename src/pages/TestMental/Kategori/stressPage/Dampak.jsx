import React from "react";

import produktivitas from "../../../../assets/cemas-2.png";
import gangguanTidur from "../../../../assets/stress-1.png";
import kesehatanFisik from "../../../../assets/cemas-4.png";
import kondisiEmosional from "../../../../assets/stress-2.png";

const Dampak = () => {
  return (
    <div className="bg-[#ffffff] mt-11">
      <h2 className="text-2xl font-extrabold mt-15 text-center py-6">
        Apa Dampak Stress ?
      </h2>
      <div className="flex flex-wrap justify-around items-center justify-items-center gap-5 px-7">
        <div className="max-w-[170px] py-10">
          <img
            srcSet={produktivitas}
            alt="Gambar produktivitas"
            className="p-5"
          />
          <h3 className="text-center text-2xl max-sm:text-xl font-medium">
            Produktivitas Menurun
          </h3>
        </div>
        <div className="max-w-[170px] py-10">
          <img
            srcSet={gangguanTidur}
            alt="Gambar Hubungan Sosial"
            className="p-5 max-sm:w-9/12"
          />
          <h3 className="text-center text-2xl max-sm:text-xl font-medium">
            Berpengaruh pada hubungan sosial
          </h3>
        </div>
        <div className="max-w-[140px] py-10">
          <img
            srcSet={kesehatanFisik}
            alt="Gambar Kesehatan fisik"
            className="p-5 max-sm:w-9/12"
          />
          <h3 className="text-center text-2xl max-sm:text-xl font-medium">
            Masalah Kesehatan Fisik
          </h3>
        </div>
        <div className="max-w-[170px] py-10">
          <img
            srcSet={kondisiEmosional}
            alt="Gambar Kondisi emosional"
            className="p-5 max-sm:w-9/12"
          />
          <h3 className="text-center text-2xl max-sm:text-xl font-medium">
            Berpengaruh Pada Kondisi Emosional
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Dampak;
