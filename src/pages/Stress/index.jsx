import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import ButtonTemplate from "../../layout/ButtonTemplate";

import hero from "../../assets/hero-stress.png";
import dampak1 from "../../assets/cemas-2.svg";
import dampak2 from "../../assets/stress-1.svg";
import dampak3 from "../../assets/cemas-4.svg";
import dampak4 from "../../assets/stress-2.svg";
import { MdCancel } from "react-icons/md";

const index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleTestStress = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <div id="hero">
        <div className="flex flex-col align-middle items-center lg:gap-12 justify-center p-10 lg:px-20 lg:flex-row">
          <div className="flex flex-col items-stretch min-w-40 w-auto md:max-w-[40%] lg:max-w-[35%] pb-6 lg:pb-0">
            <img
              srcSet={hero}
              alt="hero"
              className="object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div className="min-w-30 w-auto lg:max-w-[65%] text-center lg:text-justify">
            <h2 className="text-2xl lg:text-3xl font-black pb-6">
              Apa itu Stress?
            </h2>
            <p className="leading-loose text-center lg:text-justify text-lg md:text-[15px] lg:text-xl">
              Stres adalah respons tubuh terhadap tekanan fisik atau emosional.
              Ini bisa disebabkan oleh berbagai faktor, seperti tuntutan
              pekerjaan, masalah keuangan, atau perubahan dalam kehidupan. Stres
              bisa bersifat sementara atau berkelanjutan. Gejalanya meliputi
              ketegangan otot, sakit kepala, perubahan nafsu makan, sulit tidur,
              kesulitan berkonsentrasi, dan perubahan suasana hati
            </p>
          </div>
        </div>
      </div>
      <div id="penyebab">
        <div className="flex flex-col items-center justify-center p-10 lg:px-20">
          <h1 className="text-2xl lg:text-3xl font-black pb-6">
            Penyebab Stress
          </h1>
          <div className="flex flex-wrap gap-10 justify-center">
            <p className="bg-[#FFF] text-start p-2 rounded-lg font-medium text-slate-400 border border-current w-full md:w-1/2 lg:w-1/3">
              ✔ Tekanan Kerja dan Lingkungan Kerja
            </p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg font-medium text-slate-400 border border-current w-full md:w-1/2 lg:w-1/3">
              ✔ Masalah Keuangan
            </p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg font-medium text-slate-400 border border-current w-full md:w-1/2 lg:w-1/3">
              ✔ Perubahan Hidup yang Besar
            </p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg font-medium text-slate-400 border border-current w-full md:w-1/2 lg:w-1/3">
              ✔ Konflik dalam Hubungan
            </p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg font-medium text-slate-400 border border-current w-full md:w-1/2 lg:w-1/3">
              ✔ Tekanan Sosial
            </p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg font-medium text-slate-400 border border-current w-full md:w-1/2 lg:w-1/3">
              ✔ Tuntutan Waktu
            </p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg font-medium text-slate-400 border border-current w-full md:w-1/2 lg:w-1/3">
              ✔ Gangguan Lingkungan
            </p>
            <p className="bg-[#FFF] text-start p-2 rounded-lg font-medium text-slate-400 border border-current w-full md:w-1/2 lg:w-1/3">
              ✔ Perubahan Sosial atau Politik
            </p>
          </div>
        </div>
      </div>
      <div id="dampak">
        <div className="flex flex-col items-center justify-center p-10 lg:px-20">
          <h2 className="text-2xl lg:text-3xl font-black pb-6">
            Apa Dampak Stress ?
          </h2>
          <div className="flex flex-wrap justify-around items-center justify-items-center gap-5">
            <div className="flex flex-col items-center min-w-[100px] w-50 max-w-[250px] h-80 p-4 rounded-lg bg-[#CDFAD5]">
              <img
                srcSet={dampak1}
                alt="Gambar Produktivitas"
                className="w-[75%] pb-6"
              />
              <h2 className="text-xl font-medium text-center leading-loose">
                Produktivitas Menurun
              </h2>
            </div>
            <div className="flex flex-col items-center min-w-[100px] w-50 max-w-[250px] h-80 p-4 rounded-lg bg-[#CDFAD5]">
              <img
                srcSet={dampak2}
                alt="Gambar Hubungan Sosial"
                className="w-[75%] pb-6"
              />
              <h2 className="text-xl font-medium text-center leading-loose">
                Berpengaruh pada hubungan sosial
              </h2>
            </div>
            <div className="flex flex-col items-center min-w-[100px] w-50 max-w-[250px] h-80 p-4 rounded-lg bg-[#CDFAD5]">
              <img
                srcSet={dampak3}
                alt="Gambar Kesehatan Fisik"
                className="w-[75%] pb-6"
              />
              <h2 className="text-xl font-medium text-center leading-loose">
                Masalah Kesehatan Fisik
              </h2>
            </div>
            <div className="flex flex-col items-center min-w-[100px] w-50 max-w-[250px] h-80 p-4 rounded-lg bg-[#CDFAD5]">
              <img
                srcSet={dampak4}
                alt="Gambar Kondisi Emosional"
                className="w-[75%] pb-6"
              />
              <h2 className="text-xl font-medium text-center leading-loose">
                Berpengaruh Pada Kondisi Emosional
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div id="tes">
        <div className="flex flex-col items-center justify-center p-10 lg:px-20">
          <div className="text-xl lg:text-2xl font-black pb-6">
            Untuk mengetahui kondisi anda pada saat ini, silahkan ikuti berikut
          </div>
          <div className="flex justify-center">
            <button onClick={handleTestStress}>
              <ButtonTemplate text="Tes Stress" />
            </button>
          </div>

          {/* Modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="modal bg-[#ffffff] rounded-md mx-auto lg:max-w-screen lg:max-h-screen z-[9998] transition-all duration-300 border border-solid border-rose-600 overflow-auto p-10 lg:px-20"
            overlayClassName="overlay bg-white bg-opacity-70 fixed z-[9998] overflow-auto top-0 left-0 right-0 bottom-0"
          >
            <div className="content text-center relative">
              <p className="text-red-500 text-2xl lg:text-3xl font-black pb-6 px-5">
                Sebelum memulai, kami ingin memberikan beberapa informasi
                penting:
              </p>
              <ul className="list-decimal text-justify leading-loose pt-3 text-base lg:text-lg">
                <li>
                  Hasil tes ini bukan pengganti konsultasi langsung dengan
                  profesional kesehatan mental. Jika Anda memiliki kekhawatiran
                  serius tentang kesehatan mental Anda, segera hubungi
                  profesional kesehatan.
                </li>
                <li>
                  Pastikan Anda berada di lingkungan yang tenang dan nyaman
                  selama tes. Temukan tempat yang bebas gangguan dan luangkan
                  waktu yang cukup.
                </li>
                <li>
                  Tes ini dirancang untuk memberikan pemahaman umum tentang
                  kesehatan mental Anda. Jawablah dengan jujur dan terbuka.
                </li>
                <li>
                  Apabila Anda merasa sangat kewalahan atau mengalami krisis
                  mental, segera hubungi layanan darurat atau konsultasikan
                  dengan profesional kesehatan mental.
                </li>
                <li>
                  Setelah tes selesai, kami akan menyediakan saran berdasarkan
                  hasil Anda. Namun, evaluasi lebih mendalam dapat diperoleh
                  melalui konsultasi dengan seorang profesional.
                </li>
              </ul>
              <div className="flex justify-center">
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="rounded-full absolute top-0 -right-3 lg:-right-5 "
                >
                  <MdCancel className="text-red-600 hover:bg-red-400 text-3xl" />
                </button>
                <Link
                  to="/tes-kesehatan-mental/tes-depresi"
                  className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 text-white text-base lg:text-lg py-2 px-4 rounded-md"
                >
                  Mulai Tes
                </Link>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default index;
