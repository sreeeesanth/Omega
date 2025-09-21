"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const timelineRef = useRef(null);

  const hackathonEvents = [
{
  date: "20th September",
  title: "Registration Opens",
  description: "Kick off your journey with Omega! Registrations are officially open secure your spot today.",
},
{
  date: "8th October",
  title: "Registration Closes",
  description: "Final chance to join the challenge. Don't miss out register before the deadline.",
},
{
  date: "18th October",
  title: "Omega Day 1: Micromouse Competition",
  description: "The battle of algorithms begins. Witness robots navigate mazes with precision and speed.",
},
{
  date: "18th October",
  title: "Omega Day 1: Robo Soccer",
  description: "Watch bots take the field in an electrifying match of strategy, teamwork, and skill.",
},
{
  date: "19th October",
  title: "Omega Day 1 & 2: Hardware Hackathon",
  description: "Innovators unite! Build, prototype, and showcase hardware solutions in just 24 hours.",
},
{
  date: "19th October",
  title: "Omega Day 2: Line Follower Competition",
  description: "Robots race against time, following tracks with flawless accuracy and speed.",
}


  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline",
        start: "top bottom-=100", // Start earlier
        end: "center center",
        scrub: 0.8,
        toggleActions: "play none none reverse",
      },
    });

    // Optimize path animations
    const paths = document.querySelectorAll("#timeline path");
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      tl.fromTo(
        path,
        {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0.2,
        },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2, // Faster duration
          ease: "power1.inOut",
        },
        index * 0.1 // Reduced stagger time
      );
    });

    // Earlier card animations
    const desktopCards = document.querySelectorAll(".desktop-timeline-card");
    desktopCards.forEach((card, index) => {
      tl.fromTo(
        card,
        {
          opacity: 0,
          y: 20, // Reduced initial offset
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4, // Faster animation
          ease: "back.out(1.2)",
        },
        index < 3 ? `<=${index * 0.15}` : `>-${0.15}` // Reduced delays
      );
    });

    // Enhanced mobile animations with staggered reveal
    const mobileCards = document.querySelectorAll(".mobile-timeline-card");
    const mobileConnectors = document.querySelectorAll(".mobile-connector");
    
    mobileCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50, // Alternate from left and right
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate mobile connectors
    mobileConnectors.forEach((connector, index) => {
      gsap.fromTo(
        connector,
        {
          height: "0%",
          opacity: 0,
        },
        {
          height: "100%",
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: connector,
            start: "top bottom-=50",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="timeline"
      className="relative flex flex-col items-center justify-center p-2"
    >
      <div className="m-auto container font-generalSans min-h-screen flex justify-center flex-col items-center pt-[100px]">
        <h2 className="text-center font-bold text-4xl lg:text-5xl text-white mb-16 tracking-wider">
          Timeline
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mt-[60px] relative w-full max-w-7xl h-[1300px]">
          {/* White Serpent Path (untouched) */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 950 500"
            preserveAspectRatio="none"
          >
            <path
              d="M45,5  770,5"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M770,5  C1000,50  900,200  770,200"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M770,200  130,200"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M130,200 C-70,250 10,400  130,400"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M130,400  900,400"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            {/* Event Dots */}
            {hackathonEvents.map((_, index) => {
              let x, y, lineEndY;

              if (index < 3) {
                y = 50;
                lineEndY = y - 45;
                x = 190 + index * 270;
              } else if (index >= 3 && index < 6) {
                x = 725 - (index - 3) * 270;
                y = 260;
                lineEndY = y - 60;
              }

              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill="white"
                    className="drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                  />
                  <line
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={lineEndY}
                    stroke="white"
                    strokeWidth="2"
                  />
                </g>
              );
            })}
          </svg>

          {/* Glassmorphism Cards */}
          <div className="relative z-10 w-full h-full">
            {hackathonEvents.map((event, index) => {
              let x, y;
              if (index < 3) {
                x = 260 + index * 355;
                y = 110;
              } else {
                x = 990 - (index - 3) * 370;
                y = 655;
              }

              return (
                <div
                  key={index}
                  className="desktop-timeline-card absolute transform -translate-x-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y + 20}px`,
                    width: "310px",
                  }}
                >
                  <div
                    className="
                      h-[240px] w-full
                      rounded-2xl
                      bg-white/5 backdrop-blur-xl
                      border border-white/20
                      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                      p-6 flex flex-col
                      transition-all duration-300
                      hover:scale-105 hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)] hover:border-white/40
                    "
                  >
                    <div className="text-white/70 text-xs uppercase tracking-wider mb-2">
                      {event.date}
                    </div>
                    <h3
                      className="
                        font-orbitron text-lg font-semibold
                        text-transparent bg-clip-text
                        bg-gradient-to-r from-white via-gray-300 to-white/60
                        mb-3
                      "
                    >
                      {event.title}
                    </h3>
                    <p className="font-inter text-sm text-white/80 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Mobile/Tablet Timeline */}
        <div className="lg:hidden w-full max-w-lg px-4 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"></div>
          
          {hackathonEvents.map((event, index) => (
            <div
              key={index}
              className="mobile-timeline-card relative mb-12 transform transition-all duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 z-10">
                <div className="w-4 h-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.4)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>

              {/* Connector Line to Card */}
              <div className="absolute left-12 top-10 w-8 h-0.5 bg-gradient-to-r from-white/40 to-white/10"></div>

              {/* Enhanced Card */}
              <div className="ml-20 relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent blur-xl"></div>
                
                <div
                  className="
                  relative rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/20
                  shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                  p-6 flex flex-col
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] 
                  hover:border-white/40
                  hover:bg-white/10
                  transition-all duration-500
                  group
                "
                >
                  {/* Date Badge */}
                  <div className="inline-block w-fit mb-4">
                    <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                      <div className="text-white/90 text-xs uppercase tracking-wider font-orbitron font-medium">
                        {event.date}
                      </div>
                    </div>
                  </div>

                  {/* Title with Enhanced Styling */}
                  <h3 className="font-orbitron text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white/80 group-hover:from-white group-hover:to-white transition-all duration-300">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {event.description}
                  </p>

                  {/* Subtle Animation Element */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-all duration-300"></div>
                </div>
              </div>

              {/* Connector to Next Item */}
              {index < hackathonEvents.length - 1 && (
                <div className="mobile-connector absolute left-7 bottom-[-20px] w-0.5 h-8 bg-gradient-to-b from-white/30 to-white/10"></div>
              )}
            </div>
          ))}

          {/* Bottom Fade */}
         
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;