import React from "react";
import UserCard from "./UserCard";
import FollowersCard from "./FollowersCard";
const ProfileUser = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <UserCard />
        <FollowersCard />
      </div>
    </>
  );
};

export default ProfileUser;
