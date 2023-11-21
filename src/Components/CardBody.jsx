import React from "react";
import { Link } from "react-router-dom";

const CardBody = ({ avatar, name, url }) => {
  return (
    <>
      <div className="flex flex-row gap-4 items-center justify-start">
        <div className="flex-shrink-0 flex-grow-0 ">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 object-cover rounded-full   "
          />
        </div>
        <div>
          <h2 className="text-xl text-black">{name}</h2>
          <Link to={url} className="text-primary text-gray-500 text-sm mt-1">
            {url}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardBody;
