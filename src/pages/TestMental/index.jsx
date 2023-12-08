import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import hero2 from "../../assets/psychotest.png";
import ButtonTemplate from "../../layout/ButtonTemplate";
import AlurCard from "../../layout/AlurCard";
import DaftarCard from "../../layout/DaftarCard";

import imgCemas from "../../assets/cemas.png";
import imgDepresi from "../../assets/depresi.png";
import imgStress from "../../assets/stress.png";
import imgPanduan from "../../assets/panduan.png";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const TestMental = () => {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => {
    if (value === "xxl") {
      setSize(value);
    }
  };

  return (
    <>
      <div id="hero">
        <div className="flex flex-col-reverse align-middle items-center justify-center p-10 lg:px-20 lg:flex-row gap-12">
          <div className="min-w-30 w-auto max-w-72 text-center">
            <p className="text-2xl lg:text-3xl font-black pb-6">
              Test Kesehatan Mental-mu Bersama MentalKu !
            </p>
            <div className="text-xl">
              <p className="text-black text-xl leading-loose">
                Apakah kamu ingin lebih memahami kondisi kesehatan mentalmu saat
                ini? Mari isi tes di bawah ini dan temukan hasilnya!
              </p>
              <div className="mt-3 flex flex-col justify-center items-center gap-4">
                <a
                  href="#alur"
                  className="hover:text-[#539165] transition-all cursor-pointer"
                >
                  <ButtonTemplate text="Alur Tes Kesehatan Mental" />
                </a>
                <a
                  onClick={() => handleOpen("xxl")}
                  className="hover:text-[#539165] transition-all cursor-pointer"
                >
                  <ButtonTemplate text="Pilih Kategori Tes" />
                </a>
                <a
                  href="#panduan"
                  className="hover:text-[#539165] transition-all cursor-pointer"
                >
                  <ButtonTemplate text="Panduan Pengisian Tes" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch min-w-30 w-auto max-w-[50%]">
            <img
              loading="lazy"
              srcSet={hero2}
              className="aspect-[1.19] object-contain object-center w-full overflow-hidden max-md:mt-10"
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div id="alur">
        <div className="flex flex-col items-center justify-center p-10 lg:px-20">
          <p className="text-2xl lg:text-3xl font-black pb-6">
            Alur Test Kesehatan Mental
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <AlurCard
              img={imgCemas}
              title="Pilih Kategori Tes"
              para="Ada tiga jenis tes kategori kesehatan mental silahkan pilih sesuai dengan kondisi yang anda alami saat ini"
            />
            <AlurCard
              img={imgDepresi}
              title="Kerjakan Tes"
              para="Pilih jawaban untuk setiap pertanyaan sesuai dengan kondisi yang menggambarkan dirimu sebenar-benarnya."
            />
            <AlurCard
              img={imgStress}
              title="Lihat Hasil Tes Anda"
              para="Hasil tes berupa kategorisasi sesuai kondisimu sekarang dimulai dari rendah-tinggi. serta beberapa saran yang mungkin dilakukan"
            />
          </div>
        </div>
      </div>
      <div id="daftar-test">
        <div className="flex flex-col items-center justify-center p-10 lg:px-12">
          <>
            <Dialog
              open={size === "xxl"}
              size={size}
              handler={() => setSize(null)}
            >
              <DialogHeader className="flex text-4xl justify-center">
                <p>Daftar Kategori Test Kesehatan Mental</p>
                <button  className="ml-auto" onClick={() => setSize(null)}>
                  <MdCancel />
                </button>
              </DialogHeader>
              <hr />
              <DialogBody className="">
                <div className="flex flex-wrap lg:flex-row gap-20 justify-center">
                  <DaftarCard
                    link="kecemasan"
                    way="kecemasan"
                    img={imgCemas}
                    title="Kecemasan"
                    para="Kecemasan melibatkan ketakutan yang berlebihan dan rasa khawatir yang terus-menerus. Tes ini dirancang untuk membantu Anda mengenali apakah kecemasan mungkin memengaruhi kesejahteraan mental Anda."
                  />
                  <DaftarCard
                    link="depresi"
                    way="depresi"
                    img={imgDepresi}
                    title="Depresi"
                    para="Stress dapat timbul dari tuntutan harian yang berlebihan. Gejala stres melibatkan perasaan tegang dan sulit berkonsentrasi. Tes ini akan membantu mengidentifikasi tingkat stres Anda."
                  />
                  <DaftarCard
                    link="stress"
                    way="stress"
                    img={imgStress}
                    title="Stress"
                    para="Stress dapat timbul dari tuntutan harian yang berlebihan. Gejala stres melibatkan perasaan tegang dan sulit berkonsentrasi. Tes ini akan membantu mengidentifikasi tingkat stres Anda."
                  />
                </div>
              </DialogBody>
            </Dialog>
          </>
        </div>
      </div>
      <div id="panduan">
        <div className="flex flex-col lg:flex-row items-center justify-center p-10 lg:px-20 gap-5 lg:gap-16">
          <div className="min-w-30 w-auto max-w-56 flex items-center">
            <img
              loading="lazy"
              srcSet={imgPanduan}
              className="aspect-[1.19] object-contain object-center w-full max-h-[70vh] md:max-h-full md:w-auto"
              alt="Image"
            />
          </div>
          <div className="w-auto lg:w-2/3">
            <p className="text-black text-3xl text-justify font-bold max-md:max-w-full mb-6">
              Panduan Test Mental
            </p>
            <ul className="list-decimal text-justify leading-loose">
              <li className="mb-2">
                Tidak ada jawaban yang benar atau salah. Silakan pilih jawaban
                yang menggambarkan kondisi kamu sebenar-benarnya.
              </li>
              <li className="mb-2">
                Tes ini tidak memiliki batasan waktu, sehingga gunakan waktu
                sebaik mungkin untuk merespons setiap pertanyaan. Carilah tempat
                yang nyaman dan tenang agar kamu dapat fokus sepenuhnya.
              </li>
              <li className="mb-2">
                Penting untuk dicatat bahwa keluar dari tes di tengah jalan akan
                menghapus seluruh progres dan jawaban. Pastikan untuk
                menyelesaikan tes sampai selesai.
              </li>
              <li className="mb-2">
                Setelah menyelesaikan semua pertanyaan, hasil tes akan
                dikategorikan sesuai dengan kondisimu saat ini dan akan
                dikirimkan melalui e-mail dalam beberapa hari.
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
      </div>
      <div id="disclaimer">
        <div className="text-center max-w-prose mx-auto my-auto lg:py-10">
          <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
          <p className="text-gray-700 leading-loose">
            Jika Anda sedang mengalami krisis psikologis yang mengancam hidup
            Anda, layanan ini tidak direkomendasikan. Segera hubungi nomor
            darurat kesehatan mental di 119.
          </p>
        </div>
      </div>
    </>
  );
};

export default TestMental;
