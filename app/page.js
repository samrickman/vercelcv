"use client";

import { useContext } from "react";
import About from "@/components/About";
import CV from "@/components/CV";
import Research from "@/components/Research";
import Misc from "@/components/Misc";
import { TabContext } from "@/components/NavbarWrapper";
import GenderBiasPresentation from "@/components/GenderBiasPresentation";
import LonelinessPresentation from "@/components/LonelinessPresentation";
import ContactFooter from "@/components/ContactFooter";
import FrontPageContent from "@/components/FrontPageContent";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  // retrieve activeTab and handleTabChange from our TabContext
  const { activeTab, handleTabChange } = useContext(TabContext);

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "cv":
        return <CV />;
      case "research":
        return <Research handleTabChange={handleTabChange}/>;
      case "misc":
        return <Misc />;
      case "genderbiaspresentation":
          return<GenderBiasPresentation />;
      case "lonelinesspresentation":
          return<LonelinessPresentation />;
      default:
        return (
          <FrontPageContent />

        );
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
