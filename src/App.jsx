import { useState } from 'react'
import Navbar from './component/Navbar'
import Carousel from './component/Carousel'
import Footer from './component/Footer'
import Company from './component/Company'
import Staff from './component/Staff'
function App() {
  const [theme,setTheme]=useState("light")
  

  return (
    <>
    {/* bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen */}
    <div className="font-[poppins] " data-theme={theme}>

    <Navbar setTheme={setTheme}></Navbar>
    {/* <Carousel></Carousel>
    <Company></Company> */}
    <Staff></Staff>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
