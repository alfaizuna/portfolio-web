"use client";

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

interface WithMeSectionProps {
  withMeFeatures: string[];
  anotherTalentFeatures: string[];
}

export const WithMeSection = ({ withMeFeatures, anotherTalentFeatures }: WithMeSectionProps): JSX.Element => {
  return (
    <section id="with-me" className="flex-col w-full items-start gap-2 px-[120px] py-20 flex-[0_0_auto] bg-white flex relative">
      <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative text-center text-5xl font-bold text-[#0a0d12] leading-tight max-w-4xl">
            More Than Just Code
          </div>

          <div className="relative text-center text-lg font-medium text-[#6b7280] leading-relaxed max-w-2xl">
            We care about design, performance, and user experience all in one.
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl border border-solid border-[#ffffff40]">
          <Card className="flex flex-col items-center justify-start gap-6 p-8 flex-1 self-stretch bg-[#f3b64c] rounded-3xl">
            <CardContent className="p-0 flex flex-col items-center gap-6 w-full">
              <div className="text-center text-lg font-bold text-[#0a0d12]">
                With Me
              </div>

              <div className="bg-[#b76080] rounded-[15229.25px] relative w-[100px] h-[100px] overflow-hidden">
                <img
                  className="absolute top-2 left-[calc(50.00%_-_37px)] w-[86px] h-[92px]"
                  alt="Harmonious purple"
                  src="/harmonious-purple-palette---candid-gentleman-portrait-1-1.png"
                />
              </div>

              <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                {withMeFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="items-center justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative"
                  >
                    <img
                      className="relative w-6 h-6"
                      alt="Check icon"
                      src="/check-icon.svg"
                    />

                    <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center justify-center gap-8 p-8 relative flex-1 self-stretch grow bg-white rounded-2xl border border-solid border-[#d5d7da]">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                  Another Talent
                </div>

                <div className="bg-[#d5d7da] rounded-[12698.74px] relative w-[90px] h-[90px] overflow-hidden mb-8">
                  <img
                    className="absolute top-[-7237px] left-[-17281px] w-[75px] h-[75px] object-cover"
                    alt="Casual confidence"
                  />

                  <img
                    className="absolute top-[calc(50.00%_-_30px)] left-[calc(50.00%_-_30px)] w-[60px] h-[60px]"
                    alt="Profile"
                    src="/profile.svg"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                {anotherTalentFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="items-center justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative"
                  >
                    <img
                      className="relative w-6 h-6"
                      alt="Close icon"
                      src="/close-icon.svg"
                    />

                    <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
