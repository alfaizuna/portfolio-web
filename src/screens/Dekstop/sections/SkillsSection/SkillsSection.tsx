"use client";

import React from "react";
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
  return (
    <section id="skills" className="w-full relative">
      <div className="flex flex-col w-full items-center gap-12 px-[120px] py-20 relative flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_100%)]">
        <div className="flex flex-col w-[847px] items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative text-center text-4xl font-bold text-[#0a0d12] leading-tight">
            Code, Design, and Everything in Between
          </div>

          <div className="relative text-center text-lg font-medium text-[#6b7280] leading-relaxed">
            These are the technologies that power my workflow and bring ideas to
            life.
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-6 relative flex-[0_0_auto]">
            {technologyData.map((tech, index) => (
              <Card
                key={index}
                className={`flex flex-col w-[250px] items-center gap-6 px-6 py-12 relative rounded-[110px] ${tech.highlighted ? "bg-[#f3b64c]" : "bg-[#fdfdfd] border border-solid border-[#d5d7da]"}`}
              >
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  <div
                    className={`${tech.highlighted ? "bg-[#fdfdfd]" : "bg-[#f4f4f4]"} flex w-[80px] h-[80px] items-center justify-center gap-2.5 p-3 relative rounded-full`}
                  >
                    {tech.name === "HTML" && (
                      <div className="absolute top-5 left-6 w-6 h-[32px] bg-[#fdfdfd]" />
                    )}

                    <img
                      className={`${tech.name === "HTML" ? "w-[42px] h-[42px]" : tech.name === "CSS" ? "w-[36px] h-[42px]" : tech.name === "Javascript" ? "w-[48px] h-[48px]" : "w-[45px] h-[40px]"} relative object-cover`}
                      alt="Icon"
                      src={tech.icon}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-3 relative self-stretch w-full">
                    <div className="relative text-center text-xl font-semibold text-[#0a0d12] leading-tight">
                      {tech.name}
                    </div>

                    <div className="relative text-center text-base font-normal text-[#6b7280] leading-relaxed">
                      {tech.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              size="icon"
              className="inline-flex items-center justify-center w-12 h-12 p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50"
            >
              <img
                className="relative w-6 h-6"
                alt="Arrow left"
                src="/arrow-right-1.svg"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="inline-flex items-center justify-center w-12 h-12 p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50"
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
