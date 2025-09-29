"use client";

import { useDetailLevel } from "@/context/DetailLevelContext";
import CVDefault from "./CVDefault";
import CVDetailed from "./CVDetailed";
import CvDetailSlider from "./CvDetailSlider";
import CVEssentials from "./CVEssentials";
import CVHackerTerminal from "./CVHackerTerminal";
import CVPastoralMode from "./CVPastoralMode";

export default function CV({ handleTabChange }) {
  const { detailLevel } = useDetailLevel();
  
  const levels = [
    {
      name: "Pastoral Mode",
      content: (
        <>
          <CVPastoralMode />
        </>
      ),
    },
    {
      name: "Essentials",
      content: (
        <>
          <CVEssentials />
        </>
      ),
    },
    {
      name: "Default",
      content: (
        <>
          <CVDefault />
        </>
      ),
    },
    {
      name: "Detailed",
      content: (
        <>
          <CVDetailed handleTabChange={handleTabChange} />
        </>
      ),
    },
    {
      name: "Detailed",
      content: (
        <>
          <CVHackerTerminal />
        </>
      ),
    },
  ];

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <div className={`p-6 text-white rounded-lg ${detailLevel === 0 ? "bg-gray-200/0 dark:bg-gray-900/0" : "bg-gray-200 dark:bg-gray-900"}`}>
        <CvDetailSlider />
      </div>
      <div className={`relative opaque-bg ${detailLevel === 4 ? "z-10" : "z-1"}`}>{levels[detailLevel]?.content}</div>
    </section >
  );
}
