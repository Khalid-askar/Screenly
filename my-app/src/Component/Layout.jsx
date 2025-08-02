import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout({logindata,setLoginData}) {
  return <>
  <Navbar logindata={logindata} setLoginData={setLoginData}/>
  <Outlet/>
  <Footer/>
  </>
}
