import React from "react";

const ReasonCard = (props) => {
  return (
    <div className="align-middle items-center justify-between text-center bg-[#CDFAD5] border-2 border-lightText md:border-none w-full md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <p className="font-semibold text-lg my-5">{props.title}</p>
    </div>
  );
};

export default ReasonCard;
