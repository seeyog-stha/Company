import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../image/logo.png";
import useFetch from "./useFetch";
import { SingleDataUrl } from "../../Urls/Urlpath";
export default function BlogPage() {
//   const navigate = useNavigate();
//   const {id}=useParams();
//  const {value,pending,error}=useFetch(SingleDataUrl+id);
//  console.log(value)
  return (
    <>
      {/* {value&&<div className="bg-base-300 h-screen overflow-y-auto">
        <div className="sticky top-0 z-30 w-full flex items-center navbar h-10 bg-gray-400">
          <div className="navbar-start">
            <button
              className="btn btn-circle m-1 bg-white"
              onClick={() => navigate("/Home")}
            >
              ❮
            </button>
          </div>
          <div className="navbar-center">
            <img src={logo} alt="logo" className="h-10 " />
          </div>
        </div>

        <div className="w-[95vw] mx-auto space-y-5">
          <div className="text-4xl text-center font-bold capitalize mt-3">
            <h1>{value.data.head}</h1>
          </div>
          <div className="h-[60vh] w-full flex items-center justify-center ">
            <img
              src={value.data.img}
              alt="blog pic"
              className="h-full"
            />
          </div>
          <div>
            <p className="text-left">{value.data.body}</p>
          </div>
        </div>
      </div>} */}
      hello there
    </>
  );
}
