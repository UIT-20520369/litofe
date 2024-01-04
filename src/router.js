import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./layout/layout";
import HomePage from "./pages/Home/Home";
import Login from "./layout/loginform/Login"
import Header from "./layout/header/Header";
import Signup from "./layout/loginform/Signup"
import Purchase from "./pages/PurchaseScreen/Purchase"
import UserInfo from "./pages/UserInfor/UserInfor";
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
      {
        path: 'login', 
        element: <Login />, 
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'purchase',
        element: <Purchase/>
      },
      {
        path:'user',
        element: <UserInfo/>
      }
    ],
  },
]);
export {router}
