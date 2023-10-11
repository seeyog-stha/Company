import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png"
export default function Navbar(props) {
 
  const setTheme=props.setTheme
  return (
    <>
      <nav className="navbar bg-base-200 sticky top-0 z-40 ">
        {/* leftmost part of the navbar  */}
        <div className="navbar-start ">
          {/* dropdown menu that appears only on small screen  */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-circle btn-ghost ">
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
                fill="none"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-base-100 mt-2 w-[95vw] p-3 z-10 rounded-box flex items-center space-y-3"
            >
              <Link to="/Home"><li>home</li></Link>
              <Link to="/About"><li>about</li></Link>
              <Link to="/Staff"><li>staff</li></Link>
              <Link to="/Contact"><li>Contact us</li></Link>
            </ul>
          </div>
          {/*  company logo */}
          <Link to="/Home">
            <img src={logo} alt="logo" className="h-12" />
          </Link>
        </div>
        {/* right part of my navbar  */}
        <div className="navbar-center " >
          <ul className="gap-x-10 hidden lg:flex">
            <Link to="/Home">
            <li className="btn-ghost btn"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <p className="font-bold text-lg">home</p>
            </li>
            </Link>
            <Link to="/About"><li className="btn-ghost btn "> <p className="font-bold text-lg">about us</p></li></Link>
              <Link to="/Staff">
            <li className="btn-ghost btn ">
            <p className="font-bold text-lg">staff</p>
              <span className="badge badge-xs badge-info"></span>
            </li>
              </Link>
              <Link to="/Contact"><li className="btn-ghost btn "> <p className="font-bold text-lg">contact us</p></li></Link>
          </ul>
          
        </div>
        <div className="navbar-end lg:w-20 ">
        <label className="swap swap-rotate ml-12">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <div className="swap-on" onClick={()=>{setTheme("dark")}}>

            <svg
              className=" fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            </div>

            {/* moon icon */}
            <div className="swap-off" onClick={()=>{setTheme("light")}}>

            <svg
              className=" fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />

            </svg>
            </div>
          </label>
        </div>
      </nav>
    </>
  );
}
