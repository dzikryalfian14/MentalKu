import React from "react";
import Hero from "./stressPage/hero";
import Penyebab from "./stressPage/penyebab";
import Dampak from "./stressPage/dampak";
import Tes from "./stressPage/tes";

const Stress = () => {
  return (
    <div id="stress">
      <Hero />
      <Penyebab />
      <Dampak />
      <Tes />
    </div>
  );
};

export default Stress;
