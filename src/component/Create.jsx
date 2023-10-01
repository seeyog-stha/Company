import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

export default function Create() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [image, setImg] = useState();
  const [code, setCode] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [nationality, setNationality] = useState("nepal");
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [Sdate, setSdate] = useState();
  const [post, setPost] = useState("Developer");
  const [status, setStatus] = useState("available");
  const [check, setCheck] = useState(false);
  const [projects, setProjects] = useState();
  const [skill, setSkill] = useState(0);
  const [experience, setexperience] = useState(3);
  const [pending, setPending] = useState();
  const [errorr, setError] = useState();

  const handelImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImg(base64);
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  // function to make that checks whether the code exist already or not
  const handelCode = (e) => {
    console.log(e.target.value);
    setCode(e.target.value);
  };
  // function for the status
  const handelcheck = () => {
    setCheck(!check);
    const temp = check ? "available" : "active";
    setStatus(temp);
  };
  // function to handel experience
  const handelExperience = (value) => {
    if (value == 0) {
      setexperience(0);
    } else if (value == 25) {
      setexperience(1);
    } else if (value == 50) {
      setexperience(3);
    } else if (value == 75) {
      setexperience(5);
    } else {
      setexperience(10);
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const value = {
      name,
      image,
      code,
      gender,
      dob,
      nationality,
      address,
      contact,
      email,
      Sdate,
      post,
      status,
      projects,
      skill,
      experience,
    };
    setPending(true);
    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }).then(()=>{
      setPending(false)
      navigate("/Staff")
    },(error)=>{
      console.log(error)
      setPending(false)
      setError(error.message)
    })
  };

  return (
    <>
    
      <div className="h-screen w-screen  bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] p-2">
        <div className="h-[98vh] w-11/12 mx-auto overflow-y-auto bg-base-100">
          {/* options  */}
          <div className="w-full flex justify-between p-3">
            <button
              className="btn btn-circle"
              onClick={() => {
                navigate("/Staff");
              }}
            >
              ❮
            </button>
          </div>
          {/* form part  */}
          <div className="flex justify-evenly px-4 py-3 flex-col lg:flex-row">
            {/* icon  */}

            <div className="lg:w-1/4 flex  justify-center h-1/2 mt-8 w-full">
              <img src="\icon.png" alt="logo" />
            </div>
            {/* form  */}
            <div className="lg:w-1/3 w-full">
              <form
                action=""
                className="space-y-2"
                autoComplete="on"
                onSubmit={handelSubmit}
              >
                <div className="flex flex-col">
                  <label htmlFor="name">Enter the Employee name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input input-bordered input-primary h-8 "
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="img">Choose the Image:</label>
                  <input
                    type="file"
                    name="name"
                    id="img"
                    className="file-input file-input-bordered file-input-primary "
                    onChange={(e) => {
                      handelImg(e);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="code">Enter the Employee code:</label>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    className="input input-bordered input-primary h-8 "
                    onChange={(e) => {
                      handelCode(e);
                    }}
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <p>Gender:</p>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="radio radio-primary"
                    onChange={() => {
                      setGender("male");
                    }}
                  />
                  <label htmlFor="male">male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    className="radio radio-primary"
                    onChange={() => {
                      setGender("female");
                    }}
                  />
                  <label htmlFor="female">female</label>
                </div>
                <div className="space-x-3">
                  <label htmlFor="dob">Date of Birth:</label>
                  <input
                    type="date"
                    name=""
                    id="dob"
                    className="input input-bordered input-primary h-8"
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                </div>
                <div className="space-x-3">
                  <label htmlFor="nationality">Nationality:</label>
                  <select
                    name="nationality"
                    id="nationality"
                    className="select select-primary select-sm w-1/2 max-w-xs "
                    onChange={(e) => {
                      setNationality(e.target.value);
                    }}
                  >
                    <option value="nepal">Nepal</option>
                    <option value="india">India</option>
                    <option value="us">US</option>
                    <option value="NAN">Others</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="input input-bordered input-primary h-8"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="contact">contact:</label>
                  <input
                    type="tel"
                    name="contact"
                    id="contact"
                    className="input input-bordered input-primary h-8"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input input-bordered input-primary h-8"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="sdate">Start date:</label>
                  <input
                    type="date"
                    id="sdate"
                    className="input input-bordered input-primary h-8"
                    onChange={(e) => {
                      setSdate(e.target.value);
                    }}
                  />
                </div>
                <div className="space-x-2">
                  <label htmlFor="post">Post:</label>
                  <select
                    name="post"
                    id="post"
                    className="select select-primary select-sm w-1/2 max-w-xs "
                    onChange={(e) => {
                      setPost(e.target.value);
                    }}
                  >
                    <option disabled>choose post</option>
                    <option value="DEveloper">Developer</option>
                    <option value="CEO">CEO</option>
                    <option value="HR">HR</option>
                  </select>
                </div>
                <div className=" w-52 ">
                  <label className="cursor-pointer label space-x-2">
                    <span className="label-text">Status:</span>
                    <p>available</p>
                    <input
                      type="checkbox"
                      className="toggle toggle-accent"
                      value={check}
                      onChange={handelcheck}
                    />
                    <p>active</p>
                  </label>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="project">Enter the projects</label>
                  <input
                    type="number"
                    id="project"
                    className="input input-bordered input-primary h-8"
                    onChange={(e) => {
                      setProjects(e.target.value);
                    }}
                  />
                </div>
                <div>
                  Skill:
                  <input
                    type="range"
                    min={0}
                    max="100"
                    className="range range-primary"
                    step="25"
                    onChange={(e) => setSkill(e.target.value)}
                    value={skill}
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>0</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                  </div>
                </div>
                <div>
                  Experience:
                  <input
                    type="range"
                    min={0}
                    max="100"
                    className="range range-primary"
                    step="25"
                    onChange={(e) => handelExperience(e.target.value)}
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>0 years</span>
                    <span>1+ years</span>
                    <span>3+ years</span>
                    <span>5+ years</span>
                    <span>10+ years</span>
                  </div>
                </div>
                {errorr&&<div className="alert alert-error">
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
                </div>}
                <div className="flex gap-3 pt-6 mx-auto justify-center">
                  <button className="btn btn-primary btn-outline" type="reset">
                    Reset
                  </button>
                  {!pending && (
                    <button
                      className="btn btn-secondary btn-outline"
                      type="submit"
                    >
                      Save changes
                    </button>
                  )}
                  {pending && (
                    <button
                      className="btn btn-secondary btn-outline"
                      type="submit"
                      disabled
                    >
                      Loading...
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
