import React from "react";
import { useNavigate, redirect } from "react-router-dom";
import {
  Search,
  Cards,
  Repos,
  ProfileUser,
  Error,
  Loader,
} from "../Components";
import { useGlobalContext } from "../context";

const Dashboard = () => {
  const { errorVal, isLoadingData, isLoading, isAuthenticated, user } =
    useGlobalContext();

  const isUser = isAuthenticated && user;

  if (isUser) {
    return (
      <>
        <div className="bg-[#f1f5f8]  ">
          <div className="container">
            <Search />
            {errorVal.err ? (
              <Error error={errorVal.text} />
            ) : (
              <>
                <div>
                  {isLoadingData ? (
                    <Loader />
                  ) : (
                    <>
                      <div className="py-10">
                        <Cards />
                        <ProfileUser />
                      </div>
                      <div className="py-10">
                        <Repos />
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
};
export default Dashboard;
