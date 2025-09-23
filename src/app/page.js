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
import GoogleFormButton from "@/components/GoogleFormButton";

//uncomment the sponsorship compīonent if needed
export default function Home() {
  return (
    <div className="relative min-h-screen w-screen  ">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center  ">
          <Image src={OmegaLogo} alt="Omega Logo" className="mt-14 md: h-[400px] w-[400px] sm:h-[400px] w-[380px]  relative z-30" fill />
        </div>
      </div>
      <GoogleFormButton />
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
      <div className="mb-24">
        <GoogleFormButton />
      </div>
      <Footer />
    </div>
  );
}