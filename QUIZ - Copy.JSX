/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import quizData from '../public/data/pertanyaan.json';
import recomendationData from '../public/data/Recomendation.json';

const Quiz = () => {
  const [category, setCategory] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false); // State untuk menampilkan hasil
  const [categoryResult, setCategoryResult] = useState("");
  const [recomendation, setRecomendation] = useState([]);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setAnswers([]);
    setCurrentQuestion(0); // Reset ke pertanyaan pertama
    setShowResult(false); // Set hasil menjadi tidak ditampilkan
  };

  const handleAnswerChange = (e) => {
    const index = parseInt(e.target.name);
    const value = parseInt(e.target.value);

    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleFinalSubmit = () => {
    if (!category || answers.length === 0) {
      console.log('Pilih kategori dan isi semua jawaban terlebih dahulu.');
      return;
    }

    // Lakukan perhitungan berdasarkan kategori yang dipilih
    let thresholds = [];
    let testCase = '';
    switch (category) {
      case 'depresi':
        thresholds = [0, 9, 13, 20, 28];
        testCase = 'depresi';
        break;
      case 'kecemasan':
        thresholds = [0, 7, 9, 14, 20];
        testCase = 'kecemasan';
        break;
      case 'stres':
        thresholds = [0, 14, 18, 20, 35];
        testCase = 'stress';
        break;
      default:
        break;
    }

    const result = calculateResult(answers, thresholds);
    setShowResult(true); // Set hasil untuk ditampilkan
    setCategoryResult(result); // Mengatur hasil kategori
    return result; // Mengembalikan hasil untuk dirender
  };

  const calculateResult = (answers, thresholds) => {
    const totalScore = answers.reduce((acc, answer) => acc + answer, 0);

    let data = recomendationData;

    if (totalScore >= thresholds[4]) {
      setCategoryResult("Sangat Parah");
      setRecomendation(data[`sangat-parah_${testCase}`]);
      return "Sangat Parah";
    } else if (totalScore >= thresholds[3]) {
      setCategoryResult("Parah");
      setRecomendation(data[`parah_${testCase}`]);
      return "Parah";
    } else if (totalScore >= thresholds[2]) {
      setCategoryResult("Sedang");
      setRecomendation(data[`sedang_${testCase}`]);
      return "Sedang";
    } else if (totalScore >= thresholds[1]) {
      setCategoryResult("Ringan");
      setRecomendation(data[`ringan_${testCase}`]);
      return "Ringan";
    } else {
      setCategoryResult("Normal");
      setRecomendation(data[`normal_${testCase}`]);
      return "Normal";
    }
  };

  const showFinalResult = () => {
    return (
      <div>
        <h2>Hasil {category}: {categoryResult}</h2>
        <ul>
          {recomendation.map(item => (
            <li key={item.id}>{item.saran}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderQuestions = (selectedCategory) => {
    let questions = [];
    switch (selectedCategory) {
      case 'depresi':
        questions = quizData.questions_depresi;
        break;
      case 'kecemasan':
        questions = quizData.questions_kecemasan;
        break;
      case 'stres':
        questions = quizData.questions_stress;
        break;
      default:
        break;
    }

    const currentQuestionData = questions[currentQuestion];

    return (
      <div>
        <h2>Pertanyaan {currentQuestion + 1} dari {questions.length}</h2>
        <p>{currentQuestionData.question}</p>
        {currentQuestionData.options.map((option, optionIndex) => (
          <div key={optionIndex}>
            <input
              type="radio"
              id={`option_${currentQuestion}_${optionIndex}`}
              name={currentQuestion.toString()}
              value={currentQuestionData.value[optionIndex]}
              onChange={handleAnswerChange}
              checked={answers[currentQuestion] === currentQuestionData.value[optionIndex]}
            />
            <label htmlFor={`option_${currentQuestion}_${optionIndex}`}>{option}</label>
          </div>
        ))}
        <button disabled={currentQuestion === 0} onClick={handlePreviousQuestion}>Sebelumnya</button>
        <button disabled={currentQuestion === questions.length - 1} onClick={handleNextQuestion}>Selanjutnya</button>
        {currentQuestion === questions.length - 1 && (
          <button onClick={handleFinalSubmit}>Submit</button>
        )}
      </div>
    );
  };

  return (
    <div>
      <h2>Pilih Kategori</h2>
      <button onClick={() => handleCategorySelect('depresi')}>Depresi</button>
      <button onClick={() => handleCategorySelect('kecemasan')}>Kecemasan</button>
      <button onClick={() => handleCategorySelect('stres')}>Stres</button>
      {category && renderQuestions(category)}
      {showResult && category && (
        <div>{showFinalResult()}</div>
      )}
    </div>
  );
};

export default Quiz;