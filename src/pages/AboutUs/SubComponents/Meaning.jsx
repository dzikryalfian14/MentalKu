import React from "react";
import hero from "../../../assets/Mindfulness1.png";
import ReasonCard from "../../../layout/ReasonCard";
import HeadingReason from "../../../layout/HeadingReason";

const Meaning = () => {
  return (
    <div className="flex flex-col-reverse items-center px-10 py-20 lg:flex-row lg:p-20 justify-between bg-[#FFD096]">
      <div className="mb-0 w-full lg:mb-8">
        <HeadingReason title1="Kenapa harus" title2="MentalKu?" />

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <ReasonCard title="Peningkatan Kecerdasan" />
          <ReasonCard title="Peningkatan Angka Gangguan Mental" />
          <ReasonCard title="Tautan Hidup Modern" />
          <ReasonCard title="Kecenderungan Generasi Muda" />
          <ReasonCard title="Tantangan Kesehatan Mental di Tempat Kerja" />
          <ReasonCard title="Deskriminasi Stigma" />
        </div>
      </div>
    </div>
  );
};

export default Meaning;
