import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/component/Navbar'
import Footer from '../src/component/Footer'

export default function Layout(props) {
    const setTheme=props.setTheme
    
  return (
    <div>
      <Navbar setTheme={setTheme}/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
