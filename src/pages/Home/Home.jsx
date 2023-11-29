import React from "react";
import Definition from "./SubComponents/Definition";
import Hero from "./SubComponents/Hero";
import Reason from "./SubComponents/Reason";
import Meaning from "../AboutUs/SubComponents/Meaning";

const Home = () => {
  return (
    <>
      <Hero />
      <Definition />
      <Meaning />
    </>
  );
};

export default Home;
