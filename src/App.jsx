import React, { Suspense, lazy, startTransition } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./component/Home/Home"));
const AboutUs = lazy(() => import("./component/AboutUs/AboutUs"));
const TesMental = lazy(() => import("./component/TestMental/TesMental"));

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
          path="/about"
          element={
            <React.Suspense fallback={<Loading />}>
              <AboutUs />
            </React.Suspense>
          }
        />
        <Route
          path="/testmental"
          element={
            <React.Suspense fallback={<Loading />}>
              <TesMental />
            </React.Suspense>
          }
        />
        <Route
          path="/topik1"
          element={
            <React.Suspense fallback={<Loading />}>
              <TesMental />
            </React.Suspense>
          }
        />
        <Route
          path="/topik2"
          element={
            <React.Suspense fallback={<Loading />}>
              <TesMental />
            </React.Suspense>
          }
        />
        <Route
          path="/topik3"
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