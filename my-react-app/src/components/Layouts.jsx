import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'
const Layouts = () => {
  return (
    <>
    <Header/>
    <SideBar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layouts