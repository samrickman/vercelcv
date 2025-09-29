"use client";

import About from "@/components/About";
import BlogViewer from '@/components/BlogViewer';
import ContactFooter from "@/components/ContactFooter";
import CV from "@/components/CV";
import FrontPageContent from "@/components/FrontPageContent";
import GenderBiasPresentation from "@/components/GenderBiasPresentation";
import LonelinessPresentation from "@/components/LonelinessPresentation";
import Misc from "@/components/Misc";
import { TabContext } from "@/components/NavbarWrapper";
import PageHeader from "@/components/PageHeader";
import Research from "@/components/Research";
import { useContext, useEffect, useRef } from "react";

export default function Home() {
  const { activeTab, handleTabChange } = useContext(TabContext);
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    // only on first client render: if ?post= exists, go to blog
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("post")) {
      handleTabChange("blog");
    }
  }, [handleTabChange]);
  
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "cv":
        return <CV handleTabChange={handleTabChange} />;
      case "research":
        return <Research handleTabChange={handleTabChange} />;
      case "misc":
        return <Misc />;
      case "blog":
        return <BlogViewer />;
      case "genderbiaspresentation":
        return <GenderBiasPresentation />;
      case "lonelinesspresentation":
        return <LonelinessPresentation />;
      default:
        return <FrontPageContent handleTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen">
      <PageHeader />
      {renderContent()}
      <ContactFooter />
    </div>
  );
}
