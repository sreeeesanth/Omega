import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex  text-[12px] relative items-center font-orbitron justify-center h-[100px] text-white font-500 sm:text-[20px] leading-[33px] text-center overflow-hidden">
        * IEEE MEC SB&nbsp;<span className="underline underline-offset-4">Robotics and Automation Society</span> &nbsp;*
        <div
          className="absolute bottom-[-407px] bg-[#D9D9D9] h-[307px] w-screen"
          style={{ boxShadow: "0px 0px 2938.32px 0px #FFFFFF" }}
        />
      </div>
    </>
  );
};

export default Footer;
