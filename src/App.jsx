import React, { Suspense, lazy, startTransition } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const TesMental = lazy(() => import("./pages/TestMental/MentalTest"));
const TesStress = lazy(() => import("./pages/TestMental/stressPage/stressTests"));

const App = () => {
    return (
        <Router>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Home />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <About />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/testmental"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <TesMental />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/stressTest"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <TesStress />
                        </React.Suspense>
                    }
                />

            </Routes>
            <Footer />
            <Suspense />
        </Router>
    );
};

export default App;
