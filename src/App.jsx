import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import StaffPage from "../Pages/StaffPage";
import StaffDetails from "./component/StaffDetails";
import Layout from "../Pages/Layout";
import Create from "../Pages/Create";
import Update from "../Pages/Update";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Hero from "../Pages/Hero";
function App() {
  const [theme, setTheme] = useState("light");
 
  
  
  return (
    <>
      {/* bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen */}
      <div className="font-[poppins] " data-theme={theme}>
        <BrowserRouter>     

          <Routes>
 
            <Route path="/Company/" element={<Hero/>}/>
            <Route element={<Layout setTheme={setTheme}></Layout>}>

            <Route path="/Company/Home" element={<Home />}></Route>
            <Route path="/Company/Staff" element={<StaffPage />}></Route>
            <Route path="/Company/Contact" element={<Contact/>}/>
            <Route path="/Company/About" element={<About/>}/>
            </Route>
            <Route path="/Company/Staff/:id" element={<StaffDetails/>}></Route>
            <Route path="/Company/Staff/Create" element={<Create></Create>}></Route>
            <Route path="/Company/Staff/Update/:id" element={<Update></Update>}></Route>
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
