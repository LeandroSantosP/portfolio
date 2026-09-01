import { useEffect, useMemo, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { IPaint, ISourceOptions } from "@tsparticles/engine";

const initParticles = async (engine: import("@tsparticles/engine").Engine) => {
  await loadSlim(engine);
};

function buildNodePaint(dark: boolean): IPaint {
  return {
    fill: {
      enable: true,
      color: {
        value: dark
          ? ["#f5f0e0", "#e8e0c8", "#d9d0b5"]
          : ["#a9a291", "#b4ad9c", "#bfb8a7"],
      },
    },
  };
}

function useThemeMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark"
    );
  });

  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() =>
      setDark(el.classList.contains("dark"))
    );
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return dark;
}

export default function ParticlesBackground() {
  const dark = useThemeMode();
  const isLight = !dark;

  const options = useMemo<ISourceOptions>(() => ({
    fullScreen: false,
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: {
        value: isLight ? 130 : 90,
        density: { enable: true, width: 1200, height: 900 },
      },
      paint: buildNodePaint(dark),
      shape: { type: "circle" },
      opacity: {
        value: isLight ? { min: 0.8, max: 1 } : { min: 0.35, max: 0.7 },
      },
      size: {
        value: isLight ? { min: 2.5, max: 5 } : { min: 1.5, max: 3.5 },
      },
      links: {
        enable: true,
        distance: 150,
        color: isLight ? "#d4af37" : "#b8860b",
        opacity: isLight ? 0.6 : 0.5,
        width: isLight ? 1.4 : 1.2,
      },
      move: {
        enable: true,
        speed: 1.1,
        outModes: { default: "out" },
      },
    },
    responsive: [
      {
        maxWidth: 767,
        options: {
          particles: {
            number: {
              value: 45,
              density: { enable: true, width: 700, height: 700 },
            },
            links: {
              distance: 100,
              width: 1,
            },
            move: {
              speed: 0.9,
            },
          },
        },
      },
    ],
  }), [dark, isLight]);

  return (
    <ParticlesProvider init={initParticles}>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <Particles
          key={dark ? "dark" : "light"}
          id="tsparticles-bg"
          className="h-full w-full"
          options={options}
        />
      </div>
    </ParticlesProvider>
  );
}