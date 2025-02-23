"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useDetailLevel } from "@/context/DetailLevelContext";

/** 
 * TabContext allows any child component to access `activeTab` and `handleTabChange`.
 */
export const TabContext = createContext({
  activeTab: "home",
  handleTabChange: () => {},
});

/**
 * NavbarWrapper holds the tab state and the logic to handle tab changes.
 * It provides this state to any children via the TabContext provider.
 */
export default function NavbarWrapper({ children }) {
  const [activeTab, setActiveTab] = useState("home");

  // so we can automatically move out of pastoral mode
  // if the user changes tab
  const { detailLevel, setDetailLevel } = useDetailLevel();
  const handleTabChange = (tabId) => {
    setDetailLevel(2);
    setActiveTab(tabId);
    window.history.pushState({ tab: tabId }, "", "#" + tabId);
  };

  useEffect(() => {
    const tabFromUrl = window.location.hash.replace("#", "");
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }

    const handlePopState = () => {
      const tabFromUrl = window.location.hash.replace("#", "") || "home";
      setActiveTab(tabFromUrl);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <TabContext.Provider value={{ activeTab, handleTabChange }}>
      {/* Navbar has direct access to activeTab/handleTabChange via props */}
      <Navbar activeTab={activeTab} handleTabChange={handleTabChange} />

      {/* All the rest of the site (Particles + pages) can read from TabContext if needed */}
      {children}
    </TabContext.Provider>
  );
}
