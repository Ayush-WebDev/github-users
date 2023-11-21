import React from "react";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import AuthWrapper from "./Pages/AuthWrapper";
const App = () => {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
};

export default App;
