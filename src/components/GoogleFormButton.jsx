"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GoogleFormButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleClick = () => {
    window.open("https://forms.gle/dhJdvLxezyezaFrr9", "_blank");
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="z-10 px-10 py-3 bg-[#d53232] text-white font-bold rounded-lg hover:bg-[#e32e2e] transition duration-300"
      >
        REGISTER NOW
      </button>
    </div>
  );
};

export default GoogleFormButton;
