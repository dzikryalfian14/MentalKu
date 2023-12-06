import React from "react";

const VisiMisi = () => {
  return (
    <div className="text-center p-10 lg:px-20">
      <div>
        <p className="text-2xl lg:text-3xl font-black pb-6">
          Visi dan Misi MentalKu
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="mb-8 lg:mb-0 lg:w-1/2 rounded-2xl p-8 px-10 lg:px-20 bg-[#F6FDC3]">
          <p className="text-xl lg:text-2xl font-bold pb-3">Visi</p>
          <p className="text-center text-md">
            Menjadi sumber terpercaya dan terdepan dalam menyediakan informasi,
            dukungan, dan sumber daya bagi setiap individu yang mencari
            perawatan dan pemahaman tentang kesehatan mental, dengan fokus pada
            pemberdayaan diri dan penghapusan stigma terkait masalah kesehatan
            mental
          </p>
        </div>
        <div className="lg:w-1/2 rounded-2xl p-8 px-10 lg:px-20 bg-[#F6FDC3]">
          <p className="text-xl lg:text-2xl font-bold pb-3">Misi</p>
          <p className="text-center text-md">
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
