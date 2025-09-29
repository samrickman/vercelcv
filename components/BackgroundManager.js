"use client";

import ParticlesBackground from "@/components/particlesBackground";
import { useDetailLevel } from "@/context/DetailLevelContext";
import { useState } from "react";

export default function BackgroundManager() {
  const { detailLevel } = useDetailLevel();

  // Create exactly ONE instance of each background, so React never re-initializes them
  const [particlesEl] = useState(() => <ParticlesBackground />);
  const [pastoralEl] = useState(() => (
    <div className="fixed inset-0 z-[-20] pointer-events-none bg-pastoral bg-cover bg-center"></div>
  ));

  // Decide which one to show
  const isPastoral = detailLevel === 0;
  return isPastoral ? pastoralEl : particlesEl;
}
