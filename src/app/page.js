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
  ParticlesBackground,
} from "@/components";
import MeshBG from "@/assets/bg/bg-mesh.png";
import MeshBGFlipped from "@/assets/bg/bg-mesh-flipped.png";
import MeshBGMobile from "@/assets/bg/bg-mesh-mobile.png";
import Image from "next/image";

//uncomment the sponsorship component if needed
export default function Home() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <div className="flex justify-center">
        <div
          className="absolute top-[-307px] bg-[#D9D9D9] h-[307px] w-screen"
          style={{ boxShadow: "0px 0px 2938.32px 0px #FFFFFF" }}
        />
      </div>
      <Navbar />
      <LandingPage />
      <CountDown />
      <About />
      {/* Timeline Section */}
      <div className="relative bg-[#b12020] text-white">
        <ParticlesBackground />
        <Timeline />
      </div>
      {/* Faq Section */}
      <div className="relative bg-[#b12020] text-white py-12">
        <ParticlesBackground />
        <Faq />
      </div>
      <Rewards />
      <Contact />
      <Footer />
    </div>
  );
}
