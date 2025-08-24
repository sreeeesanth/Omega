import React from "react";
import Card from "./ProfileCard";

import { SponsorsData } from "@/constants";

const Sponsors = () => {
  return (
    <>
      <div
        id="sponsors"
        className="flex items-center justify-center min-h-screen text-white flex-col font-orbitron font-700 text-[48px] leading-[60.19px] py-[100px] text-[#FFFFFF]/[0.8]"
      >
        <h2
          className="text-center font-[Orbitron] font-bold px-[20px] mirror-vertical xl:scale-100 text-6xl lg:scale-90 md:scale-75 scale-[.65]"
          data-text="OUR SPONSORS"
        >
          OUR SPONSORS
        </h2>
        <div className="gap-[74px] grid grid-cols-1 px-[20px] mx-auto w-fit mt-[140px] max-md:grid-cols-2 max-md:gap-[40px] sm:grid-cols-2 lg:grid-cols-3 max-sm:mt-[60px]">
          {SponsorsData.map((sponsor, index) => (
            <Card
              key={index}
              altText={sponsor.altText}
              imgSrc={sponsor.imgSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
