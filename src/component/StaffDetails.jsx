import React, { useState } from "react";
import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";

export default function StaffDetails() {
  const [errorr, setError] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, pending, error } = useFetch("http://localhost:8000/data/" + id);
  console.log(data, pending, error);
  const handelDelete = () => {
    fetch("http://localhost:8000/data/" + id, {
      method: "DELETE",
    }).then(
      () => {
        navigate("/Staff");
      },
      (error) => {
        setError("sorry!! error occured while deleting the record");
      }
    );
  };
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] flex items-center justify-center">
        <div className="w-11/12 h-[99vh] bg-base-100 lg:p-5 overflow-y-scroll ">
          {errorr && (
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
              <span>{errorr}</span>
            </div>
          )}
          {/* for btn  */}
          <div className="flex justify-between">
            <button
              className="btn btn-circle"
              onClick={() => {
                navigate("/Staff");
              }}
            >
              ❮
            </button>
            <h1 className="text-xl font-bold underline">Staff Details</h1>
            <div className="lg:space-x-7 space-x-2">
              <button className="btn btn-primary btn-outline">edit</button>
              <button
                className="btn btn-secondary btn-outline"
                onClick={handelDelete}
              >
                delete
              </button>
            </div>
          </div>
          {/* for staff info  */}
          <div className="flex justify-center">
            {pending && (
              <span className="loading loading-dots loading-lg m-auto"></span>
            )}
          </div>
          {error && <h1>{error}</h1>}
          {data && (
            <div className="flex justify-between flex-col lg:flex-row items-center lg:items-start">
              {/* image section  */}

              <div
                className={`avatar ${
                  data.status == "active" ? "online" : "offline"
                } lg:h-44 mt-9 lg:scroll-ml-7`}
              >
                <div className="lg:w-44 rounded-full ring ">
                  <img src={data.image} alt="" />
                </div>
              </div>
              {/* info section  */}
              <div className="w-2/3 mt-10 lg:mt-0">
                {/* basic info  */}
                <div className="text-lg ">
                  <div className="flex">
                    <h5 className="font-bold mr-3">Employee code:</h5>
                    <p>{data.code}</p>
                  </div>
                  <div className="flex capitalize">
                    <h5 className="font-bold mr-3">Name:</h5>
                    <p>{data.name}</p>
                  </div>
                  <div className="flex capitalize">
                    <h5 className="font-bold mr-3">Gender:</h5>
                    <p>{data.gender}</p>
                  </div>
                  <div className="flex">
                    <h5 className="font-bold mr-3">Date of birth:</h5>
                    <p>{data.dob}</p>
                  </div>
                  <div className="flex capitalize">
                    <h5 className="font-bold mr-3">Nationality:</h5>
                    <p>{data.nationality}</p>
                  </div>{" "}
                  <div className="flex capitalize">
                    <h5 className="font-bold mr-3">Address:</h5>
                    <p>{data.address}</p>
                  </div>{" "}
                  <div className="flex">
                    <h5 className="font-bold mr-3">Contact:</h5>
                    <p>{data.contact}</p>
                  </div>{" "}
                  <div className="flex">
                    <h5 className="font-bold mr-3">E-mail:</h5>
                    <p>{data.email}</p>
                  </div>{" "}
                  <div className="flex">
                    <h5 className="font-bold mr-3">Started Date:</h5>
                    <p>{data.sdate}</p>
                  </div>{" "}
                  <div className="flex capitalize">
                    <h5 className="font-bold mr-3">Post:</h5>
                    <p>{data.post}</p>
                  </div>{" "}
                  <div className="flex capitalize">
                    <h5 className="font-bold mr-3">Status:</h5>
                    <p>{data.status}</p>
                  </div>{" "}
                  <div className="flex">
                    <h5 className="font-bold mr-3">
                      No. of Projects accomplished:
                    </h5>
                    <p>{data.projects}</p>
                  </div>
                </div>
                {/* chart  */}
                <p className="underline text-xl font-bold mb-5"> summary</p>
                <div className="flex justify-evenly flex-col items-center lg:flex-row">
                  <div>
                    <div
                      className="radial-progress ring-1 ring-pink-400 text-pink-300"
                      style={{
                        "--value": `${data.skill}`,
                        "--size": "10rem",
                        "--thickness": "1rem",
                      }}
                    >
                      {data.skill}%
                    </div>
                    <p className="text-center mt-6">skill set</p>
                  </div>
                  <div>
                    <div
                      className="radial-progress text-blue-400 ring-1"
                      style={{
                        "--value": `${data.experience}*10`,
                        "--size": "10rem",
                        "--thickness": "1rem",
                      }}
                    >
                      {data.experience}year
                    </div>
                    <p className="text-center mt-6">experience</p>
                  </div>
                  <div>
                    <div
                      className="radial-progress ring-1 ring-black"
                      style={{
                        "--value": `${data.projects}*10`,
                        "--size": "10rem",
                        "--thickness": "1rem",
                      }}
                    >
                      {data.projects}
                    </div>
                    <p className="text-center mt-6">projects</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
