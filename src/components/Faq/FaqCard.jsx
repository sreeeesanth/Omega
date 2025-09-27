"use client";

import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";

const FaqCard = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  const [textActive, setTextActive] = useState(false);

  // Function to handle file downloads
  const handleDownload = (filename, displayName) => {
    const link = document.createElement("a");
    link.href = `/rules/${filename}`;
    link.download = `${displayName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Check if this is the competition rules question
  const isCompetitionRules =
    question === "What are the rules for the competition";

  return (
    <div className="relative w-[85vw]  transition-all duration-[1s] ease-in-out z-30 xl:w-[1080px] pt-[1px] pl-[1px] rounded-[14px]">
      <div
        className="absolute inset-0  transition-all duration-[1s] ease-in-out bg-gradient-to-br from-[rgba(248,241,241,0.44)] to-transparent rounded-[14px] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        onClick={() => {
          if (!active) {
            setTextActive((prev) => !prev);
          } else {
            setTimeout(() => {
              setTextActive((prev) => !prev);
            }, 1000); // 1.5s delay
          }
          setActive(!active);
        }}
        className={`relative cursor-pointer  transition-all duration-[1s] ease-in-out w-full px-[25px] pt-[20px] rounded-[14px] ${
          !active ? "pb-[20px]" : ""
        }`}
      >
        <div className="transition-all duration-[1s] ease-in-out flex items-center justify-between">
          <p className="transition-all duration-[1s] ease-in-out text-[15px] text-[#ffffff] font-500 font-poppins sm:text-[18px] w-10/12 tracking-[-0.2px] leading-tight">
            {question}
          </p>
          <button
            onClick={() => {
              if (!active) {
                setTextActive((prev) => !prev);
              } else {
                setTimeout(() => {
                  setTextActive((prev) => !prev);
                }, 1000); // 1.5s delay
              }
              setActive(!active);
            }}
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
            <div className="w-11/12">
              <p className="transition-all duration-[1s] ease-in-out text-[#ffffff] text-[15px] sm:text-[18px] tracking-[-0.2px] leading-tight">
                {isCompetitionRules
                  ? "Competition Rules: "
                  : textActive && answer}
              </p>

              {/* Download buttons for competition rules */}
              {isCompetitionRules && (
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() =>
                      handleDownload(
                        "Line_Follower RuleBook.pdf",
                        "Line_Follower RuleBook"
                      )
                    }
                    className="z-40 px-10 py-5 m-2 bg-[#d53232] text-white font-bold rounded-lg hover:bg-[#e32e2e] hover:scale-[110%] transition duration-300"
                  >
                    📄 Download Rules Of Line Follower
                  </button>
                  <button
                    onClick={() =>
                      handleDownload(
                        "MazeSolver Rulebook.pdf",
                        "MazeSolver Rulebook"
                      )
                    }
                    className="z-40 px-10 py-5 m-2 bg-[#d53232] text-white font-bold rounded-lg hover:bg-[#e32e2e] hover:scale-[110%] transition duration-300 "
                  >
                    📄 Download Rules Of Maze Solver
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
