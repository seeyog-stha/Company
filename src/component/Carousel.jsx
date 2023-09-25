import React from "react";
export default function Carousel() {
  return (
    <>
      <div className="w-full  h-[85vh] ">
        <div className="carousel w-full  h-full">
          <div className="carousel-item w-full relative bg-gray-200" id="slide1">
        
            <img
              src="https://i.pinimg.com/736x/73/a0/4c/73a04c38bbf734dea3734ad89466ed3a--deer-drawing-white-tailed-deer.jpg"
              alt="company"
              className="h-5/6 opacity-80 border border-gray-300 rounded-xl -rotate-12 absolute top-10 lg:left-40 shadow-lg shadow-black "
            />
            <img src="pinklogo.png" alt="logo" className="w-20 h-7 absolute right-4 bottom-3" />
            <q className="absolute text-4xl top-60 lg:text-7xl right-0 lg:top-20 w-3/6 font-bold">Turning Visions into Reality.</q>
            <div className="flex justify-between absolute w-full top-1/2">
              <a href="#slide4" className="btn btn-circle btn-outline">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-outline">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full relative" id="slide2">
            <img
              src="https://wallpaperaccess.com/full/656693.jpg"
              alt="company"
              className="w-full"
            />
            <div className="flex justify-between absolute w-full top-1/2">
              <a href="#slide1" className="btn btn-circle ">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle ">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full relative" id="slide3">
            <img
              src="https://i.ytimg.com/vi/nLud5KlhSJ0/maxresdefault.jpg"
              alt="company"
              className="w-full"
            />
            <div className="flex justify-between absolute w-full top-1/2">
              <a href="#slide2" className="btn btn-circle ">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle ">
                ❯
              </a>
            </div>
          </div>
          <div className="carousel-item w-full relative" id="slide4">
            <img
              src="https://th.bing.com/th/id/R.f58a04c51787cc39bc674981e124c50a?rik=d9t3IlP4Eu57%2bQ&pid=ImgRaw&r=0"
              alt="company"
              className="w-full"
            />
            <div className="flex justify-between absolute w-full top-1/2">
              <a href="#slide3" className="btn btn-circle ">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle ">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center hover:invert">
        <img src="logoline.png" alt="" className="h-10 "/>
      </div>
     
    </>
  );
}
