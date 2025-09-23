"use client";

import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";

const FaqCard = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-[85vw]  transition-all duration-[1s] ease-in-out z-30 xl:w-[1080px] pt-[1px] pl-[1px] rounded-[14px]">
      <div
        className="absolute inset-0  transition-all duration-[1s] ease-in-out bg-gradient-to-br from-[rgba(248,241,241,0.44)] to-transparent rounded-[14px] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        onClick={() => setActive(!active)}
        className={`relative cursor-pointer  transition-all duration-[1s] ease-in-out w-full px-[25px] pt-[20px] rounded-[14px] ${
          !active ? "pb-[20px]" : ""
        }`}
      >
        <div className="transition-all duration-[1s] ease-in-out flex items-center justify-between">
          <p className="transition-all duration-[1s] ease-in-out text-[15px] text-[#ffffff] font-500 font-poppins sm:text-[18px] w-10/12 tracking-[-0.2px] leading-tight">
            {question}
          </p>
          <button
            onClick={() => setActive(!active)}
            className="transition-all duration-[1s] ease-in-out w-1/12 sm:mr-[-10px] md:mr-[-30px] lg:mr-[-50px]"
          >
            <span
              className={`transition-all duration-[1s] ease-in-out text-[25px] text-[#ffffff]/50`}
            >
              <GrFormAdd
                className={` duration-[1s] transform cursor-pointer transition-transform ease-in-out ${
                  active ? "rotate-45" : "rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
        <div
          className={` transition-all duration-[1s] ease-in-out ${
            active ? "max-h-[60vh] opacity-100 mt-[18px]" : "max-h-0 opacity-0"
          }`}
        >
          <div className="transition-all duration-[1s] ease-in-out w-full py-[16px] flex items-center justify-left">
            <p className="transition-all duration-[1s] ease-in-out text-[#ffffff] w-11/12 text-[15px] sm:text-[18px] tracking-[-0.2px] leading-tight">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
