"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";
import { loadSlim } from "tsparticles-slim";

// dynamic import to avoid SSR issues
const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: false,
  loading: () => <></>,
});

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine);
    } catch (e) {
      console.error("tsparticles load error", e);
    }
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 }, // explicitly set zIndex to -1
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 170, density: { enable: true, area: 800 } },
      color: { value: "#cc1d30" },
      links: {
        enable: true,
        distance: 120,
        color: "#fff",
        opacity: 0.09,
        width: 1,
      },
      opacity: {
        value: 0.5,
        random: { enable: true, minimumValue: 0.5 },
      },
      size: { value: { min: 1, max: 6  }, random: true },
      shape: { type: "circle" },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="fixed inset-0 z-10"
    />
  );
}
