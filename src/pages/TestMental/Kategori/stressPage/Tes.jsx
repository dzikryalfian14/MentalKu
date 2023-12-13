import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";

const Tes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleTestStress = () => {
    // Logika penilaian depresi
    // Membuka modal saat tombol ditekan
    setModalIsOpen(true);
  };

  return (
    <div className="p-16 ">
      <div className="text-center text-lg font-bold">
      Untuk mengetahui kondisi anda pada saat ini, silahkan ikuti berikut
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleTestStress}
          className="bg-[#cdcec8] py-2 px-5 rounded-lg mt-4 text-lg font-bold hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-brightGreen hover:text-white transition-all"
        >
          Tes Stress
        </button>
      </div>

       {/* Modal */}
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal p-4 bg-[#ffffff] rounded-md max-w-[100 vh] mx-auto max-h-[100 vh] min-h-[100 vh] z-[9998] transition-all duration-300 border border-solid border-rose-600 overflow-auto px-16 py-[50px]"
        overlayClassName="overlay bg-white bg-opacity-70 fixed z-[9998] overflow-auto top-0 left-0 right-0 bottom-0"
      >
        <div className="content text-center relative">
        <p className="text-red-500 text-2xl font-bold">Sebelum memulai, kami ingin memberikan beberapa informasi penting:</p>
        <ul className=" list-decimal text-justify leading-loose pt-3 text-base sm:text-2xl xl:text-3xl">
            <li>Hasil tes ini bukan pengganti konsultasi langsung dengan profesional kesehatan mental. Jika Anda memiliki kekhawatiran serius tentang kesehatan mental Anda, segera hubungi profesional kesehatan.</li>
            <li>Pastikan Anda berada di lingkungan yang tenang dan nyaman selama tes. Temukan tempat yang bebas gangguan dan luangkan waktu yang cukup.</li>
            <li>Tes ini dirancang untuk memberikan pemahaman umum tentang kesehatan mental Anda. Jawablah dengan jujur dan terbuka.</li>
            <li>Apabila Anda merasa sangat kewalahan atau mengalami krisis mental, segera hubungi layanan darurat atau konsultasikan dengan profesional kesehatan mental.</li>
            <li>Setelah tes selesai, kami akan menyediakan saran berdasarkan hasil Anda. Namun, evaluasi lebih mendalam dapat diperoleh melalui konsultasi dengan seorang profesional.</li>
        </ul>
          <div className="flex justify-center">
            <button
              onClick={() => setModalIsOpen(false)}
              className="bg-red-500  hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 text-white py-2 px-4 rounded-md  mr-2 absolute -top-12 -right-16"
            >
              X
            </button>
            <Link to="/tes-kesehatan-mental/stresstest">
              <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 text-white py-2 px-4 rounded-md">
                Mulai Tes
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tes;
