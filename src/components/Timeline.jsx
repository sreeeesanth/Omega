import React from "react";

const Timeline = () => {
  return (
    <div className="relative z-10 py-12 bg-red-500">
      <h2 className="text-center text-4xl font-bold mb-8 text-white">
        Event Timeline
      </h2>
      <div className="flex flex-col items-center gap-8">
        {/* Example timeline items */}
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <p className="text-lg text-white">Day 1: Opening Ceremony</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <p className="text-lg text-white">Day 2: Hackathon Begins</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <p className="text-lg text-white">Day 3: Closing Ceremony</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
