import React, { useEffect, useState } from "react";
import carouselimg2 from "../../image/empower.jpg"
import pinklogoImg from "../../image/pinklogo.png"
import logolineImage from "../../image/logoline.png"
export default function Carousel() {
  const [currentSlide, setSlide] = useState(1);
  const nextSlide = () => {
    setSlide(currentSlide == 4 ? 1 : currentSlide + 1);
  };
  const prevSlide = () => {
    setSlide(currentSlide == 1 ? 4 : currentSlide - 1);
  };

  const slide = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/73/a0/4c/73a04c38bbf734dea3734ad89466ed3a--deer-drawing-white-tailed-deer.jpg",
      title: "Turning Visions into Reality.",
      background:"bg-gray-200"
    },
    {
      id: 2,
      img: carouselimg2,
      title:"Empowering businesses through innovative IT solutions.",
      background:"bg-[#D2B48C]"

    },
    {
      id: 3,
      img: "https://th.bing.com/th/id/R.cf9578e04f9147d2db022e628acbba70?rik=CdtCDVitj5twKg&riu=http%3a%2f%2fintersport.com%2fwp-content%2fuploads%2f2018%2f12%2fdavid-bucher-1440x1440-new-1440x1440.jpg&ehk=ZgBxCXSh9ZljdQ6t3QTHeuxBHBfGA%2bB0v4oaYx1OyhA%3d&risl=&pid=ImgRaw&r=0",
      title: "Your IT solutions partner, always by your side",
      background:"bg-red-400"
    },
    {
      id: 4,
      img: "https://th.bing.com/th/id/R.ebe74d173d773f9a6b473fe461a2275e?rik=KTfX0s0wCV%2f43Q&riu=http%3a%2f%2fimages.huffingtonpost.com%2f2016-05-06-1462539856-7174175-6358850986901693652109630270_TECHTRENDS.jpg&ehk=IX8xn7uEz7ak2xN45yIxNaQ6rNwv7gCtZKXjEnyVD6I%3d&risl=&pid=ImgRaw&r=0",
      title: "Fueling your growth with technology-driven solutions",
      background:"bg-blue-200"
    },
  ];
  useEffect(()=>{
    const interval=setInterval(nextSlide,7000)
    return ()=> clearInterval(interval)
  },[currentSlide])
  return (
    <>
      <div className="w-full  lg:h-[80vh] h-[50vh]">
        <div className=" w-full  h-full relative overflow-hidden">
          {slide.map((slide) => (
            <div
              key={`slide${slide.id}`}
              className={`h-full absolute ${slide.background} transition-all duration-1000 ease-in-out w-full  ${
                currentSlide === slide.id
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[20vw] opacity-0 "
              }`}
            >
              <img
                src={slide.img}
                alt="image"
                className="lg:h-5/6 lg:w-[26%] h-[60%] w-[50%] opacity-80 border border-gray-300 rounded-xl -rotate-12 absolute lg:top-10 lg:left-40 shadow-xl shadow-black  top-5 left-20"
              />
              <img
                src={pinklogoImg}
                alt="logo"
                className="w-20 h-7 absolute right-4 bottom-3"
              />
              <q className="absolute w-full text-2xl bottom-9 text-center  lg:text-7xl lg:right-10 lg:top-20 lg:w-1/2  lg:font-thin">
                {slide.title}
              </q>
            </div>
          ))}
          <div className="flex justify-between absolute w-full top-1/2">
            <button onClick={prevSlide} className="btn btn-circle ">
              ❮
            </button>
            <button onClick={nextSlide} className="btn btn-circle ">
              ❯
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center hover:invert">
        <img src={logolineImage} alt="" className="h-10" />
      </div>
    </>
  );
}
