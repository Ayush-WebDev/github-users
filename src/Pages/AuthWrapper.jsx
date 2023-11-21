import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Loader } from "../Components";

const AuthWrapper = ({ children }) => {
  const { error, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return (
      <>
        <div>Oops...{error.message}</div>
      </>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
