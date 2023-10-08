import React, { useEffect, useState } from "react";
import Typingani from "./Typingani";
import CountUp from "react-countup";
export default function Aboutcomp() {
  const [isVisible, SetIsVisible] = useState(false);
  const scroll = () => {
    SetIsVisible(true);
  };
  useEffect(() => {
    window.onscroll = scroll;
  }, []);
  return (
    <>
      <div>
        <div className="w-full h-screen relative text-center">
          <img
            src="https://ica-hpl.com.my/wp-content/uploads/About-Us.jpg"
            alt=""
            className="w-full lg:h-5/6 opacity-90 h-2/3"
          />
          <Typingani></Typingani>
        </div>
        {isVisible && (
          <div className="flex justify-evenly text-4xl font-extrabold flex-col lg:flex-row items-center space-y-7">
            <p>Let's see what we got here</p>
            <div className="text-blue-800 flex lg:flex-col gap-3">
              <div>

              <CountUp start={0} end={100} duration={2} delay={0.5} />+
              </div>
              <p>Employees</p>
            </div>
            <div className="text-yellow-600 flex lg:flex-col gap-3">
              <div>

              <CountUp start={0} end={7000} duration={2} delay={0.5} />+
              </div>
              <p>Projects</p>
            </div>
            <div className="text-pink-600 flex lg:flex-col gap-3">
              <div>

              <CountUp start={0} end={8} duration={2} delay={0.5} />+
              </div>
              <p>Partners</p>
            </div>
          </div>
        )}
        <div className="pt-20 px-6">
          <h2 className="text-5xl font-extrabold underline text-center">
            Our Vision
          </h2>
          <div className="mt-7 flex items-center justify-evenly flex-col lg:flex-row">
            <img src="image/aboutpic.png" alt="img" className="h-1/2" />
            <p className="lg:w-2/5 text-xl w-full">
              To be the leading catalyst of technological innovation, empowering
              organizations worldwide to achieve their fullest potential. We
              envision a future where our cutting-edge solutions seamlessly
              integrate with every facet of business and life, elevating
              productivity, connectivity, and sustainability. Our commitment to
              excellence, driven by a passion for technological advancement,
              will propel us toward a world where the possibilities of IT are
              limitless. Together, we shape a digital landscape that fosters
              growth, enriches experiences, and creates a brighter tomorrow.
            </p>
          </div>
        </div>
        {/* ceo section  */}
        <div className="mt-20 space-y-7">
          <h2 className="text-5xl text-center underline font-bold">Our Team</h2>
          <div className="mx-auto lg:h-[65vh] lg:w-1/3 p-2 mt-3">
            {/* img  */}
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                <img src="https://th.bing.com/th/id/OIP.GVjwglLKq89GIQIlbiNNuAHaI-?pid=ImgDet&rs=1" />
              </div>
            </div>
            {/* info  */}
            <div className="text-center p-5">
              <h4 className="text-2xl font-bold">Suyog Shrestha</h4>
              <p className="text-xl">CEO</p>
              <p>
                "Leading our innovative team of tech professionals to
                revolutionize the digital landscape and empower businesses with
                cutting-edge solutions."
              </p>
            </div>
            {/* social media  */}
            <div className="flex justify-center gap-7">
              {/* facebook  */}
              <div>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle cx="24" cy="24" r="20" fill="#3B5998" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                {/* twitter  */}
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-12 w-12"
                    viewBox="0 -4 48 48"
                    version="1.1"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-300.000000, -164.000000)"
                        fill="#00AAEC"
                      >
                        <path
                          d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                          id="Twitter"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div>
                {/* instagram  */}
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint0_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint1_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint2_radial_87_7153)"
                    />
                    <path
                      d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                      fill="white"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                      >
                        <stop stopColor="#B13589" />
                        <stop offset="0.79309" stopColor="#C62F94" />
                        <stop offset="1" stopColor="#8A3AC8" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                      >
                        <stop stopColor="#E0E8B7" />
                        <stop offset="0.444662" stopColor="#FB8A2E" />
                        <stop offset="0.71474" stopColor="#E2425C" />
                        <stop
                          offset="1"
                          stopColor="#E2425C"
                          stopOpacity="0"
                        />
                      </radialGradient>
                      <radialGradient
                        id="paint2_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                      >
                        <stop offset="0.156701" stopColor="#406ADC" />
                        <stop offset="0.467799" stopColor="#6A45BE" />
                        <stop
                          offset="1"
                          stopColor="#6A45BE"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* other staff section  */}
        <div className="flex flex-col lg:flex-row justify-evenly">
          {/* test1 info  */}
          <div className="mx-auto lg:h-[65vh]  lg:w-1/3 my-3 p-2">
            {/* img  */}
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                <img src="https://th.bing.com/th/id/R.40d4f6dd63cdcd42ea0a69cad81a37b4?rik=wBIXHnxSwcvB8g&pid=ImgRaw&r=0" />
              </div>
            </div>
            {/* info  */}
            <div className="text-center p-5">
              <h4 className="text-2xl font-bold">Test 1</h4>
              <p className="text-xl">Senior Developer</p>
              <p>
                "As a senior developer, I am committed to driving technical
                excellence, fostering collaboration, and delivering high-quality
                code that propels our projects to success."
              </p>
            </div>
            {/* social media  */}
            <div className="flex justify-center gap-7">
              {/* facebook  */}
              <div>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle cx="24" cy="24" r="20" fill="#3B5998" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                {/* twitter  */}
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-12 w-12"
                    viewBox="0 -4 48 48"
                    version="1.1"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-300.000000, -164.000000)"
                        fill="#00AAEC"
                      >
                        <path
                          d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                          id="Twitter"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div>
                {/* instagram  */}
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint0_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint1_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint2_radial_87_7153)"
                    />
                    <path
                      d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                      fill="white"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                      >
                        <stop stopColor="#B13589" />
                        <stop offset="0.79309" stopColor="#C62F94" />
                        <stop offset="1" stopColor="#8A3AC8" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                      >
                        <stop stopColor="#E0E8B7" />
                        <stop offset="0.444662" stopColor="#FB8A2E" />
                        <stop offset="0.71474" stopColor="#E2425C" />
                        <stop
                          offset="1"
                          stopColor="#E2425C"
                          stopOpacity="0"
                        />
                      </radialGradient>
                      <radialGradient
                        id="paint2_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                      >
                        <stop offset="0.156701" stopColor="#406ADC" />
                        <stop offset="0.467799" stopColor="#6A45BE" />
                        <stop
                          offset="1"
                          stopColor="#6A45BE"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* test 2 info  */}
          <div className="mx-auto lg:h-[65vh] lg:w-1/3  p-2 my-3">
            {/* img  */}
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                <img src="https://th.bing.com/th/id/R.d297ad745970bc9b3f6c3673a2f1773d?rik=Lp3JEtw%2f6edC5w&pid=ImgRaw&r=0" />
              </div>
            </div>
            {/* info  */}
            <div className="text-center p-5">
              <h4 className="text-2xl font-bold">Test 2</h4>
              <p className="text-xl">HR</p>
              <p>
              "As the HR leader, my mission is to attract, develop, and retain top talent, ensuring that our company thrives through a culture of diversity, inclusion, and continuous growth."
              </p>
            </div>
            {/* social media  */}
            <div className="flex justify-center gap-7">
              {/* facebook  */}
              <div>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle cx="24" cy="24" r="20" fill="#3B5998" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                {/* twitter  */}
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-12 w-12"
                    viewBox="0 -4 48 48"
                    version="1.1"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-300.000000, -164.000000)"
                        fill="#00AAEC"
                      >
                        <path
                          d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                          id="Twitter"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div>
                {/* instagram  */}
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint0_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint1_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint2_radial_87_7153)"
                    />
                    <path
                      d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                      fill="white"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                      >
                        <stop stopColor="#B13589" />
                        <stop offset="0.79309" stopColor="#C62F94" />
                        <stop offset="1" stopColor="#8A3AC8" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                      >
                        <stop stopColor="#E0E8B7" />
                        <stop offset="0.444662" stopColor="#FB8A2E" />
                        <stop offset="0.71474" stopColor="#E2425C" />
                        <stop
                          offset="1"
                          stopColor="#E2425C"
                          stopOpacity="0"
                        />
                      </radialGradient>
                      <radialGradient
                        id="paint2_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                      >
                        <stop offset="0.156701" stopColor="#406ADC" />
                        <stop offset="0.467799" stopColor="#6A45BE" />
                        <stop
                          offset="1"
                          stopColor="#6A45BE"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* test 3 info  */}
          <div className="mx-auto lg:h-[65vh] lg:w-1/3 p-2 my-3">
            {/* img  */}
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                <img src="https://th.bing.com/th/id/OIP.kQSfTEBoDtc2vXW5z9y3mwAAAA?pid=ImgDet&w=474&h=474&rs=1" />
              </div>
            </div>
            {/* info  */}
            <div className="text-center p-5">
              <h4 className="text-2xl font-bold">Test 3</h4>
              <p className="text-xl">Senior Developer</p>
              <p>
              "As a senior developer, I leverage my extensive experience to architect and implement robust software solutions, contributing to our team's technical prowess and pushing the boundaries of innovation."
              </p>
            </div>
            {/* social media  */}
            <div className="flex justify-center gap-7">
              {/* facebook  */}
              <div>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle cx="24" cy="24" r="20" fill="#3B5998" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                {/* twitter  */}
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-12 w-12"
                    viewBox="0 -4 48 48"
                    version="1.1"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-300.000000, -164.000000)"
                        fill="#00AAEC"
                      >
                        <path
                          d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                          id="Twitter"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div>
                {/* instagram  */}
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint0_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint1_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint2_radial_87_7153)"
                    />
                    <path
                      d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                      fill="white"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                      >
                        <stop stopColor="#B13589" />
                        <stop offset="0.79309" stopColor="#C62F94" />
                        <stop offset="1" stopColor="#8A3AC8" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                      >
                        <stop stopColor="#E0E8B7" />
                        <stop offset="0.444662" stopColor="#FB8A2E" />
                        <stop offset="0.71474" stopColor="#E2425C" />
                        <stop
                          offset="1"
                          stopColor="#E2425C"
                          stopOpacity="0"
                        />
                      </radialGradient>
                      <radialGradient
                        id="paint2_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                      >
                        <stop offset="0.156701" stopColor="#406ADC" />
                        <stop offset="0.467799" stopColor="#6A45BE" />
                        <stop
                          offset="1"
                          stopColor="#6A45BE"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
