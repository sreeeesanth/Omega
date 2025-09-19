"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Calendar from "@/assets/landing_page/calendar.png";
import Location from "@/assets/landing_page/location.png";
import { gsap } from "gsap";

const LandingPage = () => {
  const calendarRef = useRef(null);
  const locationRef = useRef(null);

  // code for devfolio button
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Animations
    gsap.fromTo(
      calendarRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: calendarRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      locationRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: locationRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleButtonClick = () => {
    window.open("https://forms.gle/exampleGoogleFormLink", "_blank"); // Replace with your actual link
  };

  return (
    <div id="home" >
      <div className="flex flex-col justify-center items-center ">
                <div className="text-[128px] scale-[0.45] max-sm:text-[30vw] sm:scale-[0.75] lg:scale-[0.85] font-[700] text-white font-[anybody] max-sm:mb-[100px] ">
          
        </div>
        <div className="flex flex-row gap-[20px] [@media(max-width:1050px)]:gap-[20px] sm:gap-[40px] sm:mt-[80px] max-sm:mt-[-10vw] justify-center items-center w-full" style={{ marginTop: 'clamp(120px, 20vw, 180px)' }}>
          {/* Calendar row */}
          <div ref={calendarRef} className="flex flex-row items-center gap-[16px] justify-center w-full [@media(max-width:1050px)]:flex-col [@media(max-width:1050px)]:gap-[8px] [@media(max-width:1050px)]:items-center">
            <Image
              src={Calendar}
              alt="Calendar Icon"
              className="invert brightness-0 w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] lg:w-[62px] lg:h-[62px]"
            />
            <p className="text-white font-orbitron text-[15px] sm:text-[32px] scale-[0.70] lg:scale-[0.85] xl:scale-100 font-[700] text-center sm:text-left">
              OCTOBER 18,19
            </p>
          </div>
          {/* Location row */}
          <div ref={locationRef} className="flex flex-row items-center gap-[16px] justify-center w-full [@media(max-width:1050px)]:flex-col [@media(max-width:1050px)]:gap-[8px] [@media(max-width:1050px)]:items-center">
            <Image
              src={Location}
              alt="Location Icon"
              className="invert brightness-0 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] lg:w-[48px] lg:h-[48px]"
            />
            <p className="text-white font-orbitron text-[10px] sm:text-[25px] scale-[0.70] lg:scale-[0.85] xl:scale-100 font-[700] text-center sm:text-left">
              Govt. Model Engineering College, Thrikkakara
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;