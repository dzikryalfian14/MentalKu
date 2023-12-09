import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DaftarCard = (props) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-5 px-5 lg:py-8 lg:px-12">
      <Link
        to={props.link}
        duration={500}
        className="flex items-center justify-center"
      >
        <img
          className="h-auto max-h-56 w-auto max-w-56 mb-6"
          src={props.img}
          alt="img"
        />
      </Link>
      <div className="">
        <Link to={props.link}>
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-center">
            {props.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-justify leading-loose">
          {props.para}
        </p>
        <Link
          to={props.way}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Baca Selengkapnya
          <FaLongArrowAltRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default DaftarCard;
