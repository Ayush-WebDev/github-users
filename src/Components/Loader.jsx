import React from "react";
import { TbLoader3 } from "react-icons/tb";

const Loader = () => {
  return (
    <>
      <div className="loader flex flex-col min-h-screen items-center justify-center">
        <TbLoader3 className="text-6xl w-20 h-20 text-blue-700 " />
      </div>
    </>
  );
};

export default Loader;
