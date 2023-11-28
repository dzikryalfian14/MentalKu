/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import quizData from '../../../public/data/pertanyaan.json';
import recomendationData from '../../../public/data/Recomendation.json';

const Result_Worry = () => {
  const [answers, setAnswers] = useState(new Array(quizData.questions_kecemasan.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [worryCategory, setWorryCategory] = useState("");
  const [worryRecomendation, setWorryRecomendation] = useState([]);

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
    if (totalScore >= 0 && totalScore <= 9) {
      setWorryCategory("NORMAL");
      setWorryRecomendation(data.normal_kecemasan);
    } else if (totalScore >= 10 && totalScore <= 13) {
      setWorryCategory("RINGAN");
      setWorryRecomendation(data.ringan_kecemasan);
    } else if (totalScore >= 14 && totalScore <= 20) {
      setWorryCategory("SEDANG");
      setWorryRecomendation(data.sedang_kecemasan);
    } else if (totalScore >= 21 && totalScore <= 27) {
      setWorryCategory("PARAH");
      setWorryRecomendation(data.parah_kecemasan);
    } else if (totalScore > 28) {
      setWorryCategory("SANGAT PARAH");
      setWorryRecomendation(data['sangat-parah_kecemasan']); // Perhatikan penggunaan tanda minus
    }
  };

  return (
    <div>
      <h1>Tes Kecemasan</h1>
      {currentQuestionIndex < quizData.questions_kecemasan.length && (
        <div key={quizData.questions_kecemasan[currentQuestionIndex].id}>
          <p>{quizData.questions_kecemasan[currentQuestionIndex].question}</p>
          {quizData.questions_kecemasan[currentQuestionIndex].options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                name={`question_${quizData.questions_kecemasan[currentQuestionIndex].id}`}
                value={quizData.questions_kecemasan[currentQuestionIndex].value[optionIndex]}
                checked={answers[currentQuestionIndex] === quizData.questions_kecemasan[currentQuestionIndex].value[optionIndex]}
                onChange={() => handleAnswerChange(currentQuestionIndex, quizData.questions_kecemasan[currentQuestionIndex].value[optionIndex])}
              />
              {option}
            </label>
          ))}
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
      
      {currentQuestionIndex === quizData.questions_kecemasan.length && (
        <div className="result">
          <div>
            <p className="text-black text-center text-3xl leading-10 -mr-5 max-md:max-w-full">
              Status anda saat ini menunjukkan
            </p><br></br>
            <div className="text-center text-6xl font-semibold leading-[96px] whitespace-nowrap justify-center items-center bg-teal-700 bg-opacity-10 self-center w-[534px] max-w-full mt-9 px-5 py-2.5 max-md:text-4xl max-md:leading-[66px]">
              {worryCategory}
            </div>
            <p className="text-black text-justify text-3xl leading-10 -mr-5 max-md:max-w-full">
              Kami menyarankan beberapa opsi yang dapat anda lakukan untuk mengembalikan mood anda
            </p>
            <div className="flex">
              <div className="w-1/3 p-4 bg-blue-200">
                <ul>
                  {worryRecomendation.map(item => (
                    <li key={item.id}>{item.saran}</li>
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
