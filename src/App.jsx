import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const TesMental = lazy(() => import('./pages/TesMental/TesMental'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/testmental" element={<TesMental />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
