"use client";

import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRightIcon, MouseIcon, Menu, X } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { statsData, socialIcons, navigationItems } from "@/src/constants/mockupData";


const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const HeroSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* hero section */}
      <section id="home" className="relative w-full h-screen min-h-[600px]">
        <div className="flex w-full h-full items-center gap-2 absolute top-0 left-0 bg-[#a53860]">
          <div className="relative w-1/2 h-full bg-[#a53860]" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-white">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            alt="Element"
            src="/227.png"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-[#a53860f0]" />
        </div>

        <img
          className="absolute w-[13.89%] h-[3.23%] top-[5.29%] left-[20.21%]"
          alt="Clip path group"
          src="/clip-path-group.png"
        />

        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-[45vh] md:h-[70vh] lg:h-[70vh] max-w-[350px] md:max-w-[400px] lg:max-w-[610px] max-h-[400px] md:max-h-[500px] lg:max-h-[735px] object-contain z-10"
          alt="Harmonious purple"
          src="/harmonious-purple-palette---candid-gentleman-portrait-1.png"
        />

        <div className="absolute top-[58%] md:top-[18%] left-[4%] md:left-1/4 lg:left-[314px] rotate-[-12.34deg] font-bonheur-royale font-normal text-white text-[18vw] md:text-[6vw] lg:text-[113.2px] tracking-[-2.26px] leading-tight whitespace-nowrap z-10">
          Junior
        </div>

        <div className="absolute top-[60%] md:top-[23%] left-1/2 transform -translate-x-1/2 px-1 md:px-0">
          <h2 className="font-anton font-normal text-[#f3b64c] text-[28vw] md:text-[10vw] lg:text-[187.8px] text-center tracking-[-3.76px] leading-tight whitespace-nowrap z-0">
            FRONTEND
          </h2>
        </div>

        <div className="top-[73%] md:top-[45%] left-1/2 transform -translate-x-1/2 [-webkit-text-stroke:1px_#f3b64c] text-transparent absolute font-anton font-normal text-[25vw] md:text-[8vw] lg:text-[168.8px] text-center tracking-[-3.38px] leading-tight whitespace-nowrap z-10 px-1 md:px-0">
          DEVELOPER
        </div>
        <div className="top-[73%] md:top-[45%] left-1/2 transform -translate-x-1/2 text-[#f3b64c] absolute font-anton font-normal text-[25vw] md:text-[8vw] lg:text-[168.8px] text-center tracking-[-3.38px] leading-tight whitespace-nowrap z-0 px-1 md:px-0">
          DEVELOPER
        </div>

        <img
          className="absolute top-16 right-1/4 w-32 h-32 lg:w-48 lg:h-48 opacity-50 z-0"
          alt="Decorative star"
          src="/clip-path-group.png"
        />
        <img
          className="absolute bottom-20 left-1/4 w-16 h-16 lg:w-20 lg:h-20 opacity-25 z-0"
          alt="Decorative star"
          src="/clip-path-group.png"
        />

        {/* Stats Card - Mobile: After intro, Desktop: Top Right */}
        <Card className="flex flex-col w-full max-w-[350px] md:w-[222px] items-start gap-6 md:gap-5 absolute top-[220px] md:bottom-auto md:top-[20%] left-6 right-6 md:left-auto md:transform-none md:right-4 lg:right-[100px] bg-transparent border-none shadow-none">
          <CardContent className="p-0 w-full">
            {/* Mobile: Grid layout, Desktop: Vertical layout */}
            <div className="grid grid-cols-2 md:block gap-2 md:gap-0 w-full">
              {statsData.map((stat, index) => (
                <div key={index}>
                  <div className="flex flex-col items-start gap-[4px] relative w-full flex-[0_0_auto]">
                    <div className="relative w-full mt-[-1.00px] font-bold text-white text-3xl md:text-4xl tracking-tight leading-tight">
                      {stat.value}
                    </div>

                    <div className="relative w-full font-montserrat font-semibold text-white text-sm md:text-lg tracking-normal leading-normal">
                      {stat.label}
                    </div>
                  </div>

                  {/* Hide lines on mobile, show on desktop between items */}
                  {index < statsData.length - 1 && (
                    <img
                      className="hidden md:block w-full h-px relative object-cover my-5"
                      alt="Line"
                      src="/line-111.svg"
                    />
                  )}
                </div>
              ))}
            </div>

            <Button
              className="flex h-14 md:h-14 items-center justify-center gap-2 pl-4 md:pl-4 pr-2 py-2 relative w-full bg-[#f3b64c] rounded-[100px] mt-6 md:mt-5 h-auto hover:bg-[#f3b64c]/90 cursor-pointer transition-all duration-200"
              onClick={() => scrollToSection('contact')}
            >
              <div className="relative flex-1 font-semibold text-[#0a0d12] text-base md:text-base tracking-tight leading-normal">
                Contact Me
              </div>

              <div className="inline-flex items-center gap-2 p-2 relative flex-[0_0_auto] bg-[#0a0d12] rounded-[100px]">
                <ArrowRightIcon className="relative w-5 md:w-5 h-5 md:h-5 text-white" />
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Introduction Section - Mobile: Top, Desktop: Bottom Left */}
        <div className="flex flex-col w-full max-w-[320px] md:max-w-[400px] items-start gap-2 md:gap-3 absolute top-[80px] md:top-auto md:bottom-[10%] left-6 right-6 md:left-4 lg:left-[120px] px-0 md:px-4 lg:px-0">
          <img
            className="relative w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            alt="Fluent mic filled"
            src="/fluent-mic-24-filled.svg"
          />

          <div className="relative w-full font-bold text-white text-lg md:text-2xl tracking-tight leading-tight">
            Hi, I'm Edwin Anderson
          </div>

          <div className="relative w-full font-montserrat font-medium text-white text-xs md:text-base tracking-normal leading-relaxed">
            a frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:inline-flex h-12 items-center justify-center gap-6 px-6 py-0 absolute top-8 left-1/2 transform -translate-x-1/2 bg-[#00000033] rounded-[100px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-bg-blur z-50">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex items-center justify-center gap-2 p-2 relative flex-[0_0_auto] h-auto hover:bg-white/10 cursor-pointer transition-all duration-200 pointer-events-auto"
              onClick={() => scrollToSection(item.id)}
            >
              <div className="relative w-fit mt-[-1.00px] font-montserrat font-medium text-white text-base tracking-normal leading-normal whitespace-nowrap">
                {item.label}
              </div>
            </Button>
          ))}
        </nav>

        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between mx-4 mt-4 px-4 py-2 absolute top-0 left-0 right-0 z-50 bg-[#00000033] rounded-full backdrop-blur-[20px]">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 bg-[#ffffff20] rounded-full flex items-center justify-center">
              <img
                className="w-5 h-5"
                alt="Fluent mic filled"
                src="/fluent-mic-24-filled.svg"
              />
            </div> */}
            <span className="font-bold text-white text-lg">Edwin</span>
          </div>

          {/* Burger Menu Button */}
          <Button
            variant="ghost"
            className="w-8 h-8 p-0 hover:bg-white/10 rounded-lg"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </Button>
        </header>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-[#a53860] bg-opacity-95 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="text-white text-xl font-medium hover:bg-white/10 p-4"
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Scroll Down - Center bottom */}
        <div
          className="inline-flex items-center gap-0.5 absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer transition-all duration-200 hover:opacity-80"
          onClick={() => scrollToSection('skills')}
        >
          <div className="relative w-fit mt-[-1.00px] font-montserrat font-semibold text-white text-sm md:text-base tracking-tight leading-normal whitespace-nowrap">
            Scroll Down
          </div>

          <MouseIcon className="relative w-5 md:w-6 h-5 md:h-6 text-white" />
        </div>

        {/* Available for Hire Badge - Mobile: Below stats, Desktop: Center */}
        <Badge className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-1.5 md:py-3 absolute top-[440px] md:top-[15%] left-1/2 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 bg-[#860d39] rounded-full border border-solid border-[#b76080] hover:bg-[#860d39] shadow-lg">
          <div className="relative w-1.5 md:w-3 h-1.5 md:h-3 bg-[#e16190] rounded-full" />

          <div className="relative w-fit font-semibold text-white text-xs md:text-base tracking-normal leading-normal whitespace-nowrap">
            Available for Hire
          </div>
        </Badge>

        {/* Social Icons - Hide on mobile, show on desktop */}
        <div className="hidden md:inline-flex flex-col items-start justify-center gap-[18px] px-[18px] py-[28px] absolute top-[10%] left-4 lg:left-[120px] rounded-[13613.1px] border-[1.36px] border-solid border-[#b76080]">
          {socialIcons.map((icon, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex w-[58px] h-[58px] items-center justify-center gap-[9px] p-[9px] relative rounded-[28927.83px] border-[1.36px] border-solid border-[#b76080] hover:bg-white/10 h-auto"
            >
              {index === 2 && (
                <div className="absolute top-[16px] left-[19px] w-[20px] h-[26px] bg-white" />
              )}
              <img
                className={icon.className.replace(/w-\[[^\]]+\]/g, 'w-[36px]').replace(/h-\[[^\]]+\]/g, 'h-[36px]')}
                alt={icon.alt}
                src={icon.src}
              />
            </Button>
          ))}
        </div>

        
      </section>
    </>
  );
};
