"use client";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [options, setOptions] = useState(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initialize tsparticles engine
    initParticlesEngine(async (engine) => {
      console.log("Initializing particles engine...");
      await loadSlim(engine);
    }).then(() => {
      console.log("Particles engine initialized");
      setInit(true);
    });

    // Fetch JSON options dynamically
    fetch("/particlesConfig.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Loaded particles config:", data);
        setOptions(data);
      })
      .catch((error) => console.error("Error loading particles config:", error));

    // ✅ Listen for global updates from the terminal
    const handleParticleUpdate = (event) => {
      console.log("Updating particles config from terminal:", event.detail);

      setOptions((prevOptions) => {
        const updatedOptions = deepMerge(prevOptions, event.detail);
        console.log("Updated options:", updatedOptions);
        return { ...updatedOptions };
      });
    };

    window.addEventListener("updateParticles", handleParticleUpdate);

    return () => {
      window.removeEventListener("updateParticles", handleParticleUpdate);
    };
  }, []);

  return init && options ? <Particles id="tsparticles" options={options} /> : null;
}

// ✅ Utility function for deep merging nested objects
function deepMerge(target, source) {
  const output = { ...target };

  Object.keys(source).forEach((key) => {
    if (
      typeof source[key] === "object" &&
      source[key] !== null &&
      !Array.isArray(source[key])
    ) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  });

  return output;
}
