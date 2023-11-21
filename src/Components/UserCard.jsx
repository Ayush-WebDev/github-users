import React from "react";
import { useGlobalContext } from "../context";
import { IoLocation } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";
import { MdInsertLink } from "react-icons/md";

import { Link } from "react-router-dom";
const UserCard = () => {
  const { githubUser } = useGlobalContext();

  const {
    avatar_url,
    bio,
    blog,
    company,
    location,
    name,
    twitter_username,
    url,
    html_url,
  } = githubUser;
  return (
    <>
      <div className="">
        <div className="bg-white text-lg px-3 py-1 inline-block text-gray-500 text-center">
          <h4>User</h4>
        </div>
        <div className="px-10 py-8 bg-white ">
          <div className=" flex flex-col gap-8 sm:flex-row justify-between items-center mb-10">
            <div className="flex flex-row gap-4 items-center justify-center">
              <img
                src={avatar_url}
                alt={name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl text-black font-bold">
                  {name || "Not available"}
                </h2>
                <p className="text-primary text-sm mt-1">
                  {" "}
                  {`@${twitter_username} `}
                </p>
              </div>
            </div>
            <Link
              to={html_url}
              target="_blank"
              className="text-lg px-2 py-[6px] w-full max-w-[100px] rounded-[60px] flex flex-row items-center justify-center border-sold border-[1px] border-green-600 text-green-600"
            >
              Follow
            </Link>
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <h2 className="text-lg text-black ">{bio || "Not available"}</h2>
            <div className="flex text-lg text-gray-500 flex-row gap-3 justify-start items-center">
              <BiBuildings className="text-gray-500 w-6" />
              <h4>{company || "Not available"}</h4>
            </div>
            <div className="flex text-lg text-gray-500 flex-row gap-3 justify-start items-center">
              <IoLocation className="text-gray-500 w-6" />
              <h4>{location || "Not available"}</h4>
            </div>
            <div className="flex text-lg text-gray-500 flex-row gap-3 justify-start items-center">
              <MdInsertLink className="text-gray-500 w-6" />
              <Link className="text-green-400" to={blog} target={"_blank"}>
                {blog || "Not available"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
