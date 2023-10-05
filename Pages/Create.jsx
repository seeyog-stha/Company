import React from "react";

import Createcomp from "../src/component/Createcomp";

export default function Create() {
  const valueobj={
    name:"Post",
    url:"http://localhost:8000/data",
    method:"POST",
    navigate:"/Staff"
  }
  return (
    <>
     <Createcomp valueobj={valueobj} ></Createcomp>
      
    </>
  );
}
