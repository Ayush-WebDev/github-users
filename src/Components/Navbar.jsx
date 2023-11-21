import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <>
      <div className="bg-white py-8 px-8 grid place-items-center shadow-lg">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-center items-center">
          {isUser && user.picture && (
            <>
              <div className=" rounded-full w-12   h-12 flex justify-center items-center flex-shrink-0 flex-grow-0">
                <img src={user.picture} alt={user.name} />
              </div>
              <div className="text-xl text-black ml-3 mr-2">Welcome,</div>
              <h2 className="font-bold capitalize text-xl">{user.name}</h2>
              <button
                className="text-xl  sm:ml-10 capitalize text-[#617d98]"
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
