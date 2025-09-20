"use client";

import React from "react";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { Footer } from "./sections/Footer/Footer";

export const Dekstop = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
      <HeroSection />
      <Footer />
    </div>
  );
};
