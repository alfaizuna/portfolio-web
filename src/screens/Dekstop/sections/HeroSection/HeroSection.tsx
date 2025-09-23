"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRightIcon, MouseIcon, Menu, X } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { statsData, socialIcons, navigationItems, profileData } from "@/src/constants/mockupData";
import type { HeroSectionProps } from "./types";
import { useScrollTo, useMobileMenu } from "./hooks";

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const scrollToSection = useScrollTo();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();
  const [profileImageSrc, setProfileImageSrc] = useState(profileData.profileImage || profileData.defaultProfileImage);

  // Handle image error - fallback to default image
  const handleImageError = useCallback(() => {
    setProfileImageSrc(profileData.defaultProfileImage);
  }, []);

  // Memoize static content to prevent unnecessary re-renders
  const memoizedStats = useMemo(() => statsData, []);
  const memoizedNavItems = useMemo(() => navigationItems, []);
  const memoizedSocialIcons = useMemo(() => socialIcons, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero section */}
      <motion.section
        id="home"
        className="relative w-full h-screen min-h-[600px] overflow-hidden"
        role="banner"
        aria-label="Hero section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex w-full h-full items-center gap-2 absolute top-0 left-0 bg-[#a53860]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative w-1/2 h-full bg-[#a53860]" />
        </motion.div>

        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            alt="Element"
            src="/227.png"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#a53860f0]" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center z-20">
          <motion.img
            className="w-auto h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] 2xl:h-[80vh] max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] max-h-[350px] sm:max-h-[400px] md:max-h-[480px] lg:max-h-[560px] xl:max-h-[600px] 2xl:max-h-[640px] object-contain"
            alt={`${profileData.name} - Frontend Developer`}
            src={profileImageSrc}
            onError={handleImageError}
            loading="eager"
            fetchPriority="high"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />
        </div>

        <motion.img
          className="absolute bottom-10 right-[27%] w-32 h-32 lg:w-40 lg:h-40 opacity-50 z-0"
          alt="Decorative star"
          src="/clip-path-group.png"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.5, 
            scale: 1, 
            rotate: [0, 180, 360],
            y: [-5, 5, -5]
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.2 },
            scale: { duration: 0.6, delay: 1.2 },
            rotate: { duration: 8, repeat: Infinity, ease: "linear", delay: 2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />
        <motion.img
          className="absolute bottom-80 left-[20%] w-16 h-16 lg:w-48 lg:h-48 opacity-25 z-0"
          alt="Decorative star"
          src="/clip-path-group.png"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.25, 
            scale: 1, 
            rotate: [0, -180, -360],
            x: [-3, 3, -3]
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.4 },
            scale: { duration: 0.6, delay: 1.4 },
            rotate: { duration: 6, repeat: Infinity, ease: "linear", delay: 2.5 },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
          }}
        />

        {/* Stats Card - Mobile: After intro, Desktop: Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Card className="flex flex-col w-full max-w-[20rem] md:max-w-[13.875rem] lg:max-w-[15.625rem] items-start gap-4 md:gap-5 lg:gap-6 absolute top-[13.75rem] md:bottom-auto md:top-[20%] lg:top-[18%] left-4 right-4 md:left-auto md:transform-none md:right-4 lg:right-[6.25rem] xl:right-[8rem] bg-transparent border-none shadow-none px-2 md:px-0">
            <CardContent className="p-0 w-full">
            {/* Mobile: Grid layout, Desktop: Vertical layout */}
            <div className="grid grid-cols-2 md:block gap-2 md:gap-0 w-full">
              {memoizedStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="flex flex-col items-start gap-1 md:gap-2 lg:gap-3 relative w-full flex-[0_0_auto] p-2 md:p-3 lg:p-4">
                    <div className="relative w-full mt-[-0.0625rem] font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight">
                      {stat.value}
                    </div>

                    <div className="relative w-full font-montserrat font-semibold text-white text-xs md:text-sm lg:text-base xl:text-lg tracking-normal leading-normal">
                      {stat.label}
                    </div>
                  </div>

                  {/* Hide lines on mobile, show on desktop between items */}
                  {index < memoizedStats.length - 1 && (
                    <img
                      className="hidden md:block w-full h-px relative object-cover my-4 md:my-5 lg:my-6"
                      alt="Line"
                      src="/line-111.svg"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <Button
              className="flex h-12 md:h-14 lg:h-16 items-center justify-center gap-2 pl-4 md:pl-5 lg:pl-6 pr-2 py-2 md:py-3 lg:py-4 relative w-full bg-[#f3b64c] rounded-[6.25rem] mt-4 md:mt-5 lg:mt-6 h-auto hover:bg-[#f3b64c]/90 cursor-pointer transition-all duration-200"
              onClick={() => scrollToSection('contact')}
            >
              <div className="relative flex-1 font-semibold text-[#0a0d12] text-sm md:text-base lg:text-lg tracking-tight leading-normal">
                Contact Me
              </div>

              <div className="inline-flex items-center gap-2 p-2 md:p-3 lg:p-4 relative flex-[0_0_auto] bg-[#0a0d12] rounded-[6.25rem]">
                <ArrowRightIcon className="relative w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-white" />
              </div>
            </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Introduction Section - Mobile: Top, Desktop: Bottom Left */}
        <motion.section
          className="flex flex-col w-full max-w-[20rem] md:max-w-[25rem] lg:max-w-[24rem] xl:max-w-[28rem] items-start gap-2 md:gap-3 lg:gap-3 xl:gap-4 absolute top-[5rem] md:top-auto md:bottom-[10%] lg:bottom-[12%] xl:bottom-[15%] left-4 right-4 md:left-4 lg:left-[7.5rem] xl:left-[7.5rem] md:right-4 lg:right-8 xl:right-18 px-2 md:px-4 lg:px-4 xl:px-0"
          aria-label="Introduction"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.img
            className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
            alt="Welcome indicator"
            src="/fluent-mic-24-filled.svg"
            loading="lazy"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
          />

          <motion.h1 
            className="w-full font-bold font-montserrat text-white text-lg md:text-xl lg:text-xl xl:text-2xl tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            Hi, I&apos;m {profileData.name}
          </motion.h1>

          <motion.p 
            className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4 font-montserrat font-medium text-white text-xs md:text-sm lg:text-sm xl:text-base tracking-normal leading-relaxed md:mr-4 lg:mr-8 xl:mr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            {profileData.description}
          </motion.p>
        </motion.section>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden lg:inline-flex h-10 lg:h-12 xl:h-14 items-center justify-center gap-4 lg:gap-6 xl:gap-8 px-4 lg:px-6 xl:px-8 py-0 absolute top-6 lg:top-8 xl:top-10 left-1/2 left-[23%] transform -translate-x-1/2 bg-black/20 rounded-full backdrop-blur-md z-50"
          role="navigation"
          aria-label="Main navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {memoizedNavItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
            >
              <Button
                variant="ghost"
                className="inline-flex items-center justify-center gap-2 p-2 lg:p-3 xl:p-4 relative flex-[0_0_auto] h-auto hover:bg-white/10 cursor-pointer transition-all duration-200 pointer-events-auto rounded-lg"
                onClick={() => scrollToSection(item.id)}
              >
                <div className="relative w-fit mt-[-0.0625rem] font-montserrat font-medium text-white text-sm lg:text-base xl:text-lg tracking-normal leading-normal whitespace-nowrap">
                  {item.label}
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Header */}
        <motion.header
          className="lg:hidden flex items-center justify-between mx-4 md:mx-6 mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 absolute top-0 left-0 right-0 z-40 bg-black/20 rounded-full backdrop-blur-md"
          role="banner"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {/* Logo/Name */}
          <motion.div 
            className="flex items-center gap-2 md:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <span className="font-bold text-white text-base md:text-lg">{profileData.name.split(' ')[0]}</span>
          </motion.div>

          {/* Burger Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              variant="ghost"
              className="w-8 h-8 md:w-10 md:h-10 p-0 hover:bg-white/10 rounded-lg transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              ) : (
                <Menu className="w-4 h-4 md:w-5 md:h-5 text-white" />
              )}
            </Button>
          </motion.div>
        </motion.header>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop overlay with blur */}
              <motion.div
                className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-md"
                onClick={closeMobileMenu}
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              
              {/* Top Covering Mobile Sidebar */}
              <div className="lg:hidden fixed inset-0 z-50 flex items-start justify-center">
                <motion.nav
                  id="mobile-navigation"
                  className="relative w-full h-[90vh] bg-gradient-to-b from-[#a53860]/40 via-[#9b4265]/35 to-[#8b2f5a]/30 backdrop-blur-3xl rounded-b-[3rem] shadow-2xl border-b border-x border-white/30 overflow-hidden"
                  role="navigation"
                  aria-label="Mobile navigation"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1],
                    type: "tween"
                  }}
                >
                  {/* Header with Brand Name and Close Button */}
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 py-6 md:py-8 mt-4">
                    {/* Brand Name */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
                    >
                      <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">{profileData.name.split(' ')[0]}</h2>
                    </motion.div>

                    {/* Close Button */}
                    <motion.button
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-all duration-300 backdrop-blur-sm"
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 180, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: "backOut" }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.button>
                  </div>

                  {/* Content Container */}
                  <div className="px-6 md:px-8 pt-20 md:pt-24 pb-12 md:pb-16 h-full flex flex-col justify-center">

                    {/* Navigation Items */}
                    <div className="space-y-4 md:space-y-6 flex-1 flex flex-col justify-center">
                      {memoizedNavItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.25 + (index * 0.08),
                            ease: [0.4, 0.0, 0.2, 1]
                          }}
                        >
                          <motion.button
                            className="w-full text-left text-white text-xl md:text-2xl font-medium hover:text-[#f3b64c] transition-all duration-300 py-3 md:py-4 px-2 rounded-xl hover:bg-white/5"
                            onClick={() => {
                              scrollToSection(item.id);
                              closeMobileMenu();
                            }}
                            whileHover={{ x: 12 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.label}
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle bottom overlay for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-20 md:h-24 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </motion.nav>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Scroll Down Indicator - Center bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
        >
          <Button
            variant="ghost"
            className="inline-flex items-center gap-2 md:gap-3 lg:gap-4 absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-200 hover:opacity-80 bg-transparent border-none p-2 md:p-3 lg:p-4"
            onClick={() => scrollToSection('skills')}
            aria-label="Scroll down to skills section"
          >
            <span className="font-montserrat font-semibold text-white text-xs md:text-sm lg:text-base tracking-tight whitespace-nowrap">
              Scroll Down
            </span>
            <MouseIcon className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-white animate-bounce" />
          </Button>
        </motion.div>

        {/* Available for Hire Badge - Mobile: Below stats, Desktop: Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
          }}
          transition={{ duration: 0.6, delay: 1.3, ease: "backOut" }}
        >
          <Badge
            className="inline-flex items-center gap-1 md:gap-1.5 lg:gap-2 px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 absolute top-[30rem] md:top-[18%] lg:top-[15%] xl:top-[17%] left-[49%] transform -translate-x-1/2 bg-[#860d39] rounded-full border border-[#b76080] shadow-lg animate-pulse"
            role="status"
            aria-label="Available for hire status"
          >
            <div className="w-1 md:w-1.5 lg:w-2 xl:w-3 h-1 md:h-1.5 lg:h-2 xl:h-3 bg-[#e16190] rounded-full animate-pulse" />
            <span className="font-semibold text-white text-xs md:text-sm lg:text-base whitespace-nowrap">
              Available for Hire
            </span>
          </Badge>
        </motion.div>

        {/* Social Icons - Hide on mobile, show on desktop */}
        <motion.aside
          className="hidden md:inline-flex flex-col items-start justify-center gap-3 md:gap-4 lg:gap-5 px-3 md:px-4 lg:px-5 py-5 md:py-6 lg:py-7 absolute top-[10%] md:top-[12%] lg:top-[10%] left-4 lg:left-[7.5rem] xl:left-[10rem] rounded-full border border-[#b76080]"
          aria-label="Social media links"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          {memoizedSocialIcons.map((icon, index) => (
            <motion.div
              key={`social-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 1.1 + (index * 0.1), 
                ease: "backOut" 
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="flex w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 items-center justify-center p-2 md:p-3 lg:p-4 rounded-full border border-[#b76080] hover:bg-white/10 transition-colors duration-200"
                aria-label={`Social media link ${index + 1}`}
              >
                <img
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 object-contain"
                  alt={icon.alt}
                  src={icon.src}
                  loading="lazy"
                />
              </Button>
            </motion.div>
          ))}
        </motion.aside>
      </motion.section>
    </>
  );
};
