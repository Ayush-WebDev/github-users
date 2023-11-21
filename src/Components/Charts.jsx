import React from "react";

const Charts = ({ title, chart }) => {
  return (
    <>
      <div className="bg-white w-full px-10 py-10">
        <h3 className="text-xl text-black font-medium">{title}</h3>
        <div className="mt-5">{chart}</div>
      </div>
    </>
  );
};

export default Charts;
