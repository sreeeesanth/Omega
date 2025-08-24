'use client';
import React from "react";
import Image from "next/image";
import { RewardsData } from "@/constants/index";

const Rewards = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen text-white"
    >
      <h2
        className="mirror-vertical text-center font-bold font-orbitron font-700 xl:scale-100 text-6xl lg:scale-90 md:scale-75 scale-[.65] text-[#FFFFFF]/[0.8]"
        data-text="PRIZES"
      >
        PRIZES
      </h2>
      <div className="flex md:flex-row mt-[140px] gap-[160px] flex-col max-sm:m-[54px] max-sm:gap-[45px] px-[50px]">
        {RewardsData.map((reward, index) => (
          <div className="text-center" key={index}>
            <Image
              src={reward.imageSrc}
              alt={reward.prizeName}
              className="sm:w-[230px] max-sm:w-[145px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
