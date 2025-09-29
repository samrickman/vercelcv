// NavbarWrapper.js
"use client";

import { useDetailLevel } from "@/context/DetailLevelContext";
import { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";

export const TabContext = createContext({
  activeTab: "home",
  handleTabChange: () => { },
});

export default function NavbarWrapper({ children }) {
  const [activeTab, setActiveTab] = useState("home");
  const { detailLevel, setDetailLevel } = useDetailLevel();


  const VALID_TABS = new Set([
    "home",
    "about",
    "cv",
    "research",
    "misc",
    "blog",
    "genderbiaspresentation",
    "lonelinesspresentation",
  ]);

  const handleTabChange = (tabId) => {
    setDetailLevel(2);
    setActiveTab(tabId);
    // Keep using hashes for tab UI
    const url = new URL(window.location.href);
    url.hash = tabId; // preserve ?post=... etc.
    window.history.pushState({ tab: tabId }, "", url.toString());
  };

  useEffect(() => {

    // On mount, only honor known tab hashes; ignore footnote anchors
    const raw = window.location.hash.replace("#", "");
    if (VALID_TABS.has(raw)) setActiveTab(raw);

    const handlePopState = () => {

      const raw = window.location.hash.replace("#", "");
      if (VALID_TABS.has(raw)) {
        setActiveTab(raw);
      }
      // Otherwise ignore non-tab hashes (e.g., #user-content-fn-1)
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <TabContext.Provider value={{ activeTab, handleTabChange }}>
      <Navbar activeTab={activeTab} handleTabChange={handleTabChange} />
      {children}
    </TabContext.Provider>
  );
}
