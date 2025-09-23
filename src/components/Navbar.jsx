"use client";
import Image from "next/image";
import IeeeLogo from "@/assets/logos/ieee.png";
import RASLogo from "@/assets/logos/ras.png";
import { NavbarItems } from "@/constants";
import { useParams } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

export default function Nav() {
  return (
    <nav className="w-screen fixed top-0 left-0 h-[77px] z-10 bg-transparent flex items-center justify-between px-6">
      
      <Image src={IeeeLogo} alt="ieee" width={82} height={82} />

      
      <Image src={RASLogo} alt="ras" width={112} height={112} />
    </nav>
  );
}
