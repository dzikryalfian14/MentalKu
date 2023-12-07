/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import quizData from '../../../../../public/data/pertanyaan.json';
import recomendationData from '../../../../../public/data/Recomendation.json';

import '../../../../../src/index.css';
import '../../../../styles/Test.css';

// import 'tailwindcss/base';
// import 'tailwindcss/components';
// import 'tailwindcss/utilities';

const Result_Worry = () => {
  const [answers, setAnswers] = useState(new Array(quizData.questions_kecemasan.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [worryCategory, setWorryCategory] = useState("");
  const [worryRecomendation, setWorryRecomendation] = useState([]);

  
  const [worryDesign, setWorryDesign] = useState('');

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (answers[currentQuestionIndex] === null) {
      alert("Anda harus menjawab pertanyaan ini terlebih dahulu.");
      return;
    }

    // pindah ke pertanyaan berikutnya
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    // jika sudah menjawab semua pertanyaan, hitung skor
    if (currentQuestionIndex === quizData.questions_kecemasan.length - 1) {
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

  return (
    // Kuis
    <div className="m-10  border shadow-sm bg-white self-center flex-col justify-center items-center mt-10 mb-20 mx-20 px-12 py-10 rounded-2xl border-solid border-rose-400 max-md:max-w-full max-md:my-10 max-md:px-20">
      {currentQuestionIndex < quizData.questions_kecemasan.length && (
      <h2 className="p-4 justify-center text-black text-justify text-4xl self-stretch max-md:max-w-full max-md:text-4xl">
      Pertanyaan {currentQuestionIndex + 1} dari {quizData.questions_kecemasan.length}
      </h2>
    )}
    <div className="bg-black self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
      {currentQuestionIndex < quizData.questions_kecemasan.length && (
        <div key={quizData.questions_kecemasan[currentQuestionIndex].id}>
          <p className="pt-4 pb-8 justify-center text-rose-400 text-justify text-3xl self-stretch mt-10 max-md:max-w-full max-md:mt-10">{quizData.questions_depresi[currentQuestionIndex].question}</p>
          <div className="self-stretch shrink-0 h-px mt-10 max-md:max-w-full" />
          {quizData.questions_kecemasan[currentQuestionIndex].options.map((option, optionIndex) => (
            <label key={optionIndex} className="w-32 rounded-md border-4 shadow-sm justify-center m-10 text-rose-400 text-justify text-1xl border shadow-sm bg-white grow items-stretch pl-9 pr-14 py-5 rounded-md border-solid border-rose-400 max-md:px-5 hover:bg-gray-100 active:border-rose-900">
            <input 
                type="checkbox"
                name={`question_${quizData.questions_kecemasan[currentQuestionIndex].id}`}
                value={quizData.questions_kecemasan[currentQuestionIndex].value[optionIndex]}
                checked={answers[currentQuestionIndex] === quizData.questions_kecemasan[currentQuestionIndex].value[optionIndex]}
                onChange={() => handleAnswerChange(currentQuestionIndex, quizData.questions_kecemasan[currentQuestionIndex].value[optionIndex])}
                className="form-checkbox h-5 w-3 text-blue-500 transition duration-150 ease-in-out transform hover:scale-100"
                />
              {option}
            </label>
          ))}
          <br />
          <div class="flex justify-center">
          <button onClick={handleNextQuestion} className="text-black text-center text-3xl bg-emerald-100 mt-20 px-6 py-3 rounded-3xl max-md:mt-10 max-md:px-5">Next</button>
          </div>
          </div>
      )}
      
      {/* hasil */}
      {currentQuestionIndex === quizData.questions_kecemasan.length && (
        <div>
          <div>
            <p className="text-black text-center text-3xl leading-10 -mr-5 max-md:max-w-full">
              Status anda saat ini menunjukkan
            </p><br></br>
            <div className={worryDesign}>
              {worryCategory}
            </div>
            <p className="text-black text-justify text-3xl leading-10 -mr-5 max-md:max-w-full">
              Kami menyarankan beberapa opsi yang dapat anda lakukan untuk mengembalikan mood anda
            </p>
            <div className="flex">
              <div className="w-1/3 p-4 bg-blue-200">
                <ul className="w-30 list-disc text-black text-justify text-3xl self-stretch grow whitespace-nowrap max-md:max-w-full">
                  {worryRecomendation.map(item => (
                    <li key={item.id} className="py-4 flex">{item.saran}</li>
                  ))}
                </ul>
              </div>
              <div className="w-2/3 p-4">
                <img
                  src="https://cdn.idntimes.com/content-images/community/2022/08/20220811-075709-875bf25e14e68fece8cbc1b552312854-7669eb6b17470bdc88586243cea394da.jpg"
                  alt="alamat gambar"
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result_Worry;
