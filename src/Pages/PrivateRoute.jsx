import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const navigate = useNavigate();
  const isUser = isAuthenticated && user;
  if (!isUser) {
    // useEffect(() => {
    //   navigate("/login");
    // }, []);
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
