import React from "react";
import Image from "next/image";
import Profile from "@/assets/profile_pics/default.png";

const ContactCard = ({ name, position }) => {
  return (
    <div className="flex flex-col items-center justify-start max-sm:scale-[0.9] w-[302px] h-[392px] p-[11px] mb-[20px] rounded-[30px] relative bg-[#ffffff] z-20">
      <Image
        src={Profile}
        alt="Profile Picture"
        className="rounded-[30px] w-[279px] h-[256px] mb-[20px]"
      />
      <h2 className="font-600 text-[20px] tracking-[-0.5px] ml-2.5">{name}</h2>
      <h3 className="font-600 text-[20px] tracking-[-0.5px] opacity-80 ml-2.5">
        {position}
      </h3>
    </div>
  );
};

export default ContactCard;
