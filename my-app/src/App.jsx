import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout";
import Movies from "./Component/Movies";
import Tv from "./Component/Tv";
import Home from "./Component/Home";
import { Toaster } from "react-hot-toast";
import DetailsMovies from "./Component/Details/DetailsMovies";
import DetailsTv from "./Component/Details/DetailsTv";
import Register from "./Component/Auth/Register/Register";
import Login from "./Component/Auth/Login/Login";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function App() {
let [logindata,setLoginData]=useState(null)

  function SaveLoginData() {
    let encodedToken=localStorage.getItem('usertoken')
    let decodedToken=jwtDecode(encodedToken)
    console.log(decodedToken);
    setLoginData(decodedToken)
    
  }
useEffect(() => {
if (localStorage.getItem('usertoken')) {
  SaveLoginData()
}
}, [])

let routers=createBrowserRouter([
  {path:"", element:<Layout logindata={logindata} setLoginData={setLoginData}/>, children:[
    {path:"home", element:<Home/>},
    {path:"movies", element:<Movies/>},
    {path:"tv", element:<Tv/>},
    {path:"detailsmovies/:id",element:<DetailsMovies/>},
    {path:"detailstv/:id",element:<DetailsTv/>},
    {path:"register", element:<Register/>},
    {index:true,element:<Login SaveLoginData={SaveLoginData}/>},
  ]}
])
  return <>
  <Toaster position="top-right" reverseOrder={false} />
  <RouterProvider router={routers}/>
  </>;

}
