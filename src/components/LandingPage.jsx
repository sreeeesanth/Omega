"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Calendar from "@/assets/landing_page/calendar.png";
import Location from "@/assets/landing_page/location.png";

const LandingPage = () => {
  // code for devfolio button
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="home">
      <div className="flex flex-col justify-center items-center mt-[135px]">
        <div className="text-[128px] scale-[0.45] max-sm:text-[30vw] sm:scale-[0.75] lg:scale-[0.85] font-[700] text-white font-[anybody] max-sm:mb-[100px] ">
          <p className="mirror-vertical-lg" data-text="MEC.HACK">
            MEC.HACK
          </p>
        </div>
        <div className="flex gap-[50px] max-sm:gap-[20px] sm:mt-[80px] max-sm:mt-[-10vw]">
          <div className="flex flex-col gap-[40px] max-sm:gap-[20px] justify-start">
            <Image
              src={Calendar}
              alt="Calendar Icon"
              className="invert brightness-0 w-[50px] h-[50px] scale-[0.8] sm:scale-[0.9] lg:scale-100"
            />
            <Image
              src={Location}
              alt="Location Icon"
              className="invert brightness-0 w-[50px] h-[50px] scale-[0.8] sm:scale-[0.9] lg:scale-100"
            />
          </div>
          <div className="flex flex-col gap-[40px] max-sm:gap-[20px] justify-center items-center">
            <p className="text-white font-orbitron text-[32px] scale-[0.70] lg:scale-[0.85] xl:scale-100 font-[700]">
              DATE
            </p>
            <p className="text-white font-orbitron text-[32px] scale-[0.70] lg:scale-[0.85] font-[700]">
              LOCATION
            </p>
          </div>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default LandingPage;
