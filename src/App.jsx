import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home/Hero"));
const Definition = lazy(() => import("./pages/Home/Definition"));
const Reason = lazy(() => import("./pages/Home/Reason"));
const About = lazy(() => import("./pages/About/About"));
const TesMental = lazy(() => import("./pages/TestMental/Main"));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>} />
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <Definition />
                            <Reason />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/testmental" element={<TesMental />} />
            </Routes>
            <Footer />
            <Suspense />
        </Router>
    );
};

export default App;
