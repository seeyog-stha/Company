import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlogs() {
    const navigate=useNavigate()
  return (
    <>
      <div className="h-screen w-full bg-gray-600 overflow-y-auto flex justify-center items-center gap-3">
       <div className="flex items-start  h-full py-4 ">
        <button className="btn btn-circle" onClick={()=>navigate("/Home")}>  ❮</button>
       </div>
        <div className="h-[95%] w-[90%] bg-gray-300 ">
          <form className="flex flex-col items-center py-5 space-y-3">
            <label htmlFor="Title">Enter the Title here:</label>
            <input
              type="text"
              name="Title"
              id="Title"
              className="input input-bordered input-primary w-[90%]"
            />
            <label htmlFor="img">Choose an image:</label>
            <input
              type="file"
              name="img"
              id="img"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
            <label htmlFor="content">Enter the content here:</label>
            <textarea
              name="content"
              id="content"
              className="textarea textarea-primary w-[90%] h-[40vh]"
            ></textarea>
            <div className="space-x-5">
              <input type="submit" value="Submit" className="btn btn-primary " />
              <input type="reset" value="Reset" className="btn btn-secondary "/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
