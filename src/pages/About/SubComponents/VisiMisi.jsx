import React from "react";

const VisiMisi = () => {
  return (
    <div className="text-center p-[70px] bg-[#CDFAD5]">
      <div>
        <p className="text-3xl font-extrabold pb-10">Visi dan Misi MentalKu</p>
      </div>
      <div className="flex gap-10">
        <div className="basis-1/2">
          <p className="text-xl font-bold pb-3">Visi</p>
          <p className="text-start text-md">
            Menjadi sumber terpercaya dan terdepan dalam menyediakan informasi,
            dukungan, dan sumber daya bagi setiap individu yang mencari
            perawatan dan pemahaman tentang kesehatan mental, dengan fokus pada
            pemberdayaan diri dan penghapusan stigma terkait masalah kesehatan
            mental
          </p>
        </div>
        <div className="basis-1/2">
          <p className="text-xl font-bold pb-3">Misi</p>
          <p className="text-start text-md">
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
