import { useState } from "react";
// import Quiz from './Quiz';
import WorryTest from "./pages/TestMental/kecemasanPage/WorryTest.jsx";
import DepressionTest from "./pages/TestMental/depresiPage/DepressionTest.jsx";
import StressTest from "./pages/TestMental/stressPage/StressTest.jsx";

const SelectTopic = () => {
    const [selectCategory, setCategory] = useState(null);
    const [hasSelectedCategory, setHasSelectedCategory] = useState(false);

    const handleCategorySelect = (category) => {
        setCategory(category);
        setHasSelectedCategory(true);
    };

    const renderQuiz = () => {
        switch (selectCategory) {
            case "kecemasan":
                return <WorryTest />;
            case "depresi":
                return <DepressionTest />;
            case "stres":
                return <StressTest />;
            default:
                return null;
        }
    };

    return (
        <div>
            {!hasSelectedCategory && (
                <div>
                    <h1>Pilih Topik Tes</h1>
                    <button onClick={() => handleCategorySelect("kecemasan")}>
                        Tes Kecemasan
                    </button>
                    <button onClick={() => handleCategorySelect("depresi")}>
                        Tes Depresi
                    </button>
                    <button onClick={() => handleCategorySelect("stres")}>
                        Tes Stress
                    </button>
                </div>
            )}

            {selectCategory && hasSelectedCategory && renderQuiz()}
        </div>
    );
};

export default SelectTopic;
