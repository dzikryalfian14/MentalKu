import React from "react";

const AlurCard = (props) => {
  return (
    <div className="flex flex-col items-center py-5 px-5 lg:py-8 lg:px-12 w-fit lg:w-2/6 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <img
        className="items-center rounded-t-lg max-h-56 h-auto max-w-5 mb-6"
        src={props.img}
        alt="img"
      />
      <div className="space-y-3 rounded-b-lg">
        <h2 className="text-xl font-medium text-center">
          <b>{props.title}</b>
        </h2>
        <p className="text-lg text-center leading-loose">{props.para}</p>
      </div>
    </div>
  );
};

export default AlurCard;
