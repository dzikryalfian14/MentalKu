import React from "react";
import Button from "../../../layout/Button";
import { Link } from "react-router-dom";

import hero2 from "../../../assets/hero-2.png";

const Definition = () => {
  return (
    <div className="flex flex-col align-middle items-center justify-center py-8 px-10 lg:px-20 lg:flex-row lg:gap-16">
      <div className="items-stretch w-75 lg:w-1/4">
        <img
          loading="lazy"
          src={hero2}
          className="aspect-[1.07] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
        />
      </div>
      <div className="text-2xl leading-10 self-stretch mt-6 lg:mt-0 text-center w-full lg:w-3/4">
        <p className="text-2xl lg:text-justify lg:text-3xl font-black">MentalKu: Aplikasi untuk Kesehatan Mental Anda</p>
        <div className="text-lg lg:text-xl mt-3 lg:text-justify leading-normal lg:leading-loose">
          <p className="">
            Tahukah Anda bahwa kesehatan mental adalah bagian penting dari
            kesehatan secara keseluruhan? Kesehatan mental yang baik dapat
            membantu Anda menjalani kehidupan yang bahagia dan produktif.
            <br/> Jika Anda merasa sedang berjuang dengan kesehatan mental Anda,
            Aplikasi Mentalku dapat membantu. Aplikasi ini menyediakan tes topik
            kesehatan mental yang dapat membantu Anda memahami kondisi Anda.
          </p>
        </div>
        <div className="flex mt-4">
          <Link to="/tes-kesehatan-mental" alt="Coba Deh Direct Tex Kesehatan Mental" >
            <Button text={"Coba Deh!"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Definition;
