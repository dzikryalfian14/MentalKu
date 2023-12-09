import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import ReasonCard from "./SubComponents/ReasonCard";
import HeadingReason from "./SubComponents/HeadingReason";
import ButtonTemplate from "../../layout/ButtonTemplate";

const Home = () => {
  const reasons = [
    "MentalKu menyediakan latihan dan panduan yang didesain untuk meningkatkan pemahaman dan pengelolaan emosi, membantu Anda mengembangkan kecerdasan emosional yang lebih baik.",
    "MentalKu bertujuan untuk meningkatkan pemahaman tentang berbagai gangguan mental, membantu mengurangi stigma, dan mendorong pencarian pertolongan lebih awal.",
    "MentalKu memberikan solusi yang dapat diakses secara mudah dan fleksibel, cocok untuk gaya hidup modern.",
    "MentalKu menyajikan informasi dan panduan dengan pendekatan yang sesuai dengan kebutuhan dan preferensi generasi muda, dengan konten yang relevan dan presentasi yang menarik.",
    "MentalKu menawarkan strategi khusus untuk mengelola stres di tempat kerja, meningkatkan produktivitas, dan menciptakan lingkungan yang mendukung kesejahteraan mental",
    "MentalKu berkomitmen untuk menghadapi stigma dengan menyediakan informasi mendalam, menyampaikan cerita sukses, dan menciptakan komunitas yang mendukung di dalam aplikasi untuk mengatasi presepsi negatif terkait kesehatan mental.",
  ];
  return (
    <>
      <div id="hero">
        <div className="flex flex-col align-middle items-center justify-center py-8 px-10 lg:px-0 lg:flex-row-reverse bg-[#CDFAD5]">
          <div className="lg:w-1/3 lg:mr-5">
            <img
              loading="lazy"
              src={hero1}
              className="w-full h-auto lg:object-contain lg:object-center"
              alt="Image"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-2xl lg:text-3xl font-black leading-normal lg:leading-loose mt-5 lg:mt-0 italic">
              “Masa sulit bukanlah tanda kelemahan, melainkan panggilan untuk
              menemukan kekuatan tersembunyi di dalam diri. Teruslah berjalan,
              bahkan di saat langkah terasa berat.”
            </p>
          </div>
        </div>
      </div>
      <div id="definition">
        <div className="flex flex-col align-middle items-center justify-center py-8 px-10 lg:px-20 lg:flex-row lg:gap-16">
          <div className="items-stretch w-75 lg:w-1/4">
            <img
              loading="lazy"
              src={hero2}
              className="aspect-[1.07] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="text-2xl leading-10 self-stretch mt-6 lg:mt-0 text-center w-full lg:w-3/4">
            <p className="text-2xl lg:text-justify lg:text-3xl font-black">
              MentalKu: Aplikasi untuk Kesehatan Mental Anda
            </p>
            <div className="text-lg lg:text-xl mt-3 lg:text-justify leading-normal lg:leading-loose">
              <p className="">
                Tahukah Anda bahwa kesehatan mental adalah bagian penting dari
                kesehatan secara keseluruhan? Kesehatan mental yang baik dapat
                membantu Anda menjalani kehidupan yang bahagia dan produktif.
                <br /> Jika Anda merasa sedang berjuang dengan kesehatan mental
                Anda, Aplikasi Mentalku dapat membantu. Aplikasi ini menyediakan
                tes topik kesehatan mental yang dapat membantu Anda memahami
                kondisi Anda.
              </p>
            </div>
            <div className="flex mt-4">
              <Link
                to="/tes-kesehatan-mental"
                alt="Coba Deh Direct Tex Kesehatan Mental"
              >
                <ButtonTemplate text={"Coba Sekarang"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="meaning">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-between py-8 px-10 lg:px-20">
          <div className="mb-0 w-full">
            <HeadingReason title1="Kenapa harus" title2="MentalKu?" />
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {reasons.map((reason, index) => (
                <ReasonCard key={index} title={reason} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
