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
} from "@/components";
import MeshBG from "@/assets/bg/bg-mesh.png";
import MeshBGFlipped from "@/assets/bg/bg-mesh-flipped.png";
import MeshBGMobile from "@/assets/bg/bg-mesh-mobile.png";
import Image from "next/image";

//uncomment the sponsorship component if needed
export default function Home() {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <div
          className="absolute top-[-307px] bg-[#D9D9D9] h-[307px] w-screen"
          style={{ boxShadow: "0px 0px 2938.32px 0px #FFFFFF" }}
        />
      </div>
      <Navbar />
      <div className="absolute -z-[10] mt-[320px] overflow-hidden">
        <div className=" max-sm:hidden">
          <Image
            src={MeshBG}
            alt="Mesh Background"
            className="relative w-screen"
          />
          <Image
            src={MeshBG}
            alt="Mesh Background Flipped"
            className="relative w-screen scale-[-1] top-0"
          />
        </div>
        <div className="sm:hidden">
          <Image
            src={MeshBGMobile}
            alt="Mesh Background"
            className="relative w-screen h-[350px]"
          />
          <Image
            src={MeshBGFlipped}
            alt="Mesh Background Flipped"
            className="relative w-screen h-[30px]"
          />
        </div>
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
