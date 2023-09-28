import React from "react";

export default function Create() {
  return (
    <>
      <div className="h-screen w-screen  bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] p-2">
        <div className="h-[98vh] w-11/12 bg-base-100 mx-auto overflow-y-auto">
          <form action="">
            <div>
              <label htmlFor="name">Enter the Employee name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="img">Enter the Image path:</label>
              <input type="text" name="name" id="img" />
            </div>
          </form>
          <div>
            <label htmlFor="code">Enter the Employee code:</label>
            <input type="text" name="code" id="code" />
          </div>
          <div>
            Gender:
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">female</label>
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="" id="dob" />
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
            <select name="nationality" id="nationality">
              <option value="nepal">Nepal</option>
              <option value="india">India</option>
              <option value="us">US</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <label htmlFor="address">address</label>
            <input type="text" name="address" id="address" />
          </div>
          <div>
            <label htmlFor="contact">contact:</label>
            <input type="tel" name="contact" id="contact" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="sdate">Start date</label>
            <input type="date" id="sdate" />
          </div>
          <div>
            <label htmlFor="post">post</label>
            <select name="post" id="post">
              <option disabled selected>
                choose post
              </option>
              <option value="CEO">CEO</option>
              <option value="DEveloper">Developer</option>
              <option value="HR">HR</option>
            </select>
          </div>
          <div className=" w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Status</span>
              <input type="checkbox" className="toggle toggle-accent" />
            </label>
          </div>
          <div>
            <label htmlFor="project">enter the projects</label>
            <input type="number" id="project" />
          </div>
          <div>
            <input
              type="range"
              min={0}
              max="100"
              className="range range-secondary"
              step="25"
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
            <label htmlFor="experience">experience</label>
            <input type="number" name="experience" id="experience" />
          </div>
        </div>
      </div>
    </>
  );
}
