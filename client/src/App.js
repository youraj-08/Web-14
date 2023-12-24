import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"


//import all components
import Username from "./Components/Username";
import Reset from "./Components/Reset";
import Register from "./Components/Register";
import Recovery from "./Components/Recovery";
import Profile from "./Components/Profile";
import Password from "./Components/Password";
import PageNotFound from "./Components/PageNotFound";


// root routes
const router= createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>
  },
  {
    path: "/reset",
    element: <Reset></Reset>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>
  },
  {
    path: "/profile",
    element: <Profile></Profile>
  },
  {
    path: "/password",
    element: <Password></Password>
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  }
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
