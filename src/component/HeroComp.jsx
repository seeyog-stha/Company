import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../image/hero.jpg"
import runningDeer from "../../image/deeranimation.gif"
export default function HeroComp() {
  return (
    <>
  
      <div className="w-full h-screen relative overflow-hidden">
       
        <img src={heroImage} alt="" className="h-screen w-full" />
        <img
          src={runningDeer}
          alt="runnigdeer"
          className="h-50 animate-Moveright absolute top-[40vh] opacity-0"
        />

        <div className="absolute top-[30%] p-4 animate-Movedown space-y-3 text-white ">
          <h1 className="text-4xl lg:text-7xl font-extrabold ">Welcome to SUYOG</h1>
          <p className="text-xl ">Your IT solution partner.</p>
          <div>
            <Link to="/Home">
              <button className="btn btn-accent animate-bounce mt-4">Go to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
