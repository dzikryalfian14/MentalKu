import React from "react";
import teamData from "../../../../public/data/teamData.json";
import { ProfileCard } from "../../../components/Card/ProfileCard";

const OurTeam = () => {
  return (
    <div
      className="p-10 lg:px-20"
    >
      <p className="justify-center text-center text-2xl lg:text-3xl font-black pb-6">
        Our Teams
      </p>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {teamData.map((card, index) => (
          <ProfileCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
