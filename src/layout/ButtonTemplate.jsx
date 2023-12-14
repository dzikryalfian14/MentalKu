import React from "react";

const ButtonTemplate = (props) => {
  return (
    //if want to direct link to another page, add <Link>
    <div
      className="inline-block px-4 py-3 text-lg font-medium lg:flex lg:text-lg text-white hover:text-gray-600 bg-[#f87070] hover:bg-[#ffa0a0] rounded-full"
      style={{ width: "fit-content" }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default ButtonTemplate;
