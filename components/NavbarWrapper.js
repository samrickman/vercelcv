// NavbarWrapper.js
"use client";

import { useDetailLevel } from "@/context/DetailLevelContext";
import { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";

export const TabContext = createContext({
  activeTab: "home",
  handleTabChange: () => {},
});

export default function NavbarWrapper({ children }) {
  const [activeTab, setActiveTab] = useState("home");
  const { detailLevel, setDetailLevel } = useDetailLevel();

  const handleTabChange = (tabId) => {
    setDetailLevel(2);
    setActiveTab(tabId);

    const url = new URL(window.location.href);
    // if leaving blog tab, clear ?post to avoid getting forced back
    if (tabId !== "blog") {
      url.searchParams.delete("post");
    }
    // keep using hashes for tab UI
    url.hash = tabId;
    window.history.pushState({ tab: tabId }, "", url.pathname + (url.search ? "?" + url.searchParams.toString() : "") + url.hash);
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
      <Navbar activeTab={activeTab} handleTabChange={handleTabChange} />
      {children}
    </TabContext.Provider>
  );
}
