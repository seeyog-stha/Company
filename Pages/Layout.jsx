import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/component/Navbar'
import Footer from '../src/component/Footer'

export default function Layout(props) {
    const setTheme=props.setTheme
   const theme=props.theme
    
  return (
    <div>
      <Navbar setTheme={setTheme} theme={theme}/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
