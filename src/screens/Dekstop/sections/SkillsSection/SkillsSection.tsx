"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

interface Technology {
  name: string;
  description: string;
  icon: string;
  highlighted: boolean;
}

interface SkillsSectionProps {
  technologyData: Technology[];
}

export const SkillsSection = ({ technologyData }: SkillsSectionProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsToShow = 4; // Number of cards to show at once

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < technologyData.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 274; // 250px width + 24px gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="skills" className="w-full relative">
      <div className="flex flex-col w-full items-center gap-12 px-[120px] py-20 relative flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_100%)]">
        <div className="flex flex-col w-[847px] items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative text-center text-4xl font-bold text-[#0a0d12] leading-tight">
            Code, Design, and Everything in Between
          </div>

          <div className="relative text-center text-lg font-montserrat font-medium text-[#6b7280] leading-relaxed">
            These are the technologies that power my workflow and bring ideas to
            life.
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
          <div className="w-full max-w-[1200px] overflow-hidden relative">
            <div 
              ref={scrollContainerRef}
              className="flex items-center gap-8 overflow-x-hidden scroll-smooth"
              style={{ 
                width: `${technologyData.length * 274}px`,
                transform: `translateX(-${currentIndex * 274}px)`,
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {technologyData.map((tech, index) => (
                <Card
                  key={index}
                  className={`flex flex-col w-[250px] items-center gap-6 px-6 py-12 relative rounded-[110px] flex-shrink-0 ${tech.highlighted ? "bg-[#f3b64c]" : "bg-[#fdfdfd] border border-solid border-[#d5d7da]"}`}
                >
                  <CardContent className="p-0 flex flex-col items-center gap-4">
                    <div
                      className={`${tech.highlighted ? "bg-[#fdfdfd]" : "bg-[#f4f4f4]"} flex w-[80px] h-[80px] items-center justify-center gap-2.5 p-3 relative rounded-full`}
                    >
                      {tech.name === "HTML" && (
                        <div className="absolute top-5 left-6 w-6 h-[32px] bg-[#fdfdfd]" />
                      )}

                      <img
                        className={`${
                          tech.name === "HTML" ? "w-[42px] h-[42px]" : 
                          tech.name === "CSS" ? "w-[36px] h-[42px]" : 
                          tech.name === "Javascript" ? "w-[48px] h-[48px]" : 
                          tech.name === "Next.js" ? "w-[40px] h-[40px]" :
                          tech.name === "TypeScript" ? "w-[40px] h-[40px]" :
                          "w-[45px] h-[40px]"
                        } relative object-cover`}
                        alt={`${tech.name} Icon`}
                        src={tech.icon}
                      />
                    </div>

                    <div className="flex flex-col items-center gap-3 relative self-stretch w-full">
                      <div className="relative text-center text-xl font-semibold text-[#0a0d12] leading-tight">
                        {tech.name}
                      </div>

                      <div className="relative text-center text-base font-montserrat font-normal text-[#6b7280] leading-relaxed">
                        {tech.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`inline-flex items-center justify-center w-12 h-12 p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <img
                className="relative w-6 h-6 rotate-180"
                alt="Arrow left"
                src="/arrowright.png"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= technologyData.length - cardsToShow}
              className={`inline-flex items-center justify-center w-12 h-12 p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50 ${
                currentIndex >= technologyData.length - cardsToShow ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <img
                className="relative w-6 h-6"
                alt="Arrow right"
                src="/arrowright.png"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
