/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import quizData from '../../../public/data/pertanyaan.json';
import recomendationData from '../../../public/data/Recomendation.json';

const Result_Depression = () => {
  const [answers, setAnswers] = useState(new Array(quizData.questions_depresi.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [depressionCategory, setDepressionCategory] = useState("");
  const [depressionRecomendation, setDepressionRecomendation] = useState([]);

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
    if (currentQuestionIndex === quizData.questions_depresi.length - 1) {
      calculateScore();
    }
  };

  const calculateScore = () => {
    const totalScore = answers.reduce((acc, value) => acc + value, 0);

    let data = recomendationData;

    // logika penilaian depresi
    if (totalScore >= 0 && totalScore <= 9) {
      setDepressionCategory("NORMAL");
      setDepressionRecomendation(data.normal_depresi);
    } else if (totalScore >= 10 && totalScore <= 13) {
      setDepressionCategory("RINGAN");
      setDepressionRecomendation(data.ringan_depresi);
    } else if (totalScore >= 14 && totalScore <= 20) {
      setDepressionCategory("SEDANG");
      setDepressionRecomendation(data.sedang_depresi);
    } else if (totalScore >= 21 && totalScore <= 27) {
      setDepressionCategory("PARAH");
      setDepressionRecomendation(data.parah_depresi);
    } else if (totalScore > 28) {
      setDepressionCategory("SANGAT PARAH");
      setDepressionRecomendation(data['sangat-parah_depresi']); // Perhatikan penggunaan tanda minus
    }
  };

  return (
    <div>
      <h1>Tes Depresi</h1>
      {currentQuestionIndex < quizData.questions_depresi.length && (
        <div key={quizData.questions_depresi[currentQuestionIndex].id}>
          <p>{quizData.questions_depresi[currentQuestionIndex].question}</p>
          {quizData.questions_depresi[currentQuestionIndex].options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                name={`question_${quizData.questions_depresi[currentQuestionIndex].id}`}
                value={quizData.questions_depresi[currentQuestionIndex].value[optionIndex]}
                checked={answers[currentQuestionIndex] === quizData.questions_depresi[currentQuestionIndex].value[optionIndex]}
                onChange={() => handleAnswerChange(currentQuestionIndex, quizData.questions_depresi[currentQuestionIndex].value[optionIndex])}
              />
              {option}
            </label>
          ))}
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
      
      {currentQuestionIndex === quizData.questions_depresi.length && (
        <div className="result">
          <div>
            <p className="text-black text-center text-3xl leading-10 -mr-5 max-md:max-w-full">
              Status anda saat ini menunjukkan
            </p><br></br>
            <div className="text-center text-6xl font-semibold leading-[96px] whitespace-nowrap justify-center items-center bg-teal-700 bg-opacity-10 self-center w-[534px] max-w-full mt-9 px-5 py-2.5 max-md:text-4xl max-md:leading-[66px]">
              {depressionCategory}
            </div>
            <p className="text-black text-justify text-3xl leading-10 -mr-5 max-md:max-w-full">
              Kami menyarankan beberapa opsi yang dapat anda lakukan untuk mengembalikan mood anda
            </p>
            <div className="flex">
              <div className="flex w-[26px] shrink-0 h-[27px] flex-col my-auto rounded-[50%]">
                <ul>
                  {depressionRecomendation.map(item => (
                    <li key={item.id}>{item.saran}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.idntimes.com/content-images/community/2022/08/20220811-075709-875bf25e14e68fece8cbc1b552312854-7669eb6b17470bdc88586243cea394da.jpg"
                  alt="alamat gambar"
                  className="aspect-[1.32] object-contain object-center w-full shadow-sm overflow-hidden grow mt-1 max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result_Depression;
