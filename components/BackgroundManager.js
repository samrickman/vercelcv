"use client";

import { useState } from "react";
import { useDetailLevel } from "@/context/DetailLevelContext";
import ParticlesBackground from "@/components/particlesBackground";

export default function BackgroundManager() {
  const { detailLevel } = useDetailLevel();

  // Create exactly ONE instance of each background, so React never re-initializes them
  const [particlesEl] = useState(() => <ParticlesBackground />);
  const [pastoralEl] = useState(() => (
    <div className="absolute inset-0 bg-pastoral bg-cover bg-center"></div>
  ));

  // Decide which one to show
  const isPastoral = detailLevel === 0;
  return isPastoral ? pastoralEl : particlesEl;
}
