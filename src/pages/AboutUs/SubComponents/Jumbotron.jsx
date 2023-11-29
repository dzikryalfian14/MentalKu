import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 py-20 lg:py-32 align-middle text-center">
      <h1
        className="mb-6 font-extrabold leading-none tracking-tight text-black text-2xl lg:text-3xl"
        style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)" }}
      >
        Mentalku
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl px-10 lg:px-48">
        Aplikasi untuk membantu pengguna mengatasi tantangan kesehatan mental
        mereka dengan memberikan panduan langkah demi langkah dan menghasilkan
        saran yang komprehensif
      </p>
    </div>
  );
};

export default Jumbotron;
