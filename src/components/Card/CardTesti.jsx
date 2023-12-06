import React from "react";

const CardTesti = ({ image, name, location, quote }) => {
  return (
    <div className="w-full max-w-sm bg-[#FFDCB0] border border-gray-400 rounded-xl hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-80">
      <div className="flex flex-col items-center py-5 px-5">
        <img
          src={image}
          alt={name}
          className="h-auto max-w-5 mb-3 rounded-full shadow-lg"
        />
        <div className="mt-2 text-center">
          <p className="font-bold text-lg">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
          <p className="italic text-xs text-gray-800">"{quote}"</p>
        </div>
      </div>
    </div>
  );
};

export default CardTesti;
