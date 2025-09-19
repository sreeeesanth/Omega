"use client";

import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";

const FaqCard = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-[85vw] z-30 xl:w-[1080px] pt-[1px] pl-[1px] rounded-[14px]">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[rgba(248,241,241,0.44)] to-transparent rounded-[14px] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className={`relative  transition-all duration-400 ease-in-out w-full px-[25px] pt-[20px] rounded-[14px] ${
          !active ? "pb-[20px]" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-[15px] text-[#ffffff] font-500 font-poppins sm:text-[18px] w-10/12 tracking-[-0.2px] leading-tight">
            {question}
          </p>
          <button
            onClick={() => setActive(!active)}
            className="w-1/12 sm:mr-[-10px] md:mr-[-30px] lg:mr-[-50px]"
          >
            <span className={`text-[25px] text-[#ffffff]/50`}>
              <GrFormAdd
                className={`transform cursor-pointer transition-transform duration-500 ease-in-out ${
                  active ? "rotate-45" : "rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
        <div
          className={`transition-all duration-400 ease-in-out ${
            active ? "max-h-[50vh] opacity-100 mt-[18px]" : "max-h-0 opacity-0"
          }`}
        >
          <div className="w-full py-[16px] flex items-center justify-left">
            <p className="text-[#ffffff] w-11/12 text-[15px] sm:text-[18px] tracking-[-0.2px] leading-tight">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
