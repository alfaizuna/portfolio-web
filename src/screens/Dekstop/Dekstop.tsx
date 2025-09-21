"use client";

import React from "react";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { Footer } from "./sections/Footer/Footer";
import { About } from "./sections/About/About";
import { SkillsSection } from "./sections/SkillsSection/SkillsSection";
import { WithMeSection } from "./sections/WithMeSection/WithMeSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection/ExperienceSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { technologyData, withMeFeatures, anotherTalentFeatures, portfolioData, experienceData, mockFaq } from "../../constants/mockupData";

export const Dekstop = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
      <HeroSection />
      <About />
      <SkillsSection technologyData={technologyData} />
      <WithMeSection withMeFeatures={withMeFeatures} anotherTalentFeatures={anotherTalentFeatures} />
      <ProjectsSection portfolioData={portfolioData} />
      <ExperienceSection experienceData={experienceData} />
      <TestimonialsSection />
      <FAQSection mockFaq={mockFaq} />
      <ContactSection />
      <Footer />
    </div>
  );
};
