import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./layout/layout";
import HomePage from "./pages/Home/Home";
import Header from "./layout/header/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path:'User/:userId',
        element: <div></div>,
      },
      {
        path:'playlist/:playlistId',
        element: <HomePage />,
      },
    ],
  },
]);
export {router}
