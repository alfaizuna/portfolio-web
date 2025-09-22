"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { portfolioData } from "../../../../constants/mockupData";

interface Portfolio {
  title: string;
  category: string;
  image: string;
  link: string;
}

export const ProjectsSection = (): JSX.Element => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handlePortfolioClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      id="projects"
      className="flex flex-col items-start gap-12 px-6 md:px-8 lg:px-[120px] py-10 md:py-20 relative self-stretch w-full flex-[0_0_auto]"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <motion.div
          className="flex flex-col max-w-4xl gap-4 items-start relative"
          variants={itemVariants}
        >
          <div className="relative text-3xl md:text-5xl font-bold font-montserrat tracking-tight leading-tight">
            <span className="text-[#0a0d12]">Design to </span>
            <span className="text-[#b76080]">Code Accuracy</span>
          </div>
          <div className="text-base md:text-lg font-montserrat font-medium text-[#6b7280] leading-relaxed max-w-3xl">
            We translated design mockups into pixel-perfect, responsive
            components, ensuring a smooth user experience across all devices.
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button className="flex w-full md:w-[156px] h-14 items-center justify-center gap-2 pl-4 pr-2 py-2 relative rounded-[100px] border border-solid border-[#d5d7da] bg-transparent text-[#0a0d12] hover:bg-gray-50 h-auto">
            <div className="relative flex-1 font-montserrat font-semibold text-[#0a0d12] text-base tracking-tight leading-normal">
              See All
            </div>
            <div className="inline-flex items-center gap-2 p-2 relative flex-[0_0_auto] bg-[#0a0d12] rounded-[100px]">
              <img
                className="relative w-5 h-5"
                alt="Arrow right"
                src="/arrow-right.svg"
              />
            </div>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
        variants={sectionVariants}
      >
        {portfolioData.map((portfolio, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start relative flex-1 grow w-full cursor-pointer"
            variants={itemVariants}
            onClick={() => handlePortfolioClick(portfolio.link)}
          >
            <Card className="flex items-center gap-2 p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#f4f4f4] rounded-[20px]">
              <CardContent className="p-0">
                <img
                  className="relative flex-1 grow h-[354.67px] rounded-lg object-contain"
                  alt="Portfolio image"
                  src={portfolio.image}
                />
                <div className="absolute top-7 left-[-10px] z-10">
                  <img
                    className="w-auto h-auto"
                    alt="Best Portfolio Badge"
                    src="/badge-best-portfolio.png"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="flex items-center justify-between p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#f4f4f4] rounded-[20px]">
              <CardContent className="p-0 flex items-center justify-between w-full">
                <div className="flex flex-col items-start gap-3 relative flex-1">
                  <div className="relative mt-[-1.00px] font-text-lg-bold font-[number:var(--text-lg-bold-font-weight)] text-[#0a0d12] text-[length:var(--text-lg-bold-font-size)] tracking-[var(--text-lg-bold-letter-spacing)] leading-[var(--text-lg-bold-line-height)] [font-style:var(--text-lg-bold-font-style)]">
                    {portfolio.title}
                  </div>
                  <Separator className="w-full h-px relative object-cover" />
                  <div className="relative font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#535861] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
                    {portfolio.category}
                  </div>
                </div>
                <Button
                  size="icon"
                  className="inline-flex items-center gap-2 p-2 relative bg-[#b76080] rounded-[100px] h-auto ml-4"
                >
                  <img
                    className="relative w-5 h-5"
                    alt="Arrow right"
                    src="/arrow-right-2.svg"
                  />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
