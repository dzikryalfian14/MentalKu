import React from "react";

const ReasonCard = (props) => {
  return (
    <div className="flex flex-col align-middle items-center justify-between text-[#FF8080] bg-[#CDFAD5] border-2 border-lightText md:border-none w-full md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <h3 className="font-semibold text-lg text-center my-5">{props.title}</h3>
    </div>
  );
};

export default ReasonCard;
