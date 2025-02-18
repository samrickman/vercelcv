"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStackOverflow, FaOrcid } from "react-icons/fa";
import Image from "next/image";
import Navbar from "../components/Navbar";
import About from "../components/About";
import CV from "../components/CV";
import Research from "../components/Research";
import Misc from "../components/Misc";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");


  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState({ tab: tabId }, "", "#" + tabId); // Add to history
  };

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab("home"); // Always go back to Welcome page when Back is pressed
      window.history.replaceState({ tab: "home" }, "", "#home"); // Prevent looping
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "cv":
        return <CV />;
      case "research":
        return <Research />;
      case "misc":
        return <Misc />;
      default:
        return (
          <section className="p-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold">Discover my work</h2>
            <p className="mt-4 text-lg">
              I’m a data scientist and AI researcher specialising in natural language processing (NLP) and machine learning for public services.
              My work focuses on using AI to extract insights from unstructured administrative care records, predicting population need, 
              and evaluating bias in large language models (LLMs) to promote fair and responsible use of AI.
            </p>
<p className="mt-4 text-gray-400">
  Find out more 
  <button 
    className="text-[#E6EDF3] font-semibold hover:underline ml-2" 
    onClick={() => handleTabChange("about")}
  >
    About Me
  </button>, or explore my 
  <button 
    className="text-[#E6EDF3] font-semibold hover:underline ml-2" 
    onClick={() => handleTabChange("research")}
  >
    Research
  </button>, and 
  <button 
    className="text-[#E6EDF3] font-semibold hover:underline ml-2 mr-2" 
    onClick={() => handleTabChange("cv")}
  >
    CV
  </button> 
  to learn more.
</p>

          </section>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar activeTab={activeTab} handleTabChange={handleTabChange} />

      {/* Header Section */}
      <header className="pt-20 p-6 text-center flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-600 mb-4 image-container">
          <Image src="/portrait4.png" alt="Sam Rickman" width={128} height={128} className="object-cover" />
        </div>
        <h1 className="text-4xl font-bold">Sam Rickman</h1>
        <p className="text-lg">Data Scientist | NLP Researcher | AI in Public Services</p>
      </header>

      {/* Content Section */}
      {renderContent()}

      {/* Footer */}
      <footer className="p-6 text-center">
        <div className="flex justify-center space-x-4 text-gray-400">
          <a href="https://github.com/samrickman" className="text-2xl"><FaGithub /></a>
          <a href="https://stackoverflow.com/users/12545041/samr" className="text-2xl"><FaStackOverflow /></a>
          <a href="https://orcid.org/0000-0003-1921-5258" className="text-2xl"><FaOrcid /></a>
        </div>
        <p className="text-sm text-gray-500 mt-2">© 2025 Sam Rickman</p>
      </footer>
    </div>
  );
}
