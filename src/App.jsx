import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading/Loading";

const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const TesMental = lazy(() => import("./pages/TestMental"));
const Depresi = lazy(() => import("./pages/Depresi"));
const Stress = lazy(() => import("./pages/Stress"));
const Kecemasan = lazy(() => import("./pages/Kecemasan"));
const DepresiTest = lazy(
  () => import("./pages/TestMental/Kategori/depresiPage/DepressionTest"),
);
const KecemasanTest = lazy(
  () => import("./pages/TestMental/Kategori/kecemasanPage/WorryTest"),
);
const StressTest = lazy(
  () => import("./pages/TestMental/Kategori/stressPage/StressTest"),
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<AboutUs />} />
          <Route path="/tes-kesehatan-mental" element={<TesMental />} />
          <Route path="/tes-kesehatan-mental/depresi" element={<Depresi />} />
          <Route path="/tes-kesehatan-mental/stress" element={<Stress />} />
          <Route
            path="/tes-kesehatan-mental/kecemasan"
            element={<Kecemasan />}
          />
          <Route
            path="/tes-kesehatan-mental/tes-depresi"
            element={<DepresiTest />}
          />
          <Route
            path="/tes-kesehatan-mental/tes-kecemasan"
            element={<KecemasanTest />}
          />
          <Route
            path="/tes-kesehatan-mental/tes-stress"
            element={<StressTest />}
          />
          <Route
            path="/pageTemplate"
            element={<pageTemplate />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
