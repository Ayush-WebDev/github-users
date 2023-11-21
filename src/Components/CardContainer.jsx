import React from "react";

const CardContainer = ({ icon, text, val, color, textColor }) => {
  return (
    <>
      <div className="rounded-lg px-10 py-5 flex flex-row items-center gap-10 bg-white">
        <div
          className={`px-3 py-3 text-xl ${textColor} rounded-full ${color} flex flex-col items-center justify-center`}
        >
          {icon}
        </div>
        <div className="flex flex-col text-left justify-start">
          <h2 className="text-2xl font-bold text-black">{val}</h2>
          <h4 className="text-lg primary-text">{text}</h4>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
