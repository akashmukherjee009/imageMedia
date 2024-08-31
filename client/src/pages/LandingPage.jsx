import React, { useEffect } from "react";
import astronaut from "../assets/astronaut.jpg"

function LandingPage() {
  return (
    <>
      <div className="w-full min-h-screen  flex flex-col md:flex-col lg:flex-row justify-between">
        <div className="w-[100%] h-auto lg:w-[40%] p-5 pl-12 flex flex-col gap-0 justify-center items-center lg:items-start">
          <header data-aos="zoom-in-down" className="font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:text-start">
            Capture, Store, and Relive Your Special Moments
          </header>
          <p data-aos="zoom-in-down" className="p-5 pl-0 text-lg md:text-2xl lg:text-2xl text-center lg:text-start">
            Preserve your cherished memories with ease. Our platform allows you
            to securely store and organize images from life’s most special
            events. Whether it’s a wedding, a birthday, or a milestone
            celebration, keep your memories alive with EventSnap
          </p>
          <button data-aos="zoom-in-left" className="w-[100px] md:w-[120px] lg:w-[150px] h-[44px] bg-[#219ebc] rounded-md text-white">
            Get Started
          </button>
        </div>

        <div className="w-full md:w-full h-auto lg:w-[60%] lg:flex items-center">
            <img src={astronaut} alt="astronaut" className="w-full h-[75%]" data-aos="fade-up" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
