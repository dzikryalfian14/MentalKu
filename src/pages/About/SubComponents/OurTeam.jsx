import React from "react";
import Card from "../../../components/Card/Card";
import teamData from "../../../../public/data/teamData.json";

const OurTeam = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {teamData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default OurTeam;
