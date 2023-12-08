import React from "react";
import testimoniData from "../../../public/data/testimoniData.json";
import teamData from "../../../public/data/teamData.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode } from "swiper/modules";
import "../../../public/styles/swiper.scss";
import { TestimonialCard } from "./SubComponents/TestimonialCard";
import { ProfileCard } from "./SubComponents/ProfileCard";

const About = () => {
  return (
    <>
      <div id="jumbotron">
        <div className="p-10 lg:p-14 lg:px-20 align-middle text-center bg-[#CDFAD5]">
          <h1
            className="pb-6 text-2xl md:text-3xl lg:text-4xl font-black"
            style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)" }}
          >
            Mentalku
          </h1>
          <p className="text-lg lg:text-xl leading-loose">
            Aplikasi untuk membantu pengguna mengatasi tantangan kesehatan
            mental mereka dengan memberikan panduan langkah demi langkah dan
            menghasilkan saran yang komprehensif
          </p>
        </div>
      </div>
      <div id="visiMisi">
        <div className="text-center p-10 lg:px-20">
          <div>
            <p className="text-2xl lg:text-3xl font-black pb-6">
              Visi dan Misi MentalKu
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="mb-8 lg:mb-0 lg:w-1/2 rounded-2xl p-8 px-10 lg:px-20 bg-[#CDFAD5]">
              <p className="text-xl lg:text-2xl font-bold pb-3">Visi</p>
              <p className="text-center text-md">
                Menjadi sumber terpercaya dan terdepan dalam menyediakan
                informasi, dukungan, dan sumber daya bagi setiap individu yang
                mencari perawatan dan pemahaman tentang kesehatan mental, dengan
                fokus pada pemberdayaan diri dan penghapusan stigma terkait
                masalah kesehatan mental
              </p>
            </div>
            <div className="lg:w-1/2 rounded-2xl p-8 px-10 lg:px-20 bg-[#CDFAD5]">
              <p className="text-xl lg:text-2xl font-bold pb-3">Misi</p>
              <p className="text-center text-md">
                Memberikan informasi yang komprehensif dan mudah dipahami
                tentang kesehatan mental kepada semua lapisan masyarakat.
                Menyediakan platform yang dapat diakses oleh siapa pun, di mana
                pun, tanpa batasan geografis atau finansial Menyediakan tes
                kesehatan mental yang komprehensif yang mengakomodasi berbagai
                aspek kesehatan mental.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="testimoni">
        <div className="p-10 lg:px-20">
          <div className="text-center justify-center">
            <p className="justify-center text-center text-2xl lg:text-3xl font-black pb-6">
              Testimoni
            </p>
            <Swiper
              slidesPerView={3}
              spaceBetween={35}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {testimoniData.map((data, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard {...data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div id="ourTeam">
        <div className="p-10 lg:px-20">
          <p className="justify-center text-center text-2xl lg:text-3xl font-black pb-6">
            Our Teams
          </p>
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {teamData.map((card, index) => (
              <ProfileCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
