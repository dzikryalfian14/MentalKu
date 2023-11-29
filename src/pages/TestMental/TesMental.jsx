import React from "react";
import imgJumbotron from "../../assets/psychotest.png";

const TesMental = () => {
  return (
    <div className="p-12 lg:p-32">
      <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-8">
        <div className="lg:w-2/3">
          <p className="text-3xl font-bold text-center lg:text-start">
            Test Kesehatan Mentalmu Bersama MentalKu !
          </p>
          <p className="my-8 text-center lg:text-start">
            Apakah kamu ingin lebih memahami kondisi kesehatan mentalmu saat
            ini? Mari isi tes di bawah ini dan temukan hasilnya!
          </p>
          <div className="flex flex-col justify-start gap-5 lg:my-10">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#FF8080] via-[#FF8080] to-[#FF8080] hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-[#f96a6a] shadow-lg shadow-[#FF8080]/50 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2 lg:w-2/3"
            >
              Alur Tes Kesehatan Mental
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#FF8080] via-[#FF8080] to-[#FF8080] hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-[#f96a6a] shadow-lg shadow-[#FF8080]/50 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2 lg:w-2/3"
            >
              Pilih Kategori Tes
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#FF8080] via-[#FF8080] to-[#FF8080] hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-[#f96a6a] shadow-lg shadow-[#FF8080]/50 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2 lg:w-2/3"
            >
              Panduan Pengisian Tes
            </button>
          </div>
        </div>
        <div className="lg:w-1/3">
          <img
            srcSet={imgJumbotron}
            className="mb-10 lg:h-auto lg:max-w-full me-3"
            alt="Jumbotron Tes Kesehatan Mental"
          />
        </div>
      </div>
    </div>
  );
};

export default TesMental;
