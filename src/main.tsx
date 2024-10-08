import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AddProduct from "./pages/AddProduct.tsx";
import Settings from "./pages/Settings.tsx";
import Login from "./pages/Login.tsx"
import ProductDetails from "./pages/ProductDetails.tsx";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext.tsx";

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
  {
    path:"/product/:productId",
    element:<ProductDetails/>
  }
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 
   <React.StrictMode>
   <ThemeProvider>
   <RouterProvider router={routes} />
   </ThemeProvider>
  </React.StrictMode>
 
);
