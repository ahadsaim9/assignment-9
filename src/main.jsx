import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import ErrorePage from "./components/Home/ErrorePage/ErrorePage";
import Blog from "./components/Blog/Blog";
import ApplyCart from "./components/ApplyCart/ApplyCart";
import Contacts from "./components/Contacts/Contacts";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorePage></ErrorePage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
      {
        path: "details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register   ></Register>,
      },
      {
        path: "apply",
        element: <ApplyCart></ApplyCart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
