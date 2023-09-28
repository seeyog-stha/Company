import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import StaffPage from "../Pages/StaffPage";
import StaffDetails from "./component/StaffDetails";
import Layout from "../Pages/Layout";
import Create from "./component/Create";
function App() {
  const [theme, setTheme] = useState("light");
 
  
  
  return (
    <>
      {/* bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen */}
      <div className="font-[poppins] " data-theme={theme}>
        <BrowserRouter>     
          <Routes>
            <Route element={<Layout setTheme={setTheme}></Layout>}>

            <Route path="/" element={<Home />}></Route>
            <Route path="/Staff" element={<StaffPage />}></Route>
            </Route>
            <Route path="/Staff/:id" element={<StaffDetails/>}></Route>
            <Route path="/Staff/Create" element={<Create></Create>}></Route>
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
