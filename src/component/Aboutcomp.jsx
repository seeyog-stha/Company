import React,{useEffect, useState} from "react";
import Typingani from "./Typingani";
import CountUp from "react-countup";
export default function Aboutcomp() {
    
    const [isVisible,SetIsVisible]=useState(false)
    const scroll=()=>{
        SetIsVisible(true)
    }
    useEffect(()=>{
       window.onscroll=scroll
    },[])
  return (

    <>
      <div>
        <div className="w-full h-screen relative text-center">
          <img
            src="https://ica-hpl.com.my/wp-content/uploads/About-Us.jpg"
            alt=""
            className="w-full h-5/6 opacity-90"
          />
          <Typingani></Typingani>
        </div>
     { isVisible&&  <div className="flex justify-evenly text-4xl font-extrabold" >
          <p>Let's see what we got here</p>
          <div className="text-blue-800">
            <CountUp start={0} end={100} duration={2} />+
            <p>Employees</p>
          </div>
          <div className="text-yellow-600">
            <CountUp start={0} end={7000} duration={2} />+
            <p>Projects</p>
          </div>
          <div className="text-pink-600">
            <CountUp start={0} end={8} duration={2} />+
            <p>Partners</p>
          </div>
        </div>}
        <div className="pt-20 px-6">
            <h2 className="text-5xl font-extrabold underline text-center">Our Vision</h2>
            <div className="mt-7 flex items-center justify-evenly">
            <img src="image/aboutpic.png" alt="img" className="h-1/2"/>
            <p className="w-2/5 text-xl">To be the leading catalyst of technological innovation, empowering organizations worldwide to achieve their fullest potential. We envision a future where our cutting-edge solutions seamlessly integrate with every facet of business and life, elevating productivity, connectivity, and sustainability. Our commitment to excellence, driven by a passion for technological advancement, will propel us toward a world where the possibilities of IT are limitless. Together, we shape a digital landscape that fosters growth, enriches experiences, and creates a brighter tomorrow.</p>
            </div>
        </div>
      </div>
    </>
  );
}
