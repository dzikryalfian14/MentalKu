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

const Testimoni = () => {
  return (
    <div className="p-32">
      <div className="text-center justify-center">
        <p
          className="text-xl lg:text-4xl font-semibold lg:text-3xl pb-10"
          style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)" }}
        >
          Testimoni
        </p>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {testimoniData.map((data, index) => (
            <SwiperSlide key={index}>
              <CardTesti {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimoni;
