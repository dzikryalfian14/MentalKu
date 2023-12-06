import React from "react";

import img1 from "../../../assets/mental-health.png";
import img2 from "../../../assets/report.png";
import img3 from "../../../assets/certificate.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import AlurCard from "../../../layout/AlurCard";

const Alur = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <p className="text-black text-3xl font-bold mt-24 max-md:max-w-full max-md:mt-5 pt-2">
        Alur Test Kesehatan Mental
      </p>
      <div className=" flex flex-col lg:flex-row gap-5 mt-20">
        <AlurCard
          img={img1}
          title="Pilih Kategori Tes"
          para="Ada tiga jenis tes kategori kesehatan mental silahkan pilih sesuai dengan kondisi yang anda alami saat ini"
        />
        <AlurCard
          img={img2}
          title="Kerjakan Tes"
          para="Pilih jawaban untuk setiap pertanyaan sesuai dengan kondisi yang menggambarkan dirimu sebenar-benarnya."
        />
        <AlurCard
          img={img3}
          title="Lihat Hasil Tes Anda"
          para="Hasil tes berupa kategorisasi sesuai kondisimu sekarang dimulai dari rendah-tinggi. serta beberapa saran yang mungkin dilakukan"
        />
      </div>
    </div>
  );
};

export default Alur;
