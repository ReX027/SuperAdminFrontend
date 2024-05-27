import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CreateUser from "./pages/login/CreateUser/CreateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <h1>Choose a route</h1> },
      {
        path: "dashboard",
        element: <CreateUser />,
      },
      {
        path: "company",
        element: <h1>This is company page</h1>,
      },
      {
        path: "payment",
        element: <h1>This is payment page</h1>,
      },
      {
        path: "recruiter",
        element: <h1>This is Recruiter page</h1>,
      },
    ],
  },
  {
    path: "login",
    element: <h1>This is login page</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
