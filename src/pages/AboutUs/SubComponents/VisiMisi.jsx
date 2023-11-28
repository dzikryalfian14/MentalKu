import React from "react";

const VisiMisi = () => {
  return (
    <div className="text-center px-10 py-10 lg:py-16 lg:px-32 bg-[#CDFAD5]">
      <div>
        <p className="text-3xl font-semibold lg:text-3xl pb-10">
          Visi dan Misi MentalKu
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <p className="text-2xl font-bold pb-3">Visi</p>
          <p className="text-center lg:text-start text-md px-10">
            Menjadi sumber terpercaya dan terdepan dalam menyediakan informasi,
            dukungan, dan sumber daya bagi setiap individu yang mencari
            perawatan dan pemahaman tentang kesehatan mental, dengan fokus pada
            pemberdayaan diri dan penghapusan stigma terkait masalah kesehatan
            mental
          </p>
        </div>
        <div className="lg:w-1/2">
          <p className="text-2xl font-bold pb-3">Misi</p>
          <p className="text-center lg:text-start text-md px-10">
            Memberikan informasi yang komprehensif dan mudah dipahami tentang
            kesehatan mental kepada semua lapisan masyarakat. Menyediakan
            platform yang dapat diakses oleh siapa pun, di mana pun, tanpa
            batasan geografis atau finansial Menyediakan tes kesehatan mental
            yang komprehensif yang mengakomodasi berbagai aspek kesehatan
            mental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
