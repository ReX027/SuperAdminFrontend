import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import ProtectedRoute from "./pages/protected/index.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store.js";
import { Provider, useSelector } from "react-redux";
import { store } from "./app/store.js";
import CreateUser from "./pages/CreateUser/CreateUser.jsx";
import Company from "./pages/Company/Company.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import Recruiter from "./pages/Recruiter/Recruiter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <h1>This is home Route</h1>,
          },
          {
            path: "dashboard",
            element: <CreateUser />,
          },
          {
            path: "company",
            element: <Company />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
          {
            path: "recruiter",
            element: <Recruiter />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
