import React from "react";
import Jumbotron from "./SubComponents/Jumbotron";
import VisiMisi from "./SubComponents/VisiMisi";
import Testimoni from "./SubComponents/Testimoni";
import OurTeam from "./SubComponents/OurTeam";

const About = () => {
  return (
    <>
      <div id="jumbotron">
        <Jumbotron />
      </div>
      <div id="visiMisi">
        <VisiMisi />
      </div>
      <div id="testimoni">
        <Testimoni />
      </div>
      <div id="ourTeam">
        <OurTeam />
      </div>
    </>
  );
};

export default About;
