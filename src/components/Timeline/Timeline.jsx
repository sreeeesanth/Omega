"use client";

import TimelineCard from "./TimelineCard";
import { TimelineData } from "@/constants";
import { timelineItemClasses } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";

const TimelineSection = () => {
  return (
    <div
      id="timeline"
      className="relative flex flex-col items-center justify-center min-h-screen p-2 text-white"
    >
      <div className="m-auto container font-generalSans min-h-screen flex justify-center flex-col items-center pt-[100px] text-our_white">
        <h2
          className="mirror-vertical text-center font-bold font-orbitron font-700 xl:scale-100 text-6xl lg:scale-90 md:scale-75 scale-[.65] text-[#FFFFFF]/[0.8] "
          data-text="TIMELINE"
        >
          TIMELINE
        </h2>
        <div
          className="mt-[140px] w-[900px] max-lg:w-[800px] max-md:w-[500px] max-sm:w-[350px] md:scale-110 max-sm:mt-[54px]"
          data-aos="zoom-in-up"
        >
          <Timeline position="alternate-reverse" className="max-md:hidden">
            {TimelineData.map((item, index) => (
              <TimelineCard
                item={item}
                key={index}
                index={index}
                mobile={false}
              />
            ))}
          </Timeline>

          {/* timeline for smaller devices */}
          <Timeline
            position="right"
            className="md:hidden"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {TimelineData.map((item, index) => (
              <TimelineCard
                item={item}
                key={index}
                index={index}
                mobile={true}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
