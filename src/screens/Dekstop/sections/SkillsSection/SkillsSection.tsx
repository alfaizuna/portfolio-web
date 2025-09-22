"use client";

import React, { useState, useRef, useMemo } from "react";
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
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const orderedTechnologyData = useMemo(() => {
    const html = technologyData.find((tech) => tech.name === "HTML");
    const css = technologyData.find((tech) => tech.name === "CSS");
    const others = technologyData.filter(
      (tech) => tech.name !== "HTML" && tech.name !== "CSS"
    );

    const sorted = [];
    if (html) sorted.push(html);
    if (css) sorted.push(css);
    sorted.push(...others);

    return sorted;
  }, [technologyData]);
  
  // Responsive cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2; // Mobile: 2 cards per view (for carousel fallback)
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 4; // Desktop: 4 cards
    }
    return 4; // Default to 4 for SSR/initial render
  };

  const checkIsMobile = () => {
    return typeof window !== 'undefined' && window.innerWidth < 640;
  };
  
  // Handle client-side hydration
  React.useEffect(() => {
    setIsMounted(true);
    const newCardsToShow = getCardsToShow();
    const mobileCheck = checkIsMobile();
    setCardsToShow(newCardsToShow);
    setIsMobile(mobileCheck);
    
    // For non-mobile, start with index 0
    if (!mobileCheck) {
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
    if (currentIndex < orderedTechnologyData.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current && isMounted && !isMobile) {
      const cardWidth = 274;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Force scroll to beginning when index changes (non-mobile only)
  React.useEffect(() => {
    if (isMounted && scrollContainerRef.current && !isMobile) {
      const cardWidth = 274;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isMounted, isMobile]);

  // Handle window resize
  React.useEffect(() => {
    if (!isMounted) return;
    
    const handleResize = () => {
      const newCardsToShow = getCardsToShow();
      const mobileCheck = checkIsMobile();
      setCardsToShow(newCardsToShow);
      setIsMobile(mobileCheck);
      
      // Reset index for non-mobile if it's out of bounds
      if (!mobileCheck) {
        if (currentIndex >= orderedTechnologyData.length - newCardsToShow) {
          setCurrentIndex(Math.max(0, orderedTechnologyData.length - newCardsToShow));
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, orderedTechnologyData.length, isMounted]);

  // Mobile Grid Component - Changed to Mobile Carousel
  const MobileCarousel = () => (
    <>
      <div className="w-full max-w-[400px] overflow-hidden relative flex items-center h-[320px] px-4">
        <motion.div 
          className="flex items-center gap-4 scroll-smooth"
          style={{ 
            width: `${orderedTechnologyData.length * 180}px`,
            transform: `translateX(-${currentIndex * 180}px)`,
          }}
        >
          {orderedTechnologyData.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.1 + (index * 0.05),
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -4, 
                transition: { duration: 0.2 } 
              }}
            >
              <Card
                className={`flex flex-col w-[160px] h-[280px] items-center justify-between gap-3 px-3 py-6 relative rounded-[60px] flex-shrink-0 ${tech.highlighted ? "bg-[#f3b64c]" : "bg-[#fdfdfd] border border-solid border-[#d5d7da]"}`}
              >
                <CardContent className="p-0 flex flex-col items-center gap-3 h-full justify-between">
                  <motion.div
                    className={`${tech.highlighted ? "bg-[#fdfdfd]" : "bg-[#f4f4f4]"} flex w-[50px] h-[50px] items-center justify-center gap-2.5 p-2 relative rounded-full`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 + (index * 0.05),
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
                      <div className="absolute top-2 left-3 w-3 h-[16px] bg-[#fdfdfd]" />
                    )}

                    <img
                      className={`${
                        tech.name === "HTML" ? "w-[24px] h-[24px]" : 
                        tech.name === "CSS" ? "w-[20px] h-[24px]" : 
                        tech.name === "Javascript" ? "w-[26px] h-[26px]" : 
                        tech.name === "Next.js" ? "w-[22px] h-[22px]" :
                        tech.name === "TypeScript" ? "w-[22px] h-[22px]" :
                        "w-[24px] h-[22px]"
                      } relative object-cover`}
                      alt={`${tech.name} Icon`}
                      src={tech.icon}
                    />
                  </motion.div>

                  <motion.div 
                    className="flex flex-col items-center gap-2 relative self-stretch w-full flex-1 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 + (index * 0.05)
                    }}
                  >
                    <div className="relative text-center text-sm font-semibold text-[#0a0d12] leading-tight">
                      {tech.name}
                    </div>

                    <div className="relative text-center text-xs font-montserrat font-normal text-[#6b7280] leading-relaxed px-1 line-clamp-3">
                      {tech.description}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Navigation Arrows */}
      <motion.div 
        className="inline-flex items-center gap-4 relative flex-[0_0_auto]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
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
            disabled={currentIndex >= orderedTechnologyData.length - cardsToShow}
            className={`inline-flex items-center justify-center w-12 h-12 p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50 ${
              currentIndex >= orderedTechnologyData.length - cardsToShow ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <img
              className="relative w-6 h-6"
              alt="Arrow right"
              src="/arrowright.png"
            />
          </Button>
        </motion.div>
      </motion.div>
    </>
  );

  // Tablet/Desktop Carousel Component
  const CarouselView = () => (
    <>
      <div className="w-full max-w-[1100px] overflow-hidden relative flex items-center h-[460px] px-0 justify-start">
        <motion.div 
          ref={scrollContainerRef}
          className="flex items-center gap-6 md:gap-8 scroll-smooth"
          style={{ 
            width: `${orderedTechnologyData.length * 274}px`,
            transform: `translateX(-${currentIndex * 274}px)`,
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          {orderedTechnologyData.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.1 + (index * 0.05),
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.2 } 
              }}
            >
              <Card
                className={`flex flex-col w-[250px] h-auto items-center justify-center gap-6 px-6 py-12 relative rounded-[110px] flex-shrink-0 ${tech.highlighted ? "bg-[#f3b64c]" : "bg-[#fdfdfd] border border-solid border-[#d5d7da]"}`}
              >
                <CardContent className="p-0 flex flex-col items-center gap-4 h-full justify-center">
                  <motion.div
                    className={`${tech.highlighted ? "bg-[#fdfdfd]" : "bg-[#f4f4f4]"} flex w-[80px] h-[80px] items-center justify-center gap-2.5 p-3 relative rounded-full`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 + (index * 0.05),
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
                  </motion.div>

                  <motion.div 
                    className="flex flex-col items-center gap-3 relative self-stretch w-full justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 + (index * 0.05)
                    }}
                  >
                    <div className="relative text-center text-xl font-semibold text-[#0a0d12] leading-tight">
                      {tech.name}
                    </div>

                    <div className="relative text-center text-base font-montserrat font-normal text-[#6b7280] leading-relaxed">
                      {tech.description}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="inline-flex items-center gap-4 relative flex-[0_0_auto]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
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
            disabled={currentIndex >= orderedTechnologyData.length - cardsToShow}
            className={`inline-flex items-center justify-center w-12 h-12 p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50 ${
              currentIndex >= orderedTechnologyData.length - cardsToShow ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <img
              className="relative w-6 h-6"
              alt="Arrow right"
              src="/arrowright.png"
            />
          </Button>
        </motion.div>
      </motion.div>
    </>
  );

  return (
    <motion.section 
      id="skills" 
      className="w-full relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ margin: "-100px" }}
    >
      <div className="flex flex-col w-full items-center gap-8 sm:gap-12 px-4 sm:px-8 md:px-16 lg:px-[120px] py-12 sm:py-20 relative flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_100%)]">
        <motion.div 
          className="flex flex-col w-full max-w-[847px] items-center gap-4 relative flex-[0_0_auto] px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div 
            className="relative text-center text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-[#0a0d12] leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Code, Design, and Everything in Between
          </motion.div>

          <motion.div 
            className="relative text-center text-base sm:text-lg font-montserrat font-medium text-[#6b7280] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            These are the technologies that power my workflow and bring ideas to
            life.
          </motion.div>
        </motion.div>

        <motion.div 
          className="inline-flex flex-col items-center gap-6 sm:gap-8 relative flex-[0_0_auto]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {isMounted && isMobile ? <MobileCarousel /> : <CarouselView />}
        </motion.div>
      </div>
    </motion.section>
  );
};
