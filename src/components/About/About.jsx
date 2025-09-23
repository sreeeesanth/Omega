import React from "react";
import { AboutData } from "@/constants";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col items-center justify-center mt-40 mb-40  text-white"
      >
        <h2
          data-aos="fade-down"
          className="mirror-vertical text-center font-bold font-orbitron font-700 xl:scale-100 text-6xl lg:scale-90 md:scale-75 scale-[.65] text-[#FFFFFF]/[0.8] "
          data-text="ABOUT OMEGA"
        >
          ABOUT OMEGA
        </h2>
        <p data-aos="fade-up" className="text-center mt-[120px] leading-[2.5] max-w-[1055px] text-lg px-[35px] max-sm:text-[16px] max-sm:mt-[54px]">
          {AboutData[0].about_mechack}
        </p>
      </div>
      <div
        id="about"
        className="flex flex-col items-center justify-center mb-40 text-white "
      >
        <h2
          data-aos="fade-down"
          className="text-center mirror-vertical font-bold font-orbitron font-700 xl:scale-100 text-6xl lg:scale-90 md:scale-75 scale-[.65] text-[#FFFFFF]/[0.8] "
          data-text="ABOUT IEEE"
        > 
          ABOUT IEEE
        </h2>
        <p data-aos="fade-up" className="text-center mt-[120px] leading-[2.5] max-w-[1055px] text-lg px-[35px] max-sm:text-[16px] max-sm:mt-[54px]">
          {AboutData[0].about_ieee}
        </p>
      </div>
    </>
  );
};

export default About;
