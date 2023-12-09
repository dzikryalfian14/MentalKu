import React from "react";

const ButtonTemplate = (props) => {
  return (
    //if want to direct link to another page, add <Link>
    <button
      className="inline-block px-5 py-4 text-lg font-medium lg:flex lg:text-xl text-white hover:text-gray-600 bg-[#f87070] hover:bg-[#ffa0a0] rounded-full"
      style={{ width: "fit-content" }}
    >
      <p>{props.text}</p>
    </button>
  );
};

export default ButtonTemplate;
