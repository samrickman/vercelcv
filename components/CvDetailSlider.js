"use client";

import { useState } from "react";
import { useDetailLevel } from "@/context/DetailLevelContext";

export default function CvDetailSlider() {
  const { detailLevel, setDetailLevel } = useDetailLevel();

  const levels = [
    { name: "Pastoral Mode", description: "" },
    { name: "Essentials", description: "Less detail, focused on skills and impact." },
    { name: "Default", description: "Balanced mix of technical and impact-driven details." },
    { name: "Detailed", description: "Deep technical dive, tools, and infrastructure." },
    { name: "Hacker", description: "Not for the faint of heart." },
  ];

  const [hoveredLevel, setHoveredLevel] = useState(null);

  const handleChange = (e) => {
    const newLevel = Number(e.target.value);
    setDetailLevel(newLevel); // Update global context
  };

  return (
    <div className="p-4 bg-gray-100 text-black dark:bg-gray-800 dark:text-white rounded-lg border-white relative">
      <h3 className="text-lg font-semibold mb-4 text-center">CV detail level</h3>

      {/* Slider Wrapper */}
      <div className="relative w-full flex flex-col items-center z-[2]">
        {/* Slider Bar */}
        <input
          type="range"
          min="0"
          max={levels.length - 1}
          step="1"
          value={detailLevel}
          onChange={handleChange}
          onMouseMove={(e) => setHoveredLevel(Number(e.target.value))}
          onMouseLeave={() => setHoveredLevel(null)}
          className="w-full appearance-none bg-transparent cursor-pointer z-[1]"
          style={{
            WebkitAppearance: "none",
            outline: "none",
          }}
        />

        {/* Custom Track */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-blue-400 rounded-full -translate-y-1/2 z-[0]"></div>

        {/* Labels */}
        <div className="absolute top-full left-0 w-full mt-1 flex justify-between">
          {levels.map((lvl, idx) => (
            <div key={idx} className="w-1/5 flex flex-col items-center">
              <span
                className={`transition-all duration-100 font-medium transform ${hoveredLevel === idx || detailLevel === idx ? "opacity-100 text-lg scale-110" : "opacity-50 text-sm scale-100"
                  }`}
              >
                {lvl.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Level Display */}
      <div className="mt-10 text-center">
        <p className="text-gray-400">{levels[detailLevel].description}</p>
      </div>
    </div>
  );
}
