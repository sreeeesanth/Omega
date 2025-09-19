import {
  About,
  Contact,
  CountDown,
  Faq,
  Footer,
  LandingPage,
  Navbar,
  Rewards,
  Sponsors,
  Timeline,
} 
from "@/components";
import Image from "next/image";
import OmegaLogo from "@/assets/logos/OmegaLogo.png";

//uncomment the sponsorship component if needed
export default function Home() {
  return (
    <div className="relative h-screen w-screen  ">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mt-14 md: h-[420px] w-[400px] sm:h-[400px] w-[380px] shadow-xl relative ">
          <Image src={OmegaLogo} alt="Omega Logo" className="" fill />
        </div>
      </div>
      <Navbar />
      <div className="absolute -z-[10] mt-[320px] overflow-hidden">
        <div className=" max-sm:hidden"></div>
      </div>
      <LandingPage />
      <CountDown />
      <About />
      {/* <Sponsors /> */}
      <Rewards />
      <Timeline />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
