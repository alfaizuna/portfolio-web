"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

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
  const [cardsToShow, setCardsToShow] = useState(4); // Default to desktop first for SSR
  const [isMounted, setIsMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Responsive cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2; // Mobile: 2 cards (HTML & CSS first)
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 4; // Desktop: 4 cards
    }
    return 4; // Default to 4 for SSR/initial render
  };
  
  // Handle client-side hydration
  React.useEffect(() => {
    setIsMounted(true);
    const newCardsToShow = getCardsToShow();
    setCardsToShow(newCardsToShow);
    
    // For mobile, always start with HTML & CSS (index 0)
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      setCurrentIndex(0);
    }
  }, []);

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
    if (scrollContainerRef.current && isMounted) {
      const cardWidth = typeof window !== 'undefined' && window.innerWidth < 640 ? 174 : 274;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Force scroll to beginning when index changes
  React.useEffect(() => {
    if (isMounted && scrollContainerRef.current) {
      const cardWidth = typeof window !== 'undefined' && window.innerWidth < 640 ? 174 : 274;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isMounted]);

  // Handle window resize
  React.useEffect(() => {
    if (!isMounted) return;
    
    const handleResize = () => {
      const newCardsToShow = getCardsToShow();
      setCardsToShow(newCardsToShow);
      
      // For mobile, always start with HTML & CSS (index 0)
      if (window.innerWidth < 640) {
        setCurrentIndex(0);
      } else {
        // Reset index if it's out of bounds for other screen sizes
        if (currentIndex >= technologyData.length - newCardsToShow) {
          setCurrentIndex(Math.max(0, technologyData.length - newCardsToShow));
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, technologyData.length, isMounted]);

  return (
    <motion.section 
      id="skills" 
      className="w-full relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ margin: "-100px" }}
    >
      <div className="flex flex-col w-full items-center gap-8 sm:gap-12 px-4 sm:px-8 md:px-16 lg:px-[120px] py-12 sm:py-20 relative flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_100%)]">
        <motion.div 
          className="flex flex-col w-full max-w-[847px] items-center gap-4 relative flex-[0_0_auto] px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="relative text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0d12] leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Code, Design, and Everything in Between
          </motion.div>

          <motion.div 
            className="relative text-center text-base sm:text-lg font-montserrat font-medium text-[#6b7280] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            These are the technologies that power my workflow and bring ideas to
            life.
          </motion.div>
        </motion.div>

        <motion.div 
          className="inline-flex flex-col items-center gap-6 sm:gap-8 relative flex-[0_0_auto]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="w-full max-w-[1200px] overflow-hidden relative px-4 sm:px-0">
            <motion.div 
              ref={scrollContainerRef}
              className="flex items-center gap-2 sm:gap-6 md:gap-8 overflow-x-hidden scroll-smooth"
              style={{ 
                width: `${technologyData.length * (isMounted && typeof window !== 'undefined' && window.innerWidth < 640 ? 174 : 274)}px`,
                transform: `translateX(-${currentIndex * (isMounted && typeof window !== 'undefined' && window.innerWidth < 640 ? 174 : 274)}px)`,
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {technologyData.map((tech, index) => {
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <Card
                    className={`flex flex-col w-[170px] sm:w-[250px] h-[260px] sm:h-auto items-center justify-between sm:justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-8 sm:py-12 relative rounded-[80px] sm:rounded-[110px] flex-shrink-0 ${tech.highlighted ? "bg-[#f3b64c]" : "bg-[#fdfdfd] border border-solid border-[#d5d7da]"}`}
                  >
                    <CardContent className="p-0 flex flex-col items-center gap-4 sm:gap-4 h-full justify-between sm:justify-center">
                      <motion.div
                        className={`${tech.highlighted ? "bg-[#fdfdfd]" : "bg-[#f4f4f4]"} flex w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] items-center justify-center gap-2.5 p-3 sm:p-3 relative rounded-full`}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.8 + (index * 0.1),
                          type: "spring",
                          stiffness: 260,
                          damping: 20
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech.name === "HTML" && (
                          <div className="absolute top-3 sm:top-5 left-4 sm:left-6 w-4 sm:w-6 h-[20px] sm:h-[32px] bg-[#fdfdfd]" />
                        )}

                        <img
                          className={`${
                            tech.name === "HTML" ? "w-[30px] h-[30px] sm:w-[42px] sm:h-[42px]" : 
                            tech.name === "CSS" ? "w-[26px] h-[30px] sm:w-[36px] sm:h-[42px]" : 
                            tech.name === "Javascript" ? "w-[34px] h-[34px] sm:w-[48px] sm:h-[48px]" : 
                            tech.name === "Next.js" ? "w-[28px] h-[28px] sm:w-[40px] sm:h-[40px]" :
                            tech.name === "TypeScript" ? "w-[28px] h-[28px] sm:w-[40px] sm:h-[40px]" :
                            "w-[32px] h-[28px] sm:w-[45px] sm:h-[40px]"
                          } relative object-cover`}
                          alt={`${tech.name} Icon`}
                          src={tech.icon}
                        />
                      </motion.div>

                      <motion.div 
                        className="flex flex-col items-center gap-3 sm:gap-3 relative self-stretch w-full flex-1 sm:flex-initial justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.9 + (index * 0.1)
                        }}
                      >
                        <div className="relative text-center text-base sm:text-xl font-semibold text-[#0a0d12] leading-tight">
                          {tech.name}
                        </div>

                        <div className="relative text-center text-sm sm:text-base font-montserrat font-normal text-[#6b7280] leading-relaxed sm:leading-relaxed px-2 line-clamp-4 sm:line-clamp-none">
                          {tech.description}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div 
            className="inline-flex items-center gap-3 sm:gap-4 relative flex-[0_0_auto]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50 ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <img
                  className="relative w-5 h-5 sm:w-6 sm:h-6 rotate-180"
                  alt="Arrow left"
                  src="/arrowright.png"
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex >= technologyData.length - cardsToShow}
                className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50 ${
                  currentIndex >= technologyData.length - cardsToShow ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <img
                  className="relative w-5 h-5 sm:w-6 sm:h-6"
                  alt="Arrow right"
                  src="/arrowright.png"
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
