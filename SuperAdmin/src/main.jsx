import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Login from "./pages/login";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store.js";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
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
