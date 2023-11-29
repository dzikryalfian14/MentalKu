import React, { Suspense, lazy, startTransition } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const TesMental = lazy(() => import("./pages/TestMental/TesMental"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />} />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/tentang-kami"
          element={
            <React.Suspense fallback={<Loading />}>
              <AboutUs />
            </React.Suspense>
          }
        />
        <Route
          path="/tes-kesehatan-mental"
          element={
            <React.Suspense fallback={<Loading />}>
              <TesMental />
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