"use client";

const TimelineSection = () => {
  const hackathonEvents = [
    { date: "4th October", title: "Registration Open", description: "Join us! Registration starts today. Secure your spot now." },
    { date: "5th October", title: "Registration Close", description: "Final chance! Registration ends soon. Don't miss out." },
    { date: "6th October", title: "Team Formation", description: "Form your dream team! Connect with fellow hackers and build amazing projects together." },
    { date: "7th October", title: "Problem Statement", description: "The challenges are revealed! Get ready to tackle exciting problems and showcase your skills." },
    { date: "21st October", title: "Hackathon Begins", description: "The main event starts! 24 hours of coding, creativity, and innovation await you." },
    { date: "22nd October", title: "Project Submission & Awards", description: "Time's up! Submit your amazing projects and celebrate the incredible solutions created." },
  ];

  return (
    <div id="timeline" className="relative flex flex-col items-center justify-center p-2 bg-black">
      <div className="m-auto container font-generalSans min-h-screen flex justify-center flex-col items-center pt-[100px]">
        <h2 className="text-center font-bold text-4xl lg:text-5xl text-white mb-16 tracking-wider">Timeline</h2>

        <div className="mt-[60px] relative w-[1500px] max-w-7xl h-[1300px]">
{/*          {/* Glow 
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 right-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-500 rounded-full blur-2xl"></div>
          </div>  
*/}



{/*  d="M 100 100 Q 275 100 450 100 Q 625 100 800 100 Q 950 150 900 300 Q 725 300 550 300 Q 375 300 100 300"*/}
          {/* Path */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 950 500" preserveAspectRatio="none">
            <path
              d="M45,5  770,5"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))" }}
            />

            <path
              d="M770,5  C1000,50  900,200  770,200"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))" }}
            />

            <path
              d="M770,200  130,200"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))" }}
            />

            <path
              d="M130,200 C-70,250 10,400  130,400"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))" }}
            />

            <path
              d="M130,400  900,400"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))" }}
            />


            {hackathonEvents.map((_, index) => {
              let x, y, lineEndY;

              if (index < 3) {
                y = 50;
                lineEndY = y - 45; // downward
                x = 190 + index * 270;
              } 
              else if (index >= 3 && index < 6) {
                x = 725 - (index - 3) * 270;
                y = 260;
                lineEndY = y - 60; // downward
              }


              return (
                <g key={index}>
                  <rect x={x - 6} y={y - 6} width={12} height={7} fill="#ffffff" />
                  <line x1={x} y1={y} x2={x} y2={lineEndY} stroke="#ffffff" strokeWidth="2" />
                </g>
              ); 
            })}
          </svg>

          {/* Cards */}
          <div className="relative z-10 w-full h-full">
            {hackathonEvents.map((event, index) => {
              let x, y, isTop;
              if (index < 3) {
                x = 260 + index * 355;
                y = 110; // top line end
                isTop = true;
              } else {
                x = 990 - (index - 3) * 370;
                y = 655; // bottom line end
                isTop = false;
              }

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y + 20}px`, // all cards hang below the line end
                    width: "310px",
                  }}
                >
                  <div className="h-[240px] bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-lg p-4 shadow-lg">
                    <div className="text-white/70 text-xs font-medium mb-2">{event.date}</div>
                    <h3 className="font-bold text-white text-sm mb-3">{event.title}</h3>
                    <p className="text-gray-300 text-xs">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </div>
  );
};

export default TimelineSection;