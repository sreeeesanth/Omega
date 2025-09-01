import React from "react";
import { AboutData } from "@/constants";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col items-center justify-center min-h-screen text-white"
      >
        <h2
          className="mirror-vertical text-center font-bold font-orbitron font-700 xl:scale-100 text-6xl lg:scale-90 md:scale-75 scale-[.65] text-[#FFFFFF]/[0.8] "
          data-text="ABOUT OMEGA"
        >
          ABOUT OMEGA
        </h2>
        <p className="text-center mt-[120px] max-w-[1055px] px-[35px] max-sm:text-[12px] max-sm:mt-[54px]">
          {AboutData[0].about_mechack}
        </p>
      </div>
      <div
        id="about"
        className="flex flex-col items-center justify-center min-h-screen text-white mt-[120px]"
      >
        <h2
          className="text-center mirror-vertical font-bold font-orbitron font-700 xl:scale-100 text-6xl lg:scale-90 md:scale-75 scale-[.65] text-[#FFFFFF]/[0.8] "
          data-text="ABOUT IEEE"
        >
          ABOUT IEEE
        </h2>
        <p className="text-center mt-[120px] max-w-[1055px] px-[35px] max-sm:text-[12px] max-sm:mt-[54px]">
          {AboutData[0].about_ieee}
        </p>
      </div>
    </>
  );
};

export default About;
