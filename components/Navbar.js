"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./particlesBackground";

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "cv", label: "CV" },
    { id: "research", label: "Research" },
    { id: "misc", label: "Misc" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list flex space-x-4 p-4">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={`nav-button ${activeTab === tab.id ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
        <ParticlesBackground />
    </nav>
  );
}
