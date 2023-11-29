import React from "react";
import Card from "../../../components/Card/Card";
import teamData from "../../../../public/data/teamData.json";

const OurTeam = () => {
  return (
    <div className="p-10 lg:p-32" style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)" }}>
      <p className="justify-center leading-10 text-center font-semibold text-3xl pb-10">Our Teams</p>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {teamData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
