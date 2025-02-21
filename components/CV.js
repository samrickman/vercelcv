"use client";

import { useDetailLevel } from "@/context/DetailLevelContext";
import CvDetailSlider from "./CvDetailSlider";
import CVDefault from "./CVDefault";
import CVEssentials from "./CVEssentials";
import CVDetailed from "./CVDetailed";
import CVHackerTerminal from "./CVHackerTerminal";
import CVPastoralMode from "./CVPastoralMode";

export default function CV({ handleTabChange }) {
  const { detailLevel } = useDetailLevel();
  console.log("detailLevel: ", detailLevel === 4);
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
      <div className="p-6 bg-gray-200 dark:bg-gray-900 text-white rounded-lg">
        <CvDetailSlider />
      </div>
      <div className={`relative ${detailLevel === 4 ? "z-10" : "z-1"}`}>{levels[detailLevel]?.content}</div>
    </section >
  );
}
