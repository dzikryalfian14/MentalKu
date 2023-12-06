import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-10 lg:p-14 lg:px-20 align-middle text-center bg-[#CDFAD5]">
      <h1
        className="pb-6 text-2xl md:text-3xl lg:text-4xl font-black"
        style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)" }}
      >
        Mentalku
      </h1>
      <p className="text-lg lg:text-xl leading-loose">
        Aplikasi untuk membantu pengguna mengatasi tantangan kesehatan mental
        mereka dengan memberikan panduan langkah demi langkah dan menghasilkan
        saran yang komprehensif
      </p>
    </div>
  );
};

export default Jumbotron;
