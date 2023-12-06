import React from "react";
import hero from "../../../assets/Mindfulness1.png";
import ReasonCard from "../../../layout/ReasonCard";
import HeadingReason from "../../../layout/HeadingReason";

const Meaning = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row justify-between py-8 px-10 lg:px-20">
      <div className="mb-0 w-full">
        <HeadingReason title1="Kenapa harus" title2="MentalKu?" />

        <div className="flex flex-wrap justify-center gap-6 mt-6">
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
