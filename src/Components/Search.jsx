import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { customFetch } from "../utils";
import { useGlobalContext } from "../context";
const Search = () => {
  const [errMsg, setErrMsg] = useState(false);
  const { searchUser, setSearchUser, searchContent } = useGlobalContext();
  const [requests, setRequest] = useState({
    req: "60",
    total: "60",
  });
  const checkRequest = async () => {
    try {
      const response = await customFetch.get("/rate_limit");
      const data = response.data;
      setRequest(() => {
        return { req: data.rate.remaining, total: data.rate.limit };
      });
    } catch (errror) {}
  };
  useEffect(() => {
    checkRequest();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchUser) {
      setErrMsg(true);
    }
    if (searchUser.length != 0 && searchUser) {
      setErrMsg(false);
      searchContent(searchUser);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <form className="w-full lg:w-[78%]" onSubmit={handleSubmit}>
          {errMsg && (
            <div className=" text-red-500 mb-2 text-lg">
              <p>No username entered!</p>
            </div>
          )}
          <div className="relative ">
            <input
              className="w-full rounded-lg bg-white px-4 py-4"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              onChange={(event) => {
                setSearchUser(event.target.value);
              }}
            />
            <button
              type="submit"
              className="absolute top-0 bottom-0 text-lg right-3 h-[40px] my-auto text-white px-5 bg-blue-700 rounded-lg"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex flex-row text-3xl flex-nowrap gap-x-1 primary-text">
          <h2 className=" ">Requests:</h2>
          <h2 className="flex flex-nowrap">
            {requests.req} <span className="mx-2">/</span> {requests.total}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Search;
