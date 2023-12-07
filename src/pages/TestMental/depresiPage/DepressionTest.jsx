/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import quizData from "../../../../../public/data/pertanyaan.json";
import recomendationData from "../../../../../public/data/Recomendation.json";

import Modal from "react-modal";
Modal.setAppElement("#root");

const DepressionTest = () => {
  const [answers, setAnswers] = useState(
    new Array(quizData.questions_depresi.length).fill(null),
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [depressionCategory, setDepressionCategory] = useState("");
  const [depressionRecomendation, setDepressionRecomendation] = useState([]);

  const [depressionDesign, setDepressionDesign] = useState("");

  const [isModalAnswer, setIsModalAnswer] = useState(false);
  const [isModalSubmit, setIsModalSubmit] = useState(false);

  const [isNext, setIsNext] = useState(``);

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

    if (currentQuestionIndex >= -1) {
      setIsNext(`Lanjutkan`);
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

    // logika penilaian depresi
    if (totalScore >= 0 && totalScore <= 9) {
      setDepressionCategory("NORMAL");
      setDepressionRecomendation(data.normal_depresi);
      setDepressionDesign(
        "text-white-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-teal-700 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
      );
    } else if (totalScore >= 10 && totalScore <= 13) {
      setDepressionCategory("RINGAN");
      setDepressionRecomendation(data.ringan_depresi);
      setDepressionDesign(
        "text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-orange-300 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
      );
    } else if (totalScore >= 14 && totalScore <= 20) {
      setDepressionCategory("SEDANG");
      setDepressionRecomendation(data.sedang_depresi);
      setDepressionDesign(
        "text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-orange-300 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
      );
    } else if (totalScore >= 21 && totalScore <= 27) {
      setDepressionCategory("PARAH");
      setDepressionRecomendation(data.parah_depresi);
      setDepressionDesign(
        "text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-gray-600 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
      );
    } else if (totalScore > 28) {
      setDepressionCategory("SANGAT PARAH");
      setDepressionRecomendation(data["sangat-parah_depresi"]);
      setDepressionDesign(
        "text-white-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-gray-600 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
      );
    }
  };

  let questions = [];
  questions = quizData.questions_depresi;

  const style = `
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

    .typing-animation {
      overflow: none;
      white-space: none;
      animation: none;
  }

  @media only screen and (min-width: 1200px){
    .typing-animation{
      overflow: hidden;
      white-space: nowrap;
      animation: typing 2s steps(20, end);
    }
  }
`;

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
      <style>{style}</style>
      <div className="m-10 border shadow-sm bg-white self-center flex-col justify-center items-center mt-10 mb-20 mx-20 px-12 py-10 rounded-2xl border-solid border-black max-md:max-w-full max-md:my-10 max-md:px-20">
        {currentQuestionIndex < quizData.questions_depresi.length && (
          <h2 className="p-4 justify-center font-extrabold text-black text-justify text-4xl self-stretch max-md:max-w-full max-md:text-4xl">
            Pertanyaan {currentQuestionIndex + 1} dari{" "}
            {quizData.questions_depresi.length}
          </h2>
        )}

        <Modal
          isOpen={isModalAnswer}
          onRequestClose={() => setIsModalAnswer(false)}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-red-500 text-2x1 font-bold">Peringatan!</h2>
            <p className="text-black mt-3">
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

        <Modal
          isOpen={isModalSubmit}
          onRequestClose={() => setIsModalSubmit(false)}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-red-500 text-2x1 font-bold">Peringatan!</h2>
            <p className="text-black mt-3">
              Apakah anda yakin semua jawaban terisi dengan baik dan jujur?
            </p>
            <button
              className="text-white text-center text-3xl bg-rose-400 mt-5 m px-4 py-2 rounded-3xl m-auto"
              onClick={() => {
                setIsModalSubmit(false);
                handlePreviousQuestion();
              }}
            >
              Tidak
            </button>
            <button
              className="text-white text-center text-3xl bg-rose-400 mt-5 m px-4 py-2 rounded-3xl m-auto"
              onClick={() => {
                calculateScore();
                setIsModalSubmit(false);
              }}
            >
              Yakin
            </button>
          </div>
        </Modal>

        <div className="bg-black self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
        {currentQuestionIndex < quizData.questions_depresi.length && (
          <div key={quizData.questions_depresi[currentQuestionIndex].id}>
            <p className="typing-animation text-base sm:text-2xl xl:text-3xl pt-4 pb-8 text-left font-bold text-black self-stretch mt-10 max-md:max-w-full max-md:mt-10">
              {quizData.questions_depresi[currentQuestionIndex].question}
            </p>

            {quizData.questions_depresi[currentQuestionIndex].options.map(
              (option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`w-64 h-17 border rounded-md shadow-sm justify-center m-5 text-rose-600  text-justify text-2xl border-rose-600 shadow-sm bg-white grow items-stretch px-8 py-5 rounded-md border-solid border-black max-md:px-10 ${
                    answers[currentQuestionIndex] ===
                    quizData.questions_depresi[currentQuestionIndex].value[
                      optionIndex
                    ]
                      ? "border-4" //active
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

            <br />
            <div className="flex justify-between">
              {currentQuestionIndex > 0 && (
                <button
                  onClick={handlePreviousQuestion}
                  className="text-white text-center text-3xl bg-rose-400 mt-20 px-4 py-4 rounded-3xl max-md:mt-10 max-md:px-5"
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
                className="text-white text-center text-3xl bg-rose-400 mt-20 px-4 py-4 rounded-3xl max-md:mt-10 max-md:px-5"
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
          <div>
            <div>
              <p className="text-black text-center text-3xl leading-10 -mr-5 max-md:max-w-full">
                Status anda saat ini menunjukkan
              </p>
              <div className={depressionDesign}>{depressionCategory}</div>
              <p className="text-black text-justify text-3xl leading-10 -mr-5 max-md:max-w-full">
                Kami menyarankan beberapa opsi yang dapat anda lakukan untuk
                mengembalikan mood anda
              </p>
              <div className="flex">
                <div className="w-7/12 p-4 bg-gray-200">
                  <ul className="list-disc text-black text-justify text-3xl self-stretch grow whitespace-nowrap max-md:max-w-full">
                    {depressionRecomendation.map((item) => (
                      <li key={item.id} className="py-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="darkgreen" //ganti dengan warna
                          className="w-7 h-8"
                        >
                          <path d="M10 1a6 6 0 00-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 00.572.729 6.016 6.016 0 002.856 0A.75.75 0 0012 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0010 1zM8.863 17.414a.75.75 0 00-.226 1.483 9.066 9.066 0 002.726 0 .75.75 0 00-.226-1.483 7.553 7.553 0 01-2.274 0z" />
                        </svg>
                        {item.saran}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-5/12 p-4">
                  <img
                    src="https://cdn.idntimes.com/content-images/community/2022/08/20220811-075709-875bf25e14e68fece8cbc1b552312854-7669eb6b17470bdc88586243cea394da.jpg"
                    alt="nama gambar"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DepressionTest;
