import React, { useState } from "react";
import { EventsData } from "@/constants";
import { red } from "@mui/material/colors";

const Events = () => {
  const [activeDay, setActiveDay] = useState("day1");

  return (
    <div
      id="Events"
      className="min-h-screen transition-all duration-75 z-20 flex flex-col justify-center items-center pt-[10px] max-sm:pt-[20px] px-[40px] max-sm:px-[27px]"
    >
      {/* Title */}
      <h1
        className="mirror-vertical mb-[50px] sm:mb-[100px] text-white text-[80px] leading-[75px] scale-[0.6] sm:scale-[0.8] lg:scale-100 font-[700] font-orbitron"
        data-text="Event Schedule"
      >
        Event Schedule
      </h1>

      {/* Day toggle buttons */}
      <div className="flex justify-center mb-8 z-50">
        <div className="bg-card/50 flex  transition-all duration-[1s] gap-4 text-white backdrop-blur-sm rounded-lg p-1 border border-border">
          <div
            className={`absolute  transition-all duration-[1s] bg-white bg-opacity-15 w-[45%] h-[85%]  rounded-lg ${
              activeDay === "day2"
                ? "left-[100%] translate-x-[-105%]"
                : "left-1"
            } `}
          ></div>
          <button
            onClick={() => setActiveDay("day1")}
            className={`p-3 ${activeDay === "day1" ? " text-white" : ""}`}
          >
            Day 1 | Oct 18
          </button>
          <button
            onClick={() => {
              setActiveDay("day2");
            }}
            className={`p-3 ${activeDay === "day2" ? "text-white" : ""}`}
          >
            Day 2 | Oct 19
          </button>
        </div>
      </div>

      {/* Schedule List */}
      <div className="w-full transition-all duration-[4s] max-w-3xl space-y-4">
        {EventsData[activeDay].map((event, index) => (
          <div
            key={index}
            className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <span className="text-white font-semibold text-primary">
                {event.time}
              </span>
              <span className="text-white font-medium">{event.title}</span>
              {event.venue && (
                <span className="text-sm text-white text-muted-foreground">
                  {event.venue}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
