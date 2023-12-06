import React from "react";
import img1 from "../../../assets/panduan.png";

const Panduan = () => {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center md:px-32 px-5 mt-14 ">
      <div className="md:w-[50%] max-md:w-full max-md:mt-10 flex items-center">
        <img
          loading="lazy"
          srcSet={img1}
          className="aspect-[1.19] object-contain object-center w-full max-h-[70vh] md:max-h-full md:w-auto"
          alt="Image"
        />
      </div>
      <div className="md:w-[50%] max-md:w-full max-md:mt-5 pr-5">
        <p className="text-black text-3xl text-justify font-bold max-md:max-w-full mb-10 ml-5">
          Panduan Test Mental
        </p>
        <ul className="list-decimal text-justify ml-5 pl-3">
          <li className="mb-2">
            Tidak ada jawaban yang benar atau salah. Silakan pilih jawaban yang
            menggambarkan kondisi kamu sebenar-benarnya.
          </li>
          <li className="mb-2">
            Tes ini tidak memiliki batasan waktu, sehingga gunakan waktu sebaik
            mungkin untuk merespons setiap pertanyaan. Carilah tempat yang
            nyaman dan tenang agar kamu dapat fokus sepenuhnya.
          </li>
          <li className="mb-2">
            Penting untuk dicatat bahwa keluar dari tes di tengah jalan akan
            menghapus seluruh progres dan jawaban. Pastikan untuk menyelesaikan
            tes sampai selesai.
          </li>
          <li className="mb-2">
            Setelah menyelesaikan semua pertanyaan, hasil tes akan dikategorikan
            sesuai dengan kondisimu saat ini dan akan dikirimkan melalui e-mail
            dalam beberapa hari.
          </li>
          <li>
            Kami menekankan pentingnya untuk tidak melakukan self-diagnosis.
            Jika kamu mengalami kondisi yang sulit atau membutuhkan bantuan,
            disarankan untuk mencari bantuan dari psikolog atau profesional
            kesehatan mental lainnya.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Panduan;
