/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import quizData from "../../../../public/data/pertanyaan.json";
import recomendationData from "../../../../public/data/Recomendation.json";

import "../../../index.css";
import "../../../styles/Test.css";

// import 'tailwindcss/base';
// import 'tailwindcss/components';
// import 'tailwindcss/utilities';

const Result_Stress = () => {
    const [answers, setAnswers] = useState(
        new Array(quizData.questions_stress.length).fill(null),
    );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [stressCategory, setStressCategory] = useState("");
    const [stressRecomendation, setStressRecomendation] = useState([]);

    const [stressstressDesign, setStressDesign] = useState("");

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
        if (currentQuestionIndex === quizData.questions_stress.length - 1) {
            calculateScore();
        }
    };

    const calculateScore = () => {
        const totalScore = answers.reduce((acc, value) => acc + value, 0);

        let data = recomendationData;

        // logika penilaian stress
        if (totalScore >= 0 && totalScore <= 14) {
            setStressCategory("NORMAL");
            setStressRecomendation(data.normal_stress);
            setStressDesign(
                "text-white-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-teal-700 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
            );
        } else if (totalScore >= 15 && totalScore <= 18) {
            setStressCategory("RINGAN");
            setStressRecomendation(data.ringan_stress);
            setStressDesign(
                "text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-orange-300 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
            );
        } else if (totalScore >= 19 && totalScore <= 25) {
            setStressCategory("SEDANG");
            setStressRecomendation(data.sedang_stress);
            setStressDesign(
                "text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-orange-300 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
            );
        } else if (totalScore >= 26 && totalScore <= 33) {
            setStressCategory("PARAH");
            setStressRecomendation(data.parah_stress);
            setStressDesign(
                "text-teal-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-red-600 bg-opacity-60 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
            );
        } else if (totalScore > 34) {
            setStressCategory("SANGAT PARAH");
            setStressRecomendation(data["sangat-parah_stress"]);
            setStressDesign(
                "text-white-500 text-center text-6xl font-semibold whitespace-nowrap justify-center items-stretch bg-red-600 self-center mt-5 px-1 py-1.3 max-md:3 max-md:text-4xl max-md:mt-10",
            );
        }
    };

    let questions = [];
    questions = quizData.questions_stress;

    return (
        // Kuis
        <div className="m-10 border shadow-sm bg-white self-center flex w-full max-w-[1340px] flex-col justify-center items-center mt-16 mb-16 px-16 py-12 rounded-2xl border-solid border-rose-400 max-md:max-w-full max-md:my-10 max-md:px-20">
            {currentQuestionIndex < quizData.questions_stress.length && (
                <h2 className="p-4 justify-center text-black text-justify text-5xl self-stretch max-md:max-w-full max-md:text-4xl">
                    Pertanyaan {currentQuestionIndex + 1} dari{" "}
                    {quizData.questions_stress.length}
                </h2>
            )}
            <div className="bg-black self-stretch shrink-0 h-px mt-10 max-md:max-w-full" />
            {currentQuestionIndex < quizData.questions_stress.length && (
                <div key={quizData.questions_stress[currentQuestionIndex].id}>
                    <p className="pt-4 pb-8 justify-center text-rose-400 text-justify text-4xl self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                        {
                            quizData.questions_stress[currentQuestionIndex]
                                .question
                        }
                    </p>
                    <div className="self-stretch shrink-0 h-px mt-10 max-md:max-w-full" />
                    {quizData.questions_stress[
                        currentQuestionIndex
                    ].options.map((option, optionIndex) => (
                        <label
                            key={optionIndex}
                            className="w-32 rounded-md border-4 shadow-sm justify-center m-10 text-rose-400 text-justify text-2xl border shadow-sm bg-white grow items-stretch pl-9 pr-14 py-5 rounded-md border-solid border-rose-400 max-md:px-5 hover:bg-gray-100 active:border-rose-900"
                        >
                            <input
                                type="checkbox"
                                name={`question_${quizData.questions_stress[currentQuestionIndex].id}`}
                                value={
                                    quizData.questions_stress[
                                        currentQuestionIndex
                                    ].value[optionIndex]
                                }
                                checked={
                                    answers[currentQuestionIndex] ===
                                    quizData.questions_stress[
                                        currentQuestionIndex
                                    ].value[optionIndex]
                                }
                                onChange={() =>
                                    handleAnswerChange(
                                        currentQuestionIndex,
                                        quizData.questions_stress[
                                            currentQuestionIndex
                                        ].value[optionIndex],
                                    )
                                }
                                className="form-radio h-5 w-50 text-blue-500 transition duration-150 ease-in-out transform hover:scale-0 active:scale-0"
                            />
                            {option}
                        </label>
                    ))}
                    <button
                        onClick={handleNextQuestion}
                        className="justify-center text-black text-center text-3xl bg-emerald-100 self-center items-stretch m-10 px-16 py-6 rounded-3xl max-md:mt-10 max-md:px-5"
                    >
                        Next
                    </button>
                </div>
            )}

            {/* hasil */}
            {currentQuestionIndex === quizData.questions_stress.length && (
                <div>
                    <div>
                        <p className="text-black text-center text-3xl leading-10 -mr-5 max-md:max-w-full">
                            Status anda saat ini menunjukkan
                        </p>
                        <br></br>
                        <div className={stressDesign}>
                            {stressCategory}
                        </div>
                        <p className="text-black text-justify text-3xl leading-10 -mr-5 max-md:max-w-full">
                            Kami menyarankan beberapa opsi yang dapat anda
                            lakukan untuk mengembalikan mood anda
                        </p>
                        <div className="flex">
                            <div className="w-1/3 p-4 bg-blue-200">
                                <ul className="w-30 list-disc text-black text-justify text-3xl self-stretch grow whitespace-nowrap max-md:max-w-full">
                                    {stressRecomendation.map((item) => (
                                        <li key={item.id} className="py-4 flex">
                                            {item.saran}
                                        </li>
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

export default Result_Stress;
