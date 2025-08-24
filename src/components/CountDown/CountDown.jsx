"use client";
import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 160,
  strokeWidth: 10,
  trailColor: "transparent",
  strokeLinecap: "butt",
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="text-5xl font-extrabold time">{time}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CountDown() {
  const [initialTime, setInitialTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(Date.now() / 1000);

  useEffect(() => {
    const startTime = new Date("2024-07-25T00:00:00").getTime() / 1000;
    const endTime = new Date("2024-09-30T23:59:59").getTime() / 1000;
    const totalDuration = endTime - startTime;

    setInitialTime(totalDuration);

    const interval = setInterval(() => {
      setCurrentTime(Date.now() / 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (initialTime === null) {
    return null;
  }

  const remainingTime =
    initialTime -
    (currentTime - new Date("2024-07-25T00:00:00").getTime() / 1000);
  const daysDuration = Math.ceil(initialTime / daySeconds) * daySeconds;

  return (
    <div className="flex flex-col items-center justify-center w-screen lg:gap-32 md:gap-24  xl:gap-40 font-bold text-white font-orbitron xl:mt-[700px] lg:mt-[670px] sm:mt-[700px] mt-[600px] overflow-hidden">
      <div className="xl:scale-100 text-6xl lg:scale-90 md:scale-75 scale-[.65] ">
        <h2 data-text="COUNTDOWN" className="mirror-vertical leading-[60.19px]">
          COUNTDOWN
        </h2>
      </div>
      <div className="flex justify-around w-full md:gap-0 flex-wrap mt-16 sm:mt-0">
        <div className="flex flex-grow justify-around md:gap-0">
          <div className="flex flex-col items-center gap-10 lg:scale-90 xl:scale-100 md:scale-75 sm:scale-[.65] scale-75">
            <CountdownCircleTimer
              {...timerProps}
              colors={["#ffffff", "transparent"]}
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <div className="mt-2 text-3xl font-semibold ">DAYS</div>
          </div>
          <div className="flex flex-col items-center gap-10 lg:scale-90 xl:scale-100 md:scale-75 sm:scale-[.65] scale-75">
            <CountdownCircleTimer
              {...timerProps}
              colors={["#ffffff", "transparent"]}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={() => ({
                shouldRepeat: remainingTime > hourSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <div className="mt-2 text-3xl font-semibold">HOURS</div>
          </div>
        </div>
        <div className="flex justify-around flex-grow">
          <div className="flex flex-col items-center gap-10 lg:scale-90 xl:scale-100 md:scale-75 sm:scale-[.65] scale-75">
            <CountdownCircleTimer
              {...timerProps}
              colors={["#ffffff", "transparent"]}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime > minuteSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime(
                    " minutes",
                    getTimeMinutes(hourSeconds - elapsedTime)
                  )}
                </span>
              )}
            </CountdownCircleTimer>
            <div className="mt-2 text-3xl font-semibold">MINUTES</div>
          </div>
          <div className="flex flex-col items-center gap-10 lg:scale-90 xl:scale-100 md:scale-75 sm:scale-[.65] scale-75">
            <CountdownCircleTimer
              {...timerProps}
              colors={["#ffffff", "transparent"]}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime > 0,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("seconds", getTimeSeconds(elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <div className="mt-2 text-3xl font-semibold">SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
