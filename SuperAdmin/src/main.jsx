import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <h1>This is login page</h1>,
      },
      {
        path: "dashboard",
        element: <h1>This is dashboard page</h1>,
      },
      {
        path: "company",
        element: <h1>This is company page</h1>,
      },
      {
        path: "payment",
        element: <h1>This is payment page</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
