"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

interface WithMeSectionProps {
  withMeFeatures: string[];
  anotherTalentFeatures: string[];
}

export const WithMeSection = ({ withMeFeatures, anotherTalentFeatures }: WithMeSectionProps): JSX.Element => {
  return (
    <motion.section
      id="with-me"
      className="flex-col w-full items-start gap-2 px-6 md:px-[120px] py-10 md:py-20 flex-[0_0_auto] bg-white flex relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <motion.div
          className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative text-center text-3xl md:text-5xl font-montserrat font-bold text-[#0a0d12] leading-tight max-w-4xl">
            More Than Just Code
          </div>

          <div className="relative text-center text-lg font-montserrat font-medium text-[#6b7280] leading-relaxed max-w-2xl">
            We care about design, performance, and user experience all in one.
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl">
          <motion.div
            className="flex-1 self-stretch w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="flex flex-col items-center justify-start gap-6 p-8 h-full bg-[#f3b64c] rounded-3xl">
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

                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-semibold font-montserrat text-[#0a0d12] text-lg text-center tracking-tight leading-normal whitespace-nowrap">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex-1 self-stretch grow w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="flex flex-col items-center justify-center gap-8 p-8 relative h-full bg-white rounded-2xl border border-solid border-[#d5d7da]">
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-semibold text-[#0a0d12] text-lg text-center tracking-tight leading-normal">
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

                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-semibold text-[#0a0d12] text-lg text-center tracking-tight leading-normal whitespace-nowrap">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
