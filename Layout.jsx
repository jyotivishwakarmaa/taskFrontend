import React from 'react'
import Header from './src/Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './src/Components/Footer'

const Layout = () => {
  return (
    <>
    
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout