import React from "react";

const Title = ({ title, highlightTitle, description }) => {
  return (
    <div className="flex flex-col gap-y-1 sm:gap-y-2 justify-center items-center">
      <h1 className="text-xl xsm:text-2xl sm:text-3xl md:text-4xl capitalize font-semibold text-center">
        {title} <span className="text-orange">{highlightTitle}</span>
      </h1>
      <p className="text-gray-400 font-normal text-xs sm:text-sm md:text-base text-center">
        {description}
      </p>
    </div>
  );
};

export default Title;
