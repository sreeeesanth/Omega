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
          <p className="mirror-vertical-lg" data-text="OMEGA">
            OMEGA
          </p>
        </div>
        <div className="flex flex-col gap-[20px] [@media(max-width:1050px)]:gap-[20px] sm:gap-[40px] sm:mt-[80px] max-sm:mt-[-10vw] justify-center items-center w-full" style={{ marginTop: 'clamp(120px, 20vw, 180px)' }}>
          {/* Calendar row */}
          <div className="flex flex-row items-center gap-[16px] justify-center w-full [@media(max-width:1050px)]:flex-col [@media(max-width:1050px)]:gap-[8px] [@media(max-width:1050px)]:items-center">
            <Image
              src={Calendar}
              alt="Calendar Icon"
              className="invert brightness-0 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] lg:w-[72px] lg:h-[72px]"
            />
            <p className="text-white font-orbitron text-[24px] sm:text-[32px] scale-[0.70] lg:scale-[0.85] xl:scale-100 font-[700] text-center sm:text-left">
              Oct 18,19
            </p>
          </div>
          {/* Location row */}
          <div className="flex flex-row items-center gap-[16px] justify-center w-full [@media(max-width:1050px)]:flex-col [@media(max-width:1050px)]:gap-[8px] [@media(max-width:1050px)]:items-center">
            <Image
              src={Location}
              alt="Location Icon"
              className="invert brightness-0 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] lg:w-[72px] lg:h-[72px]"
            />
            <p className="text-white font-orbitron text-[24px] sm:text-[32px] scale-[0.70] lg:scale-[0.85] xl:scale-100 font-[700] text-center sm:text-left">
              Govt. Model Engineering College, Thrikkakara
            </p>
          </div>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default LandingPage;
