"use client";

import { ArrowRightIcon, MouseIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { HeroSection } from "./sections/HeroSection/HeroSection";

const navigationItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skill", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const statsData = [
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    value: "3",
    label: "Project Delivered",
  },
  {
    value: "50",
    label: "Clients Worldwide",
  },
];

const socialIcons = [
  {
    src: "/icon-5.png",
    alt: "Icon",
    className:
      "w-[50.92px] h-[50.92px] mt-[-2.31px] mb-[-2.31px] ml-[-2.31px] mr-[-2.31px] relative object-cover",
  },
  {
    src: "/icon-4.png",
    alt: "Icon",
    className: "w-[34.72px] h-[40.75px] relative object-cover",
  },
  {
    src: "/icon-3.png",
    alt: "Icon",
    className: "w-[40.5px] h-[40.5px] relative object-cover",
  },
  {
    src: "/image-6-1.png",
    alt: "Image",
    className: "relative w-[43.97px] h-[39.35px] object-cover",
  },
];

export const Dekstop = (): JSX.Element => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-white overflow-hidden w-full relative">
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

        {/* <img
          className="absolute w-[21.49%] h-[3.96%] top-[9.72%] left-[55.56%]"
          alt="Clip path group"
          src="/clip-path-group-1.png"
        /> */}

        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-[70vh] max-w-[610px] max-h-[735px] object-contain z-10"
          alt="Harmonious purple"
          src="/harmonious-purple-palette---candid-gentleman-portrait-1.png"
        />

        <div className="absolute top-[23%] left-1/2 transform -translate-x-1/2">
        <h2 className="font-anton font-normal text-[#f3b64c] text-[10vw] lg:text-[187.8px] text-center tracking-[-3.76px] leading-tight whitespace-nowrap z-0">
          FRONTEND
        </h2>
      </div>

        <div className="top-[45%] left-1/2 transform -translate-x-1/2 [-webkit-text-stroke:1px_#f3b64c] text-transparent absolute font-anton font-normal text-[8vw] lg:text-[168.8px] text-center tracking-[-3.38px] leading-tight whitespace-nowrap z-10">
          DEVELOPER
        </div>
        <div className="top-[45%] left-1/2 transform -translate-x-1/2 text-[#f3b64c] absolute font-anton font-normal text-[8vw] lg:text-[168.8px] text-center tracking-[-3.38px] leading-tight whitespace-nowrap z-0">
          DEVELOPER
        </div>

        {/* Background decorative image */}
        {/* <img
          className="absolute top-1/4 left-1/4 w-32 h-32 lg:w-48 lg:h-48 opacity-20 z-0"
          alt="Decorative star"
          src="/clip-path-group.png"
        /> */}
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

        <Card className="flex flex-col w-[222px] items-start gap-5 absolute top-[20%] right-4 lg:right-[100px] bg-transparent border-none shadow-none">
          <CardContent className="p-0 w-full">
            {statsData.map((stat, index) => (
              <div key={index}>
                <div className="flex flex-col items-start gap-[3px] relative w-full flex-[0_0_auto]">
                  <div className="relative w-full mt-[-1.00px] font-bold text-white text-4xl tracking-tight leading-tight">
                    {stat.value}
                  </div>

                  <div className="relative w-full font-semibold text-white text-lg tracking-normal leading-normal">
                    {stat.label}
                  </div>
                </div>

                {index < statsData.length - 1 && (
                  <img
                    className="w-full h-px relative object-cover my-5"
                    alt="Line"
                    src="/line-111.svg"
                  />
                )}
              </div>
            ))}

            <Button 
              className="flex h-14 items-center justify-center gap-2 pl-4 pr-2 py-2 relative w-full bg-[#f3b64c] rounded-[100px] mt-5 h-auto hover:bg-[#f3b64c]/90 cursor-pointer transition-all duration-200"
              onClick={() => scrollToSection('contact')}
            >
              <div className="relative flex-1 font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                Contact Me
              </div>

              <div className="inline-flex items-center gap-2 p-2 relative flex-[0_0_auto] bg-[#0a0d12] rounded-[100px]">
                <ArrowRightIcon className="relative w-5 h-5 text-white" />
              </div>
            </Button>
          </CardContent>
        </Card>

        <div className="flex flex-col w-full max-w-[451px] items-start gap-3.5 absolute bottom-[15%] left-4 lg:left-[120px] px-4 lg:px-0">
          <img
            className="relative w-[63px] h-[63px]"
            alt="Fluent mic filled"
            src="/fluent-mic-24-filled.svg"
          />

          <div className="relative w-full font-bold text-white text-3xl tracking-tight leading-tight">
            Hi, I&#39;m Edwin Anderson
          </div>

          <div className="relative w-full font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-white text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] [font-style:var(--text-lg-medium-font-style)]">
            a frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </div>
        </div>

        <nav className="inline-flex h-12 items-center justify-center gap-2 lg:gap-6 px-4 lg:px-6 py-0 absolute top-8 left-1/2 transform -translate-x-1/2 bg-[#00000033] rounded-[100px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-bg-blur z-50">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex items-center justify-center gap-2 p-2 relative flex-[0_0_auto] h-auto hover:bg-white/10 cursor-pointer transition-all duration-200 pointer-events-auto"
              onClick={() => scrollToSection(item.id)}
            >
              <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-white text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
                {item.label}
              </div>
            </Button>
          ))}
        </nav>

        <div 
          className="inline-flex items-center gap-0.5 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer transition-all duration-200 hover:opacity-80"
          onClick={() => scrollToSection('skills')}
        >
          <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
            Scroll Down
          </div>

          <MouseIcon className="relative w-6 h-6 text-white" />
        </div>

        <Badge className="inline-flex items-center gap-2 px-6 py-3 absolute top-[15%] left-1/2 transform -translate-x-1/2 bg-[#860d39] rounded-full border border-solid border-[#b76080] hover:bg-[#860d39] shadow-lg">
          <div className="relative w-3 h-3 bg-[#e16190] rounded-full" />

          <div className="relative w-fit font-semibold text-white text-base tracking-normal leading-normal whitespace-nowrap">
            Available for Hire
          </div>
        </Badge>

        <div className="inline-flex flex-col items-start justify-center gap-[18px] px-[18px] py-[28px] absolute top-[10%] left-4 lg:left-[120px] rounded-[13613.1px] border-[1.36px] border-solid border-[#b76080]">
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

        <div className="absolute top-[18%] left-1/4 lg:left-[314px] rotate-[-12.34deg] font-normal text-white text-[6vw] lg:text-[113.2px] tracking-[-2.26px] leading-tight whitespace-nowrap z-10" style={{ fontFamily: 'var(--font-bonheur-royale), "Bonheur Royale", cursive' }}>
          Junior
        </div>
      </section>

      <div id="skills">
        {/* <SkillsSection /> */}
      </div>
      <div id="about">
        <HeroSection />
      </div>
    </div>
  );
};
