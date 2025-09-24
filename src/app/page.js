"use client";  // 👈 Add this at the very top

import {
  About,
  Contact,
  CountDown,
  Events,
  Faq,
  Footer,
  LandingPage,
  Navbar,
  Rewards,
  Sponsors,
  Timeline,
} from "@/components";
import Image from "next/image";
import OmegaLogo from "@/assets/logos/OmegaLogo.png";
import GoogleFormButton from "@/components/GoogleFormButton";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative min-h-screen w-screen">
      <Navbar />
      <div className="flex justify-center items-center">
        <div data-aos="zoom-in" className="flex justify-center items-center">
          <div className="relative h-[400px] w-[400px] sm:h-[380px] sm:w-[380px] z-30">
            <Image
              src={OmegaLogo}
              alt="Omega Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <GoogleFormButton />
      <div className="absolute -z-[10] mt-[320px] overflow-hidden">
        <div className="max-sm:hidden"></div>
      </div>
      <LandingPage />
      <CountDown />
      <About />
      {/* <Sponsors /> */}
      <Rewards />
      <Timeline />
      <Events/>

      <Faq />
      <Footer />
    </div>
  );
}
