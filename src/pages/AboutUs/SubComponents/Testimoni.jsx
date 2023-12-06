import React from "react";
import CardTesti from "../../../components/Card/CardTesti";
import testimoniData from "../../../../public/data/testimoniData.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode } from "swiper/modules";
import "../../../../public/styles/swiper.scss";
import { TestimonialCard } from "../../../components/Card/TestimonialCard";

const Testimoni = () => {
  return (
    <div className="p-10 lg:px-20">
      <div className="text-center justify-center">
        <p
          className="justify-center text-center text-2xl lg:text-3xl font-black pb-6"
        >
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
  );
};

export default Testimoni;
