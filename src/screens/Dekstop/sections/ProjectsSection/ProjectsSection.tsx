"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { portfolioData } from "../../../../constants/mockupData";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative self-stretch w-full flex-[0_0_auto] place-items-center"
        variants={sectionVariants}
      >
        {portfolioData.map((portfolio, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start relative w-full max-w-[400px] cursor-pointer"
            variants={itemVariants}
          >
            <a href={portfolio.link} target="_blank" rel="noopener noreferrer" className='flex flex-col items-start w-full'>
              {/* Image Container */}
              <div className='relative flex flex-row items-center p-4 gap-2 w-full h-[346.67px] bg-[#F5F5F5] rounded-[20px] overflow-hidden'>
                {/* Portfolio Image */}
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  width={600}
                  height={400}
                  className='w-full h-[314.67px] object-cover rounded-lg flex-1'
                />

                {/* Best Portfolio Label */}
                <div className='absolute w-[97px] h-[29px] left-[-9px] top-[28px] transform -scale-x-100'>
                  <div className='w-[97px] h-[21px] bg-[#F3B64C] rounded-l-[178.63px] flex items-center justify-center'>
                    <span
                      className='text-[#0A0D12] font-montserrat transform scale-x-[-1]'
                      style={{
                        fontWeight: 600,
                        fontSize: '12px',
                        lineHeight: '24px',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      Best Portfolio
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Container */}
              <div className='flex flex-row justify-between items-center p-4 gap-6 w-full h-[118px] bg-[#F5F5F5] rounded-[20px]'>
                {/* Text Container */}
                <div className='flex flex-col items-start gap-3 mx-auto w-full h-[86px]'>
                  {/* Portfolio Title */}
                  <h3
                    className='text-[#0A0D12] font-montserrat'
                    style={{
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '32px',
                    }}
                  >
                    {portfolio.title}
                  </h3>

                  {/* Divider Line */}
                  <div className='w-full h-px border border-[#D5D7DA]' />

                  {/* Portfolio Description */}
                  <p
                    className='text-[#535862] font-montserrat'
                    style={{
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '30px',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {portfolio.category}
                  </p>
                </div>

                {/* Button Container */}
                <div className='flex items-center justify-center mx-auto w-11 h-9 bg-[#B76080] rounded-full'>
                  <ArrowRight className='w-5 h-5 text-white' />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
