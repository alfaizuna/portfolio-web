"use client";

import React, { useEffect, useRef } from "react";
import { Separator } from "../../../../components/ui/separator";
import { motion, useAnimation, useInView } from "framer-motion";

interface Experience {
  period: string;
  role: string;
  logo: string | string[];
  description: string;
}

interface ExperienceSectionProps {
  experienceData: Experience[];
}

export const ExperienceSection = ({ experienceData }: ExperienceSectionProps): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="flex flex-col w-full items-start gap-8 md:gap-12 px-4 md:px-8 lg:px-[120px] py-10 md:py-20 relative bg-[#0a0d12]"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="justify-between self-stretch w-full flex flex-col md:flex-row items-start relative gap-4 md:gap-0">
        <div className="flex flex-col gap-0 max-w-full md:max-w-2xl">
          <div className="text-2xl md:text-3xl font-montserrat font-bold tracking-tight leading-tight">
            <span className="text-[#fdfdfd]">
              Experiences That
            </span>
          </div>
          <div className="text-2xl md:text-3xl font-montserrat font-bold tracking-tight leading-tight">
            <span className="text-[#f3b64c]">
              Shaped Me
            </span>
            <span className="text-[#fdfdfd]">
              !
            </span>
          </div>
        </div>

        <div className="relative max-w-full md:max-w-md mt-0 md:mt-[-1.00px] font-montserrat font-semibold text-[#fdfdfd] text-base md:text-lg tracking-tight leading-normal">
          From startups to side projects, every step has been a chance to learn, build, and level up.
        </div>
      </div>

      <Separator className="w-full h-px relative object-cover" />

      <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
        {experienceData.map((experience, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col md:flex-row items-start justify-between relative self-stretch w-full bg-[#0a0d12] gap-4 md:gap-0">
              <div className="flex flex-col w-full md:w-[178px] items-start gap-1 relative">
                <div className="relative self-stretch font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#a4a7ae] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] [font-style:var(--text-sm-medium-font-style)]">
                  {experience.period}
                </div>

                <div className="relative self-stretch text-lg md:text-xl font-bold text-[#fdfdfd] leading-tight">
                  {experience.role}
                </div>
              </div>

              <div className="relative w-full md:w-48 h-20 rounded-2xl border-2 border-solid border-[#3a3f4a] p-1">
                <div className="flex items-center justify-center w-full h-full bg-[#0a0d12] rounded-xl border border-solid border-[#2a2f3c] relative overflow-hidden">
                  <div className="relative w-32 h-12 overflow-hidden">
                    {Array.isArray(experience.logo) ? (
                      <>
                        <img
                          className="absolute w-[68.42%] h-[52.80%] top-[19.28%] left-[31.34%]"
                          alt="Vector"
                          src={experience.logo[0]}
                        />
                        <img
                          className="absolute w-[11.55%] h-[29.17%] top-[18.13%] left-0"
                          alt="Vector"
                          src={experience.logo[1]}
                        />
                        <img
                          className="absolute w-[11.55%] h-[29.17%] top-[18.13%] left-[13.20%]"
                          alt="Vector"
                          src={experience.logo[2]}
                        />
                        <img
                          className="absolute w-[11.55%] h-[29.17%] top-[51.46%] left-[13.20%]"
                          alt="Vector"
                          src={experience.logo[3]}
                        />
                        <img
                          className="absolute w-[11.55%] h-[29.17%] top-[51.46%] left-0"
                          alt="Vector"
                          src={experience.logo[4]}
                        />
                      </>
                    ) : (
                      <img
                        className={
                          index === 0
                            ? "absolute w-[100.13%] h-[83.33%] top-[8.33%] left-0"
                            : "absolute w-[99.85%] h-[47.98%] top-[24.94%] left-0"
                        }
                        alt="Vector"
                        src={experience.logo}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="relative w-full md:w-[513px] font-montserrat font-normal text-[#a4a7ae] text-sm md:text-base tracking-[-0.48px] leading-[24px] md:leading-[30px]">
                {experience.description}
              </div>
            </div>

            {index < experienceData.length - 1 && (
              <Separator className="self-stretch w-full h-px relative object-cover" />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
};
