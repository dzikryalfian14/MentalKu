import React from "react";
import { Link } from "react-router-dom";

const DaftarCard = (props) => {
  return (
    <div class="max-w-sm bg-white rounded-lg shadow hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Link
        to={props.link}
        duration={500}
        className="flex items-center justify-center"
      >
        <img className="h-56 w-56 m-5 mt-7" src={props.img} alt="img" />
      </Link>
      <div class="p-5">
        <Link to={props.link}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-center">
            {props.title}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-justify mt-5 ">{props.para}</p>
        <Link
          to={props.way}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Baca Selengkapnya
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default DaftarCard;
