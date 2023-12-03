import React from "react";
import img1 from "../../../assets/cemas.png";
import img2 from "../../../assets/depresi.png";
import img3 from "../../../assets/stress.png";
import { Link } from "react-router-dom";
import DaftarCard from "../../../layout/DaftarCard";

const DaftarTest = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center md:px-32 px-5">
      <p className="text-black text-3xl font-bold mt-14 max-md:max-w-full max-md:mt-5 pt-2">
        Daftar Kategori Test Kesehatan Mental
      </p>
      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <DaftarCard
          link="kecemasan"
          way="kecemasan"
          img={img1}
          title="Kecemasan"
          para="Kecemasan melibatkan ketakutan yang berlebihan dan rasa khawatir yang terus-menerus. Tes ini dirancang untuk membantu Anda mengenali apakah kecemasan mungkin memengaruhi kesejahteraan mental Anda."
        />
        <DaftarCard
          link="depresi"
          way="depresi"
          img={img2}
          title="Depresi"
          para="Stress dapat timbul dari tuntutan harian yang berlebihan. Gejala stres melibatkan perasaan tegang dan sulit berkonsentrasi. Tes ini akan membantu mengidentifikasi tingkat stres Anda."
        />
        <DaftarCard
          link="stress"
          way="kecemasan"
          img={img3}
          title="Stress"
          para="Stress dapat timbul dari tuntutan harian yang berlebihan. Gejala stres melibatkan perasaan tegang dan sulit berkonsentrasi. Tes ini akan membantu mengidentifikasi tingkat stres Anda."
        />
      </div>
    </div>
  );
};

export default DaftarTest;
