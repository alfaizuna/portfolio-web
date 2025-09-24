"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [gapSize, setGapSize] = useState<string>('20px');
  const carouselRef = useRef<HTMLDivElement>(null);

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
      if (window.innerWidth < 640) return 2; // Mobile: 2 cards
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 4; // Desktop: 4 cards
    }
    return 4; // Default to 4 for SSR/initial render
  };
  
  // Handle client-side hydration
  useEffect(() => {
    setIsMounted(true);
    const newCardsToShow = getCardsToShow();
    setCardsToShow(newCardsToShow);
    setCurrentIndex(0);
    
    // Set gap size based on screen width
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) {
        setGapSize('20px');
      } else if (window.innerWidth < 640) {
        setGapSize('16px');
      } else {
        setGapSize('20px');
      }
    }
  }, []);

  // Handle window resize
  useEffect(() => {
    if (!isMounted) return;
    
    const handleResize = () => {
      const newCardsToShow = getCardsToShow();
      setCardsToShow(newCardsToShow);
      
      // Update gap size on resize
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setGapSize('20px');
        } else if (window.innerWidth < 640) {
          setGapSize('16px');
        } else {
          setGapSize('20px');
        }
      }
      
      // Reset index if it's out of bounds
      if (currentIndex >= orderedTechnologyData.length - newCardsToShow) {
        setCurrentIndex(Math.max(0, orderedTechnologyData.length - newCardsToShow));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, orderedTechnologyData.length, isMounted]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < orderedTechnologyData.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < orderedTechnologyData.length - cardsToShow) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrevious();
    }
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < orderedTechnologyData.length - cardsToShow;

  return (
    <motion.section 
      id="skills" 
      className="w-full relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ margin: "-100px" }}
    >
      <div className="flex flex-col w-full items-center gap-8 sm:gap-12 px-2 sm:px-8 md:px-16 lg:px-[100px] py-12 sm:py-20 relative flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_100%)]">
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

        {/* Carousel Container */}
        <motion.div 
          className="relative w-full max-w-[1200px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Cards Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden px-2 sm:px-0 z-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div 
              className="flex gap-4 sm:gap-5 lg:gap-5 transition-transform duration-500 ease-out pl-2 sm:pl-0 pr-2 sm:pr-0"
              style={{ 
                gap: gapSize
              }}
              animate={{ 
                x: `-${currentIndex * (100 / cardsToShow)}%` 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              {orderedTechnologyData.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`flex-shrink-0 ${
                    cardsToShow === 2 ? 'w-[calc(50%-8px)]' : 'w-[calc(25%-12px)]'
                  } sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1 + (index % cardsToShow) * 0.1 
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className={`h-full transition-all duration-300 z-30 hover:shadow-xl border-2 w-[160px] h-[220px] sm:w-[215px] sm:h-[281px] rounded-[80px] sm:rounded-[100px] aspect-[160/220] sm:aspect-[215/281] ${
                    tech.highlighted 
                      ? 'bg-[#F3B64C] border-orange-300 text-white' 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}>
                    <CardContent className="p-4 sm:p-10 flex flex-col items-center text-center h-full justify-center">
                      <div className={`w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-3 sm:mb-6 flex-shrink-0 ${
                        tech.highlighted 
                          ? 'bg-white/20 backdrop-blur-sm' 
                          : 'bg-gray-50'
                      }`} style={{ aspectRatio: '1/1' }}>
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-6 h-6 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                          style={{ aspectRatio: '1/1' }}
                        />
                      </div>
                      
                      <h3 className={`text-sm sm:text-lg font-bold mb-2 sm:mb-4 leading-tight ${
                        tech.highlighted ? 'text-white' : 'text-gray-900'
                      }`}>
                        {tech.name}
                      </h3>
                      
                      <p className={`text-xs sm:text-sm leading-relaxed px-1 sm:px-2 -mt-1 sm:-mt-2 ${
                        tech.highlighted ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls Below Cards */}
          <div className="flex justify-center items-center mt-6 gap-4">
            {/* Desktop Navigation Arrows */}
            <div className="hidden md:flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className={`w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 ${
                  !canGoPrevious ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                disabled={!canGoNext}
                className={`w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 ${
                  !canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            {/* Mobile Navigation - Arrows Only */}
            <div className="flex md:hidden items-center justify-center gap-4">
              {/* Mobile Arrow Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className={`w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-200 ${
                  !canGoPrevious ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                }`}
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                disabled={!canGoNext}
                className={`w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-200 ${
                  !canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                }`}
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
