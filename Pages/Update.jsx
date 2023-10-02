import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Createcomp from "../src/component/Createcomp";
import useFetch from "../src/component/useFetch";
export default function Update() {
  const { id } = useParams();
  const { data, pending, error } = useFetch("http://localhost:8000/data/" + id);
  const valueobj={
    name:"Update",
    url:"http://localhost:8000/data/" + id,
    method:"PUT",
    navigate:"/Staff/"+id
  }
  return (
    <div>
      {pending && <span className="loading loading-dots loading-lg"></span>}
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
      {data&&<Createcomp valueobj={valueobj} data={data}></Createcomp>}
    </div>
  );
}
