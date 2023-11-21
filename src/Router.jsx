import { createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  DashboardLayout,
  Error,
  Signup,
  Login,
  PrivateRoute,
} from "./Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Signup />,
    errorElement: <Error />,
  },
]);
