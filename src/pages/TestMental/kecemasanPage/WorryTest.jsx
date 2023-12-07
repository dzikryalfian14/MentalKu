/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import quizData from "../../../../../public/data/pertanyaan.json";
import recomendationData from "../../../../../public/data/Recomendation.json";

import Modal from "react-modal";
Modal.setAppElement("#root");

const WorryTest = () => {
  const [answers, setAnswers] = useState(
    new Array(quizData.questions_kecemasan.length).fill(null),
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [worryCategory, setWorryCategory] = useState("");
  const [worryRecomendation, setWorryRecomendation] = useState([]);

  const [worryDesign, setWorryDesign] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNext, setIsNext] = useState(``);

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNextQuestion = () => {
    if (answers[currentQuestionIndex] === null) {
      setIsModalOpen(true);
      return;
    }

    // pindah ke pertanyaan berikutnya
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    if (currentQuestionIndex >= 0) {
      setIsNext(``);
    }

    // jika sudah menjawab semua pertanyaan, hitung skor
    if (currentQuestionIndex === quizData.questions_depresi.length - 2) {
      setIsNext(`Submit`);
      calculateScore();
    }
  };

  const calculateScore = () => {
    const totalScore = answers.reduce((acc, value) => acc + value, 0);

    let data = recomendationData;

   // logika penilaian kecemasan
   if (totalScore >= 0 && totalScore <= 7) {
    setWorryCategory("NORMAL");
    setWorryRecomendation(data.normal_kecemasan);
    setWorryDesign("text-white-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-teal-700 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10");
  } else if (totalScore >= 8 && totalScore <= 9) {
    setWorryCategory("RINGAN");
    setWorryRecomendation(data.ringan_kecemasan);
    setWorryDesign("text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-orange-300 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10");
  } else if (totalScore >= 10 && totalScore <= 14) {
    setWorryCategory("SEDANG");
    setWorryRecomendation(data.sedang_kecemasan);
    setWorryDesign("text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-orange-300 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10");
  } else if (totalScore >= 15 && totalScore <= 19) {
    setWorryCategory("PARAH");
    setWorryRecomendation(data.parah_kecemasan);
    setWorryDesign("text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-red-600 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10");
  } else if (totalScore > 20) {
    setWorryCategory("SANGAT PARAH");
    setWorryRecomendation(data['sangat-parah_kecemasan']);
    setWorryDesign("text-white-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-red-600 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10");
  }
  };

  let questions = [];
  questions = quizData.questions_kecemasan;

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
      overflow: hidden;
      white-space: wrap;
      animation: typing 2s steps(20, end);
  }

  @media only screen and (min-width: 1200px){
    .typing-animation{
      white-space: nowrap;
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
        {currentQuestionIndex < quizData.questions_kecemasan.length && (
          <h2 className="p-4 justify-center font-extrabold text-black text-justify text-4xl self-stretch max-md:max-w-full max-md:text-4xl">
            Pertanyaan {currentQuestionIndex + 1} dari{" "}
            {quizData.questions_kecemasan.length}
          </h2>
        )}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
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
              onClick={() => setIsModalOpen(false)}
            >
              Tutup
            </button>
          </div>
        </Modal>

        <div className="bg-rose-400 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
        {currentQuestionIndex < quizData.questions_kecemasan.length && (
          <div key={quizData.questions_kecemasan[currentQuestionIndex].id}>
            <p className="typing-animation text-base sm:text-2xl xl:text-3xl pt-4 pb-8 text-left font-bold text-rose-600 self-stretch mt-10 max-md:max-w-full max-md:mt-10">
              {quizData.questions_kecemasan[currentQuestionIndex].question}
            </p>

            {quizData.questions_kecemasan[currentQuestionIndex].options.map(
              (option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`w-64 h-17 rounded-md border shadow-sm justify-center m-5 text-rose-600 text-justify text-2xl border shadow-sm bg-white grow items-stretch px-8 py-5 rounded-md border-solid border-rose-400 max-md:px-10 ${
                    answers[currentQuestionIndex] === quizData.questions_kecemasan[currentQuestionIndex].value[
                      optionIndex
                    ]
                      ? "border-4" //active
                      : ""
                  }`}
                  onClick={() =>
                    handleAnswerChange(
                      currentQuestionIndex,
                      quizData.questions_kecemasan[currentQuestionIndex].value[
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
              >{isNext}
                <svg className="w-6 h-6 text-white-800 dark:text-white"aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* hasil */}
        {currentQuestionIndex === quizData.questions_kecemasan.length && (
          <div>
            <div>
              <p className="text-black text-center text-3xl leading-10 -mr-5 max-md:max-w-full">
                Status anda saat ini menunjukkan
              </p>
              <div className={worryDesign}>{worryCategory}</div>
              <p className="text-black text-justify text-3xl leading-10 -mr-5 max-md:max-w-full">
                Kami menyarankan beberapa opsi yang dapat anda lakukan untuk
                mengembalikan mood anda
              </p>
              <div className="flex">
                <div className="w-7/12 p-4 bg-gray-200">
                  <ul className="list-disc text-black text-justify text-3xl self-stretch grow whitespace-nowrap max-md:max-w-full">
                    {worryRecomendation.map((item) => (
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

export default WorryTest;
