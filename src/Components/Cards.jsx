import React from "react";
import CardContainer from "./CardContainer";
import { FaBookBookmark } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";
import { useGlobalContext } from "../context";
const Cards = () => {
  const {
    githubUser: {
      following,
      followers,
      public_repos: repos,
      public_gists: gists,
    },
  } = useGlobalContext();

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  py-10">
        <CardContainer
          color="bg-[#ffe0f0]"
          textColor="text-[#da4a91]"
          icon={<FaBookBookmark />}
          text={"Repos"}
          val={repos}
        />
        <CardContainer
          color="bg-[#e0fcff]"
          textColor="text-[#2caeba]"
          icon={<GoPeople />}
          text={"Followers"}
          val={followers}
        />
        <CardContainer
          color="bg-[#e6e6ff]"
          textColor="text-[#5d55fa]"
          icon={<MdOutlinePersonAddAlt />}
          text={"Following"}
          val={following}
        />
        <CardContainer
          color="bg-[#fffbea]"
          textColor="text-[#f0b429]"
          icon={<IoCodeSlashOutline />}
          text={"Gists"}
          val={gists}
        />
      </div>
    </>
  );
};

export default Cards;
