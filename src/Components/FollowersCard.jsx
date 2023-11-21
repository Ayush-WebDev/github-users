import React from "react";
import { useGlobalContext } from "../context";
import CardBody from "./CardBody";
const FollowersCard = () => {
  const { followerUser } = useGlobalContext();

  return (
    <>
      <div>
        <div className="bg-white text-lg px-3 py-1 inline-block text-gray-500 text-center">
          <h4>Followers</h4>
        </div>
        <div className="bg-white py-8 px-10 h-full grid grid-cols-1 gap-5 overflow-auto max-h-[320px]">
          {followerUser.length > 1 ? (
            followerUser?.map((follower, index) => {
              const { avatar_url, html_url, login } = follower;
              return (
                <CardBody
                  key={index}
                  name={login}
                  avatar={avatar_url}
                  url={html_url}
                />
              );
            })
          ) : (
            <h2 className="text-3xl font-medium pt-5">Data not available</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default FollowersCard;
