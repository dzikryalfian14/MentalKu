import React from "react";
import Hero from "./SubComponents/Hero";
import Alur from "./SubComponents/Alur";
import DaftarTest from "./SubComponents/DaftarTest";
import Panduan from "./SubComponents/Panduan";
import Desclimer from "./SubComponents/Desclimer";

const TestMental = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div id="alur">
        <Alur />
      </div>
      <div id="daftartest">
        <DaftarTest />
      </div>
      <div id="panduan">
        <Panduan />
      </div>
      <div>
        <Desclimer />
      </div>
    </>
  );
};

export default TestMental;
