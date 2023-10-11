import React from "react";
import { SingleDataUrl } from "../Urls/Urlpath";
import Createcomp from "../src/component/Createcomp";

export default function Create() {
  const valueobj={
    name:"Post",
    url:SingleDataUrl,
    method:"POST",
    navigate:"/Company/Staff"
  }
  return (
    <>
     <Createcomp valueobj={valueobj} data={null} ></Createcomp>
      
    </>
  );
}
