import React from "react";

const Error = ({ error }) => {
  return (
    <div className="bg-white p-10 mt-10 text-center text-3xl text-black font-bold flex flex-col items-center justify-center">
      <h2>{error || "There was an error!"}</h2>
    </div>
  );
};

export default Error;
