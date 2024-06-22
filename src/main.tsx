import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AddProduct from "./pages/AddProduct.tsx";
import Settings from "./pages/Settings.tsx";
import Login from "./pages/Login.tsx"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:"/home",
    element: <Home />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
