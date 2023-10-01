import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Table from "./Table";
import { Link } from "react-router-dom";

export default function Staff() {
  const { data, pending, error } = useFetch("http://localhost:8000/data");
  const [check, setCheck] = useState(true);
  const [simValue, setSimValue] = useState();
  const [posts, setPost] = useState("all");
  const [statuss, setStatus] = useState("all");
  const [search,setSearch]=useState("")
  
  // initializing the simulated value to the fetched data
  if (data && check) {
    setSimValue(data);
    setCheck(false);
  }
  // sort by post and status

  const sortBy = () => {
    const lowerCasePosts = posts.toLowerCase();
    const lowerCaseStatuss = statuss.toLowerCase();

    const filteredData = data.filter((item) => {
      const lowerCaseStatus = item.status.toLowerCase();

      // Check if the item matches the selected `posts` and `statuss`
      return (
        (lowerCasePosts === "all" ||lowerCasePosts === item.post.toLowerCase()) &&
        (lowerCaseStatuss === "all" || lowerCaseStatuss === lowerCaseStatus)
     
      );
    });
    setSimValue(filteredData);
  };

  useEffect(() => {
    if (data) {
      sortBy();
    }
  }, [posts, statuss]);
  // function for the search event
  const handelSearch=()=>{
    const regexp= new RegExp(search,'i')
    const filteredData=data.filter((items)=>regexp.test(items.name))
    setSimValue(filteredData)

  }
  return (
    <>
      <div className="w-full bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen py-5">
        <div className="container w-11/12 h-[98%] bg-base-100 mx-auto">
          {/* options */}
          <div className="flex justify-between px-4 space-x-5 flex-col lg:flex-row">
            {/* left sort part */}
            <div>
              <div className="flex items-center order-last lg:order-first pt-2">
                <p>Sort by:</p>
                <div className="flex space-x-5">
                 <p className="ml-2"> Post</p>
                  <select
                    className="select select-info select-sm max-w-xs mx-2"
                    value={posts}
                    onChange={(e) => setPost(e.target.value)}
                  >
                    <option disabled >
                      Post
                    </option>
                    <option value="all">All</option>
                    <option value="CEO">CEO</option>
                    <option value="Developer">Developer</option>
                    <option value="HR">HR</option>
                  </select>
                  <p>Status</p>
                  <select
                    className="select select-info select-sm max-w-xs mx-2"
                    value={statuss}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option disabled>
                      status
                    </option>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="available">Available</option>
                  </select>
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
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                  onKeyDown={(e)=>{if(e.key==="Enter"){handelSearch()}}}
                />
                <button className="btn join-item rounded-r-full bg-blue-300" onClick={handelSearch}>
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
          {error && (
            <div className="alert alert-error">
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
          {data && <Table data={simValue}></Table>}
        </div>
      </div>
    </>
  );
}
