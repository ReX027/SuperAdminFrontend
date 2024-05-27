import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import ProtectedRoute from "./pages/protected/index.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store.js";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
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
    ],
  },
  {
    path: "login",
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
