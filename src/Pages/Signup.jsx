import React from "react";
import Img from "../assets/loginSvg.svg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  return (
    <>
      <main>
        <div className="wrapper text-center grid items-center place-items-center">
          <img className="max-w-[700px] mb-[-40px]" src={Img} alt="" />
          <div>
            <h1 className="heading-main uppercase mb-10">Github User</h1>
            <button
              className="button-primary uppercase"
              onClick={loginWithRedirect}
            >
              Signup / Login
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
