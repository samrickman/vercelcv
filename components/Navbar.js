"use client";
import DarkModeToggle from "@/components/DarkModeToggle";


export default function Navbar({ activeTab, handleTabChange }) {
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
              onClick={() => {
                handleTabChange(tab.id);
              }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      <DarkModeToggle />
      </ul>
        
    </nav>
  );
}
