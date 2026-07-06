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
    const url = new URL(window.location.href);

    if (url.pathname !== "/") {
      const target = new URL("/", url.origin);
      if (tabId !== "home") target.hash = tabId;
      window.location.href = target.toString();
      return;
    }

    setActiveTab(tabId);
    // Keep using hashes for tab UI
    url.hash = tabId; // preserve ?post=... etc.
    window.history.pushState({ tab: tabId }, "", url.toString());
  };

  useEffect(() => {

    const setTabFromLocation = () => {
      if (window.location.pathname.startsWith("/blog")) {
        setActiveTab("blog");
        return;
      }

      // Only honor known tab hashes; ignore footnote anchors
      const raw = window.location.hash.replace("#", "");
      if (VALID_TABS.has(raw)) setActiveTab(raw);
      else if (raw === "") setActiveTab("home");
    };

    setTabFromLocation();

    const handlePopState = () => {
      setTabFromLocation();
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
