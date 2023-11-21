import React from "react";
import notFound from "../assets/not-found (2).svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="wrapper grid place-items-center text-center">
        <div>
          <img src={notFound} alt="not found" className="max-w-[600px] mb-10" />

          <p className="text-2xl font-medium text-black mb-10">
            Sorry we cannot find the page you're looking for
          </p>
          <Link className="button-primary " to="/">
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
