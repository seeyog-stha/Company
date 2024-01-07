import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
export default function BlogPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-base-300 h-screen">
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
            <h1>these is the title</h1>
          </div>
          <div className="h-[60vh] w-full flex items-center justify-center ">
            <img
              src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"
              alt="blog pic"
              className="h-full"
            />
          </div>
          <div>
            <p className="text-left">these is the content  voluptates eum quia nesciunt aperiam quis ut, alias recusandae quod aut dicta impedit quo repellat sunt officia rem. Illum odit ea itaque quos nisi quaerat facere id assumenda animi, pariatur, vitae, hic quam. Quaerat, corporis perferendis ipsum error, itaque alias vitae perspiciatis reprehenderit quis totam aperiam incidunt. Culpa illo facere voluptatem natus reprehenderit? Nobis inventore cupiditate quisquam aut impedit! Dignissimos excepturi voluptas odio soluta recusandae dolor, distinctio repellat voluptates.</p>
          </div>
        </div>
      </div>
    </>
  );
}
