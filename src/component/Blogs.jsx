import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

export default function Blogs() {
  const BlogsPerPage = 4;
  const { value, pending, error } = useFetch("http://localhost:8000/data");
  const [BlogsData, setBlogsData] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [TotalPages, setTotalPages] = useState();
  useEffect(() => {
    if (value) {
      const indexOfLast = BlogsPerPage * CurrentPage;
      const indexOfFirst = indexOfLast - BlogsPerPage;
      setBlogsData(value.slice(indexOfFirst, indexOfLast));
      setTotalPages(value.length);
    }
  }, [value, CurrentPage]);

  console.log(BlogsData);
  const handelPageUp = () => {
    if (CurrentPage != Math.ceil(TotalPages / BlogsPerPage)) {
      setCurrentPage(CurrentPage + 1);
    }
  };

  const handelPageDown = () => {
    if (CurrentPage != 1) {
      setCurrentPage(CurrentPage - 1);
    }
  };
  console.log(CurrentPage);
  return (
    <>
      <h4 className="text-3xl text-center font-bold underline">
        Our Latest Blogs
      </h4>
      {error && (
        <div role="alert" className="alert alert-error my-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
     {pending&& <div className="flex justify-center py-9">
      <span className="loading loading-spinner loading-lg"></span>
      </div>}
      {value && (
        <div>
          <div className="mx-3 my-7 h-[80vh] lg:h-[50vh] flex justify-evenly flex-wrap">
            {BlogsData.map((obj) => (
              <Link to={`/Home/Blog/$obj.id`}>

              
              <div
                className="w-[40%] h-[45%] lg:w-1/5 lg:h-full  rounded-tr-xl shadow-xl shadow-gray-500 bg-gray-300"
                key={obj.id}
              >
                <div className="w-full h-2/3 flex items-center justify-center p-1">
                  <img
                    src={obj.img}
                    alt="img"
                    className="w-full border rounded-tr-xl h-full"
                  />
                </div>
                <div className="flex items-center w-full h-[20%] ">
                  <p className="w-[90%] h-full  text-center text-lg lg:text-2xl overflow-hidden line-clamp-2 text-ellipsis font-bold ">
                    {obj.head}
                  </p>
                </div>
              </div>
            </Link>
            ))}
          </div>
          <div className="flex justify-center py-5">
            <div className="join grid grid-cols-2 lg:w-1/6">
              <button
                className="join-item btn btn-outline"
                onClick={handelPageDown}
              >
                Previous page
              </button>
              <button
                className="join-item btn btn-outline"
                onClick={handelPageUp}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
