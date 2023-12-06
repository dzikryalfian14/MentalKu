import React from "react";

const AlurCard = (props) => {
  return (
    <div className=" flex flex-col items-center py-5 px-5 w-fit lg:w-2/6 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <img
        className="items-center rounded-t-lg h-56 max-w-5 mb-3 "
        src={props.img}
        alt="img"
      />
      <div className=" p-5 space-y-3 rounded-b-lg">
        <h2 className=" text-xl font-medium text-center">
          <b>{props.title}</b>
        </h2>
        <p className=" text-lg text-center">{props.para}</p>
      </div>
    </div>
  );
};

export default AlurCard;
