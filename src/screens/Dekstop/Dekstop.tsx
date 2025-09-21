"use client";

import React from "react";
import { HeroSection } from "../Dekstop/sections/HeroSection/HeroSection";
import { Footer } from "../Dekstop/sections/Footer/Footer";
import { About } from "../Dekstop/sections/About/About";
import { SkillsSection } from "../Dekstop/sections/SkillsSection/SkillsSection";
import { WithMeSection } from "../Dekstop/sections/WithMeSection/WithMeSection";
import { ProjectsSection } from "../Dekstop/sections/ProjectsSection/ProjectsSection";
import { ExperienceSection } from "../Dekstop/sections/ExperienceSection/ExperienceSection";
import { TestimonialsSection } from "../Dekstop/sections/TestimonialsSection/TestimonialsSection";
import { FAQSection } from "../Dekstop/sections/FAQSection/FAQSection";
import { ContactSection } from "../Dekstop/sections/ContactSection/ContactSection";
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
