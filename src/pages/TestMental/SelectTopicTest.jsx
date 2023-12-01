import { useState } from "react";
// import Quiz from './Quiz';
import WorryTest from "./kecemasanPage/WorryTest";
import DepressionTest from "./depresiPage/DepressionTest";
import StressTest from "./stressPage/StressTest";

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
