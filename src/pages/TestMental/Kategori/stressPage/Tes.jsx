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
    <div className="p-16">
      <div className="text-center text-lg font-bold">
        Untuk mengetahui kondisi stress, silahkan ikuti tes!!
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
        className="modal p-4 bg-[#cdcec8] rounded-md max-w-md mx-auto mt-24"
        overlayClassName="overlay fixed top-0 left-0 right-0 bottom-0"
      >
        <div className="content text-center">
          <p className="mb-4 text-lg">Apakah Anda yakin ingin melakukan tes stress ?</p>
          <div className="flex justify-center">
            <button
              onClick={() => setModalIsOpen(false)}
              className="bg-red-500 text-white py-2 px-4 mr-2 rounded-md"
            >
              Tidak
            </button>
            <Link to="/tes-kesehatan-mental/stresstest">
              <button className="bg-green-500 text-white py-2 px-4 rounded-md">
                Iya
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tes;
