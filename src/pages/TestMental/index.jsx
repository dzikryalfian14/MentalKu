import React from "react";
import hero2 from "../../assets/psychotest.png";
import Button from "../../layout/Button";
import AlurCard from "../../layout/AlurCard";
import DaftarCard from "../../layout/DaftarCard";

import imgCemas from "../../assets/cemas.png";
import imgDepresi from "../../assets/depresi.png";
import imgStress from "../../assets/stress.png";
import imgPanduan from "../../assets/panduan.png";
import { Link } from "react-router-dom";

const TestMental = () => {
  return (
    <>
      <div id="hero">
        <div className="flex flex-col align-middle items-center justify-center p-10 lg:px-20 lg:flex-row">
          <div className="md:w-3/4 text-center">
            <p className="text-4xl font-bold pt-5 lg:pt-0">
              Test Kesehatan Mental-mu Bersama MentalKu !
            </p>
            <div className="text-xl mt-6">
              <p className="text-black text-xl mt-6">
                Apakah kamu ingin lebih memahami kondisi kesehatan mentalmu saat
                ini? Mari isi tes di bawah ini dan temukan hasilnya!
              </p>
              <div className="mt-3 flex flex-col justify-center items-center gap-4">
                <Link
                  to="alur"
                  className="hover:text-[#539165] transition-all cursor-pointer"
                >
                  <Button text="Alur Tes Kesehatan Mental" />
                </Link>
                <Link
                  to="daftartest"
                  className="hover:text-[#539165] transition-all cursor-pointer"
                >
                  <Button text="Pilih Kategori Tes" />
                </Link>
                <Link
                  to="panduan"
                  className="hover:text-[#539165] transition-all cursor-pointer"
                >
                  <Button text="Panduan Pengisian Tes" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[50%] ml-7 max-md:w-full max-md:ml-0">
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
        <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
          <p className="text-black text-3xl font-bold mt-24 max-md:max-w-full max-md:mt-5 pt-2">
            Alur Test Kesehatan Mental
          </p>
          <div className=" flex flex-col lg:flex-row gap-5 mt-20">
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
        <div className="min-h-[70vh] flex flex-col items-center justify-center md:px-32 px-5">
          <p className="text-black text-3xl font-bold mt-14 max-md:max-w-full max-md:mt-5 pt-2">
            Daftar Kategori Test Kesehatan Mental
          </p>
          <div className="flex flex-col lg:flex-row gap-5 mt-14">
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
        </div>
      </div>
      <div id="panduan">
        <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center md:px-32 px-5 mt-14 ">
          <div className="md:w-[50%] max-md:w-full max-md:mt-10 flex items-center">
            <img
              loading="lazy"
              srcSet={imgPanduan}
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
        <div className="text-center max-w-prose mx-auto my-auto ">
          <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
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
