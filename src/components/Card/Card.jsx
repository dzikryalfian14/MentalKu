import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Card = ({ imgSrc, title, noId, tags, linkedInURL, linkedInPhoto }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="flex flex-col items-center py-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={linkedInPhoto}
          alt={title}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {title}
        </h5>
        <span className="text-sm text-center italic text-gray-800">
          {noId}
        </span>
        <span className="text-sm text-center text-gray-500">
          {tags}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href={linkedInURL}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-gray-200"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
