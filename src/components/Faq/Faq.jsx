import React from "react";
import FaqCard from "./FaqCard";
import { FaqData } from "@/constants";

const Faq = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex flex-col justify-center items-center pt-[168px] max-sm:pt-[80px] px-[40px] max-sm:px-[27px]"
    >
      <h1
        className="mirror-vertical mb-[50px] sm:mb-[100px] text-white text-[80px] leading-[75px] scale-[0.6] sm:scale-[0.8] lg:scale-100 font-[700] font-orbitron"
        data-text="F.A.Q"
      >
        F.A.Q
      </h1>
      {FaqData.map((data, i) => (
        <div className="mb-[10px] sm:mb-[16px]" data-aos="fade-right" key={i}>
          <FaqCard question={data.question} answer={data.answer} />
        </div>
      ))}
    </div>
  );
};

export default Faq;
