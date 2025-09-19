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
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-10-17T23:59:59").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const timeLeft = Math.max(0, Math.floor((targetDate - now) / 1000));
      setRemainingTime(timeLeft);
    };

    // Initial calculation
    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (remainingTime <= 0) {
    return (
      <div className="flex flex-col items-center justify-center w-screen font-bold text-white font-orbitron xl:mt-[700px] lg:mt-[670px] sm:mt-[700px] mt-[600px]">
        <h2 className="text-6xl">Event has started!</h2>
      </div>
    );
  }
  const daysDuration = Math.ceil(remainingTime / daySeconds) * daySeconds;
  const days = getTimeDays(remainingTime);
  const hours = getTimeHours(remainingTime);
  const minutes = getTimeMinutes(remainingTime);
  const seconds = remainingTime % 60;

  return (
    <div className="flex flex-col items-center justify-center w-screen lg:gap-32 md:gap-24  xl:gap-40 font-bold text-white font-orbitron xl:mt-[120px] lg:mt-[100px] sm:mt-[100px] mt-[130px] overflow-hidden">
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
              duration={daysDuration || daySeconds}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>{renderTime("days", days)}</span>
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
                <span style={{ color }}>{renderTime("hours", hours)}</span>
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
                <span style={{ color }}>{renderTime("minutes", minutes)}</span>
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
                <span style={{ color }}>{renderTime("seconds", seconds)}</span>
              )}
            </CountdownCircleTimer>
            <div className="mt-2 text-3xl font-semibold">SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
