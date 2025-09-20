import React from "react";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col text-[12px] relative items-center font-orbitron justify-center h-[100px] text-white font-500 sm:text-[18px] leading-[33px] text-center overflow-hidden">
        <div className="mb-3">
          IEEE MEC SB&nbsp;<span className="underline underline-offset-4">Robotics and Automation Society</span> &nbsp;
        </div>
        
        {/* Social Media Buttons */}
        <div className="flex gap-4 z-10">
          <a
            href="https://www.linkedin.com/company/ieeemec"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/ieeemec/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} className="text-white" />
          </a>
        </div>
        
        <div
          className="absolute bottom-[-407px] h-[307px] w-screen"
          style={{ boxShadow: "0px 0px 2938.32px 0px #FFFFFF" }}
        />
      </div>
    </>
  );
};

export default Footer;