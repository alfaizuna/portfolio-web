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
      className="flex flex-col w-full items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-[120px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative bg-[#0a0d12]"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="justify-between self-stretch w-full flex flex-col lg:flex-row items-start relative gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
        <div className="flex flex-col gap-1 sm:gap-2 max-w-full lg:max-w-2xl xl:max-w-3xl">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold tracking-tight leading-tight">
            <span className="text-[#fdfdfd]">
              Experiences That
            </span>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold tracking-tight leading-tight">
            <span className="text-[#f3b64c]">
              Shaped Me
            </span>
            <span className="text-[#fdfdfd]">
              !
            </span>
          </div>
        </div>

        <div className="relative max-w-full lg:max-w-md xl:max-w-lg mt-2 sm:mt-4 lg:mt-0 xl:mt-[-1.00px] font-montserrat font-semibold text-[#fdfdfd] text-sm sm:text-base md:text-lg lg:text-xl tracking-tight leading-relaxed">
          From startups to side projects, every step has been a chance to learn, build, and level up.
        </div>
      </div>

      <Separator className="w-full h-px relative object-cover" />

      <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 relative self-stretch w-full">
        {experienceData.map((experience, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col lg:flex-row items-start justify-between relative self-stretch w-full bg-[#0a0d12] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
              <div className="flex flex-col w-full lg:w-auto lg:min-w-[200px] xl:min-w-[240px] items-start gap-2 sm:gap-3 relative">
                <div className="relative self-stretch font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#a4a7ae] text-xs sm:text-sm md:text-base tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] [font-style:var(--text-sm-medium-font-style)]">
                  {experience.period}
                </div>

                <div className="relative self-stretch text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#fdfdfd] leading-tight">
                  {experience.role}
                </div>
              </div>

              <div className="relative w-full sm:w-auto sm:min-w-[160px] md:min-w-[180px] lg:w-48 xl:w-56 h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 rounded-xl sm:rounded-2xl border-2 border-solid border-[#3a3f4a] p-1">
                <div className="flex items-center justify-center w-full h-full bg-[#0a0d12] rounded-lg sm:rounded-xl border border-solid border-[#2a2f3c] relative overflow-hidden">
                  <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 overflow-hidden">
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

              <div className="relative w-full lg:flex-1 lg:max-w-[500px] xl:max-w-[600px] font-montserrat font-normal text-[#a4a7ae] text-xs sm:text-sm md:text-base lg:text-lg tracking-[-0.32px] sm:tracking-[-0.40px] md:tracking-[-0.48px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px]">
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
