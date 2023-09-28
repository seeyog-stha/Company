import React from "react";
import useFetch from "./useFetch";
import Table from "./Table";
import { Link } from "react-router-dom";

export default function Staff() {
  const { data, pending, error } = useFetch("http://localhost:8000/data");
  console.log(data, pending, error);
  return (
    <>
      <div className="w-full bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen py-5">
        <div className="container w-11/12 h-[98%] bg-base-100 mx-auto">
          {/* options */}
          <div className="flex justify-between px-4 space-x-5 flex-col lg:flex-row">
            {/* left sort part */}
            <div>
              <div className="flex items-center order-last lg:order-first">
                <p>Sort by:</p>
                <div className="flex">
                  <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn btn-sm m-1 ">
                      post
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>CEO</a>
                      </li>
                      <li>
                        <a>HR</a>
                      </li>
                      <li>
                        <a>Developer</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn btn-sm m-1">
                      Status
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Active</a>
                      </li>
                      <li>
                        <a>Available</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* rigth search  */}
            <div className="order-first lg:order-last flex">
              <div className="btn btn-sm bg-green-700 mr-10 my-auto text-base-200">
                <Link to="/Staff/Create">+create</Link>
              </div>
              <div className="join my-1">
                <input
                  type="text"
                  placeholder="search"
                  className="join-item input input-bordered input-info w-full max-w-xs rounded-full p-3"
                />
                <button className="btn join-item rounded-r-full bg-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* table  */}
          <div className="flex justify-center">
            {pending && (
              <span className="loading loading-dots loading-lg m-auto"></span>
            )}
          </div>
          {error && <h1>{error}</h1>}
          {data && <Table data={data}></Table>}
        </div>
      </div>
    </>
  );
}
