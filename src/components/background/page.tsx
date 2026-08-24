"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 h-full w-full"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, area: 900 } },
          color: { value: ["#e85d04", "#ff7a1a"] },
          shape: { type: "circle" },
          opacity: { value: { min: 0.1, max: 0.4 } },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            distance: 120,
            color: "#e85d04",
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: true,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 120, links: { opacity: 0.35 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
