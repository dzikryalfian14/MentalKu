/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import quizData from "../../../../../public/data/pertanyaan.json";
import recomendationData from "../../../../../public/data/NewRecomdation.json";
import resultData from "../../../../../public/data/HasilTest.json";

import Modal from "react-modal";
Modal.setAppElement("#root");

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DepressionTest = () => {
  const [answers, setAnswers] = useState(
    new Array(quizData.questions_depresi.length).fill(null),
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [depressionCategory, setDepressionCategory] = useState("");
  const [depressionRecomendation, setDepressionRecomendation] = useState([]);

  const [depressionDesign, setDepressionDesign] = useState("");
  const [depressionResult, setDepressionResult] = useState("");

  const [isModalAnswer, setIsModalAnswer] = useState(false);
  const [isModalSubmit, setIsModalSubmit] = useState(false);

  const [isNext, setIsNext] = useState(``);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const pdfWidth = 300; // Lebar halaman dalam satuan mm
  const pdfHeight = 400; // Tinggi halaman dalam satuan mm
  
  const downloadPdf = () => {
    const pdf = new jsPDF({
      format: [pdfWidth, pdfHeight],
      unit: 'mm',
    });

    // Dapatkan elemen HTML yang ingin dijadikan PDF
    const element = document.getElementById("test-results");

    // Konversi elemen HTML ke gambar menggunakan html2canvas
    html2canvas(element).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const imgWidth = 300;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imageData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("hasil_test_depresi.pdf");
    });
  };

  window.onbeforeunload = function (event) {
    const confirmationMessage =
      "Apakah Anda yakin ingin keluar sebelum menyelesaikan tes?";
    return confirmationMessage;
  };

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setIsNext(``);
  };

  const handleNextQuestion = () => {
    if (answers[currentQuestionIndex] === null) {
      setIsModalAnswer(true);
      return;
    }

    // pindah ke pertanyaan berikutnya
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    if (currentQuestionIndex >= 0) {
      setIsNext(``);
    }

    if (currentQuestionIndex === quizData.questions_depresi.length - 2) {
      setIsNext(`Submit`);
    }
    // jika sudah menjawab semua pertanyaan, hitung skor
    if (currentQuestionIndex === quizData.questions_depresi.length - 1) {
      setIsModalSubmit(true);
      return;
    }
  };

  const calculateScore = () => {
    const totalScore = answers.reduce((acc, value) => acc + value, 0);

    let data = recomendationData;
    let percentage = 0;
    let depressionCategory = "";

    // logika penilaian depresi
    if (totalScore >= 0 && totalScore <= 9) {
      depressionCategory = "NORMAL";
      percentage = 20;
      setDepressionRecomendation(data.normal_depresi);
      setDepressionDesign(
        "text-black text-center font-semibold whitespace-nowrap justify-center items-stretch bg-teal-700 bg-opacity-60 self-center w-full mt-11 max-md:text-4xl mt-15 px-5",
      );
    } else if (totalScore >= 10 && totalScore <= 13) {
      depressionCategory = "RINGAN";
      percentage = 40;
      setDepressionRecomendation(data.ringan_depresi);
      setDepressionDesign(
        "text-black text-center font-semibold whitespace-nowrap justify-center items-stretch bg-orange-300 bg-opacity-60 self-center w-full mt-11 max-md:text-4xl mt-15 px-5",
      );
    } else if (totalScore >= 14 && totalScore <= 20) {
      depressionCategory = "SEDANG";
      percentage = 60;
      setDepressionRecomendation(data.sedang_depresi);
      setDepressionDesign(
        "text-black text-center font-semibold whitespace-nowrap justify-center items-stretch bg-orange-300 bg-opacity-60 self-center w-full mt-11 max-md:text-4xl mt-15 px-5",
      );
    } else if (totalScore >= 21 && totalScore <= 27) {
      depressionCategory = "PARAH";
      percentage = 80;
      setDepressionRecomendation(data.parah_depresi);
      setDepressionDesign(
        "text-black text-center font-semibold whitespace-nowrap justify-center items-stretch bg-red-600 bg-opacity-60 self-center w-full mt-11 max-md:text-4xl mt-15 px-5",
      );
    } else if (totalScore > 28) {
      depressionCategory = "SANGAT PARAH";
      percentage = 100;
      setDepressionRecomendation(data["sangat-parah_depresi"]);
      setDepressionDesign(
        "text-black text-center font-semibold whitespace-nowrap justify-center items-stretch bg-red-600 self-center w-full mt-11 max-md:text-4xl mt-15 px-5",
      );
    }

    setDepressionCategory(depressionCategory);
    const result =
      resultData.hasil_test.depresi[depressionCategory.toLowerCase()];
    setProgressPercentage(percentage);
    setDepressionResult(result);
  };

  let questions = [];
  questions = quizData.questions_depresi;

  const modalStyles = {
    content: {
      width: "70%",
      height: "30%",
      margin: "auto",
      overflow: "auto",
      fontSize: "2rem",
      borderRadius: "20px",
    },
  };

  return (
    <>
      <div className="m-10 border shadow-sm bg-white self-center flex-col justify-center items-center mt-10 mb-20 mx-20 px-12 py-10 rounded-2xl border-solid border-rose-600 max-md:max-w-full max-md:my-10 max-md:px-20">
        {currentQuestionIndex < quizData.questions_depresi.length && (
          <h2 className="p-4 justify-center font-extrabold text-black text-justify text-4xl self-stretch max-md:max-w-full max-md:text-4xl">
            Pertanyaan {currentQuestionIndex + 1} dari{" "}
            {quizData.questions_depresi.length}
          </h2>
        )}

        <Modal //Modal untuk 'opsi harus dijawab'
          isOpen={isModalAnswer}
          onRequestClose={() => setIsModalAnswer(false)}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <div className="flex flex-col items-center justify-center text-center h-auto">
            <h2 className="text-red-500 text-2x1 font-bold">Peringatan!</h2>
            <p className="text-base sm:text-2xl xl:text-3xl">
              Anda harus menjawab pertanyaan ini terlebih dahulu.
            </p>
            <button
              className="text-white text-center text-3xl bg-rose-400 mt-5 m px-4 py-2 rounded-3xl m-auto"
              onClick={() => setIsModalAnswer(false)}
            >
              Tutup
            </button>
          </div>
        </Modal>

        <Modal //modal sebelum submit
          isOpen={isModalSubmit}
          onRequestClose={() => setIsModalSubmit(false)}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <div className="flex flex-col items-center justify-center text-center h-auto">
            <h2 className="text-red-500 text-3x1 font-bold">Perhatian!</h2>
            <p className="text-base sm:text-2xl xl:text-3xl">
              Apakah anda yakin semua jawaban terisi dengan baik dan jujur?
            </p>
            <div className="grid-cols-2 m-3">
              <button
                className="text-white text-center text-3xl bg-rose-400 mx-5 m px-4 py-2 rounded-3xl m-auto"
                onClick={() => {
                  setIsModalSubmit(false);
                  handlePreviousQuestion();
                }}
              >
                Tidak
              </button>
              <button
                className="text-white text-center text-3xl bg-rose-400 mx-5 m px-4 py-2 rounded-3xl m-auto"
                onClick={() => {
                  calculateScore();
                  setIsModalSubmit(false);
                }}
              >
                Yakin
              </button>
            </div>
          </div>
        </Modal>

        {/* Soal */}
        <div className="bg-black self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
        {currentQuestionIndex < quizData.questions_depresi.length && (
          <div key={quizData.questions_depresi[currentQuestionIndex].id}>
            <p className="text-base sm:text-2xl xl:text-3xl pt-4 pb-8 text-left font-bold text-black self-stretch mt-10 max-md:max-w-full max-md:mt-10">
              {quizData.questions_depresi[currentQuestionIndex].question}
            </p>
            {/* Opsi */}
            {quizData.questions_depresi[currentQuestionIndex].options.map(
              (option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`sm:w-72 xl:w-54 h-17 border rounded-md justify-center m-5 text-rose-600  text-justify text-2xl border-rose-600 bg-white grow items-stretch px-8 py-5 rounded-md border-solid max-md:px-10 hover:bg-gray-200${
                    answers[currentQuestionIndex] ===
                    quizData.questions_depresi[currentQuestionIndex].value[
                      optionIndex
                    ]
                      ? " bg-rose-600 text-black font-extrabold" //active
                      : ""
                  }`}
                  onClick={() =>
                    handleAnswerChange(
                      currentQuestionIndex,
                      quizData.questions_depresi[currentQuestionIndex].value[
                        optionIndex
                      ],
                    )
                  }
                >
                  {option}
                </button>
              ),
            )}
            {/* tombol mundur dan maju */}
            <br />
            <div className="flex justify-between">
              {currentQuestionIndex > 0 && (
                <button
                  onClick={handlePreviousQuestion}
                  className="text-white text-center text-3xl bg-rose-400 mt-20 px-6 py-6 rounded-3xl max-md:mt-10"
                >
                  <svg
                    className="w-6 h-6 text-white-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="5"
                      d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                  </svg>
                </button>
              )}
              <button
                onClick={handleNextQuestion}
                className="text-white text-center text-3xl bg-rose-400 mt-20 px-6 py-6 rounded-3xl max-md:mt-10"
              >
                {isNext}
                <svg
                  className="w-6 h-6 text-white-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* hasil */}
        {currentQuestionIndex === quizData.questions_depresi.length && (
          <div className="bg-white-100">
            <div id="test-results">
              <div>
                <div className="bg-green-100">
                  <h1 className="text-base sm:text-5xl text-center xl:text-6xl pt-4 font-semibold text-black self-stretch mt-10 leading-10 max-md:max-w-full">
                    Hasil Tes Depresi
                  </h1>
                  <p className="text-base sm:text-xl text-center xl:text-2xl text-black self-stretch leading-10 py-8 max-md:max-w-full">
                    Pertanyaan-pertanyaan ini merujuk pada Alat Skrining
                    Berbasis Bukti, namun hanya memberikan indikasi dan tidak
                    dapat dianggap sebagai diagnosis resmi.
                  </p>
                </div>
                <p className="text-base sm:text-2xl text-center xl:text-3xl pt-4 pb-8 font-bold text-black self-stretch mt-10 leading-10 -mr-5 max-md:max-w-full">
                Hasil Menunjukkan bahwa kondisi anda sebagai berikut
                </p>

                {/* Progress bar */}

                <div className="flex items-center justify-center mt-5">
                  <div className="relative w-full bg-gray-400 h-10 rounded-full">
                    <div
                      className="absolute h-10 bg-green-500 rounded-full text-right"
                      style={{ width: `${progressPercentage}%` }}
                    ><p className="font-bold w-10 h-10 pr-1 py-2 mx-3 text-1.5xl text-center border border-gray-500 bg-white text-right rounded-full">
                    {progressPercentage}%</p></div>
                  </div>
                </div>
                <div className="text-base sm:text-2xl text-center xl:text-3xl pt-4 pb-8 font-bold text-black self-stretch mt-10 leading-10 -mr-5 max-md:max-w-full">
                 <span className={depressionDesign}>{depressionCategory}</span>
                </div>
                {/* Hasil Test */}
                <p className="text-base sm:text-xl font-semibold text-center xl:text-3xl text-black self-stretch mt-5 leading-10 -mr-5 py-8 max-md:max-w-full">
                  {
                    resultData.hasil_test.depresi[
                      depressionCategory.toLowerCase()
                    ]
                  }
                </p>
                <p className="text-base sm:text-2xl text-center xl:text-3xl pb-8 font-semibold text-black self-stretch leading-10 max-md:max-w-full">
                  Namun, kami menyarankan beberapa hal yang bisa Anda lakukan :
                </p>
                <div className="sm: grid-cols-1 xl:flex">
                  <div className="w-full p-4">
                  <ul className="text-base sm:text-2xl xl:text-2xl list-disc font-semibold text-black text-justify self-stretch grow whitespace-wrap max-md:max-w-full">
                      {depressionRecomendation.map((item) => (
                        <li
                          key={item.id}
                          className="py-4 flex text-left font-medium whitespace-prewrap"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="darkgreen"
                            className="w-7 h-8"
                          >
                            <path d="M10 1a6 6 0 00-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 00.572.729 6.016 6.016 0 002.856 0A.75.75 0 0012 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0010 1zM8.863 17.414a.75.75 0 00-.226 1.483 9.066 9.066 0 002.726 0 .75.75 0 00-.226-1.483 7.553 7.553 0 01-2.274 0z" />
                          </svg>
                          {item.saran}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* unduh dokumen */}
            <button
              className="text-base sm:text-2x1 font-bold xl: text-center text-3xl bg-rose-400 mt-5 mx-4 px-6 py-3 rounded-3xl"
              onClick={downloadPdf}
            >
              Unduh Hasil Test (PDF)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DepressionTest;
