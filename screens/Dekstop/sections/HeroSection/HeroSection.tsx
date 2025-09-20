"use client";

import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";
import { About } from "../About/About";
import { ArrowRightIcon, MouseIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";

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

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

const technologyData = [
  {
    name: "HTML",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icon-3.png",
    highlighted: true,
  },
  {
    name: "CSS",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icon-4.png",
    highlighted: false,
  },
  {
    name: "Javascript",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icon-5.png",
    highlighted: true,
  },
  {
    name: "React",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/image-6-1.png",
    highlighted: false,
  },
];

const withMeFeatures = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "Performance Optimization",
  "UI Design Proficiency (Figma)",
];

const anotherTalentFeatures = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "Slow and Heavy Websites",
  "No Design Skills",
];

const portfolioData = [
  {
    title: "Portfolio 1",
    category: "Web Development",
    image: "/portfolio-image.png",
  },
  {
    title: "Portfolio 2",
    category: "Web Development",
    image: "/portfolio-image-1.png",
  },
  {
    title: "Portfolio 3",
    category: "Web Development",
    image: "/portfolio-image-3.png",
  },
];

const experienceData = [
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/vector-3.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/vector-6.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: [
      "/vector-5.svg",
      "/vector.svg",
      "/vector-1.svg",
      "/vector-2.svg",
      "/vector-4.svg",
    ],
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
];

const faqData = [
  {
    number: "01",
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    expanded: true,
  },
  {
    number: "02",
    question: "Do you work on freelance or remote projects?",
    expanded: false,
  },
  {
    number: "03",
    question: "Can you convert Figma or Sketch designs into code?",
    expanded: false,
  },
  {
    number: "04",
    question: "Do you collaborate with backend developers or teams?",
    expanded: false,
  },
  {
    number: "05",
    question: "Are you available for full-time roles?",
    expanded: false,
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <>
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

      <About />

      <section id="skills" className="w-full relative">
        <div className="flex flex-col w-full items-center gap-12 px-[120px] py-20 relative flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(158,56,94,0)_0%,rgba(158,56,94,0.1)_100%)]">
          <div className="flex flex-col w-[847px] items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative text-center text-4xl font-bold text-[#0a0d12] leading-tight">
              Code, Design, and Everything in Between
            </div>

            <div className="relative text-center text-lg font-medium text-[#6b7280] leading-relaxed">
              These are the technologies that power my workflow and bring ideas to
              life.
            </div>
          </div>

          <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-6 relative flex-[0_0_auto]">
              {technologyData.map((tech, index) => (
                <Card
                  key={index}
                  className={`flex flex-col w-[250px] items-center gap-6 px-6 py-12 relative rounded-[110px] ${tech.highlighted ? "bg-[#f3b64c]" : "bg-[#fdfdfd] border border-solid border-[#d5d7da]"}`}
                >
                  <CardContent className="p-0 flex flex-col items-center gap-4">
                    <div
                      className={`${tech.highlighted ? "bg-[#fdfdfd]" : "bg-[#f4f4f4]"} flex w-[80px] h-[80px] items-center justify-center gap-2.5 p-3 relative rounded-full`}
                    >
                      {tech.name === "HTML" && (
                        <div className="absolute top-5 left-6 w-6 h-[32px] bg-[#fdfdfd]" />
                      )}

                      <img
                        className={`${tech.name === "HTML" ? "w-[42px] h-[42px]" : tech.name === "CSS" ? "w-[36px] h-[42px]" : tech.name === "Javascript" ? "w-[48px] h-[48px]" : "w-[45px] h-[40px]"} relative object-cover`}
                        alt="Icon"
                        src={tech.icon}
                      />
                    </div>

                    <div className="flex flex-col items-center gap-3 relative self-stretch w-full">
                      <div className="relative text-center text-xl font-semibold text-[#0a0d12] leading-tight">
                        {tech.name}
                      </div>

                      <div className="relative text-center text-base font-normal text-[#6b7280] leading-relaxed">
                        {tech.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <Button
                variant="outline"
                size="icon"
                className="inline-flex items-center justify-center w-12 h-12 p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50"
              >
                <img
                  className="relative w-6 h-6"
                  alt="Arrow left"
                  src="/arrow-right-1.svg"
                />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="inline-flex items-center justify-center w-12 h-12 p-3 rounded-full border border-solid border-[#d5d7da] relative flex-[0_0_auto] bg-white hover:bg-gray-50"
              >
                <img
                  className="relative w-6 h-6"
                  alt="Arrow right"
                  src="/arrowright.png"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-col w-full items-start gap-2 px-[120px] py-20 flex-[0_0_auto] bg-white flex relative">
        <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative text-center text-5xl font-bold text-[#0a0d12] leading-tight max-w-4xl">
              More Than Just Code
            </div>

            <div className="relative text-center text-lg font-medium text-[#6b7280] leading-relaxed max-w-2xl">
              We care about design, performance, and user experience all in one.
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl border border-solid border-[#ffffff40]">
            <Card className="flex flex-col items-center justify-start gap-6 p-8 flex-1 self-stretch bg-[#f3b64c] rounded-3xl">
              <CardContent className="p-0 flex flex-col items-center gap-6 w-full">
                <div className="text-center text-lg font-bold text-[#0a0d12]">
                  With Me
                </div>

                <div className="bg-[#b76080] rounded-[15229.25px] relative w-[100px] h-[100px] overflow-hidden">
                  <img
                    className="absolute top-2 left-[calc(50.00%_-_37px)] w-[86px] h-[92px]"
                    alt="Harmonious purple"
                    src="/harmonious-purple-palette---candid-gentleman-portrait-1-1.png"
                  />
                </div>

                <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                  {withMeFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="items-center justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative"
                    >
                      <img
                        className="relative w-6 h-6"
                        alt="Check icon"
                        src="/check-icon.svg"
                      />

                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center justify-center gap-8 p-8 relative flex-1 self-stretch grow bg-white rounded-2xl border border-solid border-[#d5d7da]">
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                    Another Talent
                  </div>

                  <div className="bg-[#d5d7da] rounded-[12698.74px] relative w-[90px] h-[90px] overflow-hidden mb-8">
                    <img
                      className="absolute top-[-7237px] left-[-17281px] w-[75px] h-[75px] object-cover"
                      alt="Casual confidence"
                    />

                    <img
                      className="absolute top-[calc(50.00%_-_30px)] left-[calc(50.00%_-_30px)] w-[60px] h-[60px]"
                      alt="Profile"
                      src="/profile.svg"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  {anotherTalentFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="items-center justify-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative"
                    >
                      <img
                        className="relative w-6 h-6"
                        alt="Close icon"
                        src="/close-icon.svg"
                      />

                      <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div id="projects" className="flex flex-col items-start gap-12 px-[120px] py-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col max-w-4xl gap-4 items-start relative">
            <div className="relative text-6xl font-display-xl-bold font-[number:var(--display-xl-bold-font-weight)] tracking-[var(--display-xl-bold-letter-spacing)] leading-tight [font-style:var(--display-xl-bold-font-style)]">
              <span className="text-[#0a0d12]">
                Design to{" "}
              </span>
              <span className="text-[#b76080]">
                Code Accuracy
              </span>
            </div>

            <div className="text-xl font-text-medium text-[#6b7280] leading-relaxed max-w-3xl">
              We translated design mockups into pixel-perfect, responsive
              components, ensuring a smooth user experience across all devices.
            </div>
          </div>

          <Button className="flex w-[156px] h-14 items-center justify-center gap-2 pl-4 pr-2 py-2 relative rounded-[100px] border border-solid border-[#d5d7da] bg-transparent text-[#0a0d12] hover:bg-gray-50 h-auto">
            <div className="relative flex-1 font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
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
        </div>

        <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {portfolioData.map((portfolio, index) => (
            <div
              key={index}
              className="flex flex-col items-start relative flex-1 grow"
            >
              <Card className="flex items-center gap-2 p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#f4f4f4] rounded-[20px]">
                <CardContent className="p-0">
                  <img
                    className="relative flex-1 grow h-[354.67px] rounded-lg object-cover"
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
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-12 px-[120px] py-20 relative flex-[0_0_auto] bg-[#0a0d12]">
        <div className="justify-between self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex flex-col gap-0 max-w-2xl">
            <div className="text-3xl font-display-xl-bold font-[number:var(--display-xl-bold-font-weight)] tracking-[var(--display-xl-bold-letter-spacing)] leading-tight [font-style:var(--display-xl-bold-font-style)]">
              <span className="text-[#fdfdfd]">
                Experiences That
              </span>
            </div>
            <div className="text-3xl font-display-xl-bold font-[number:var(--display-xl-bold-font-weight)] tracking-[var(--display-xl-bold-letter-spacing)] leading-tight [font-style:var(--display-xl-bold-font-style)]">
              <span className="text-[#f3b64c]">
                Shaped Me
              </span>
              <span className="text-[#fdfdfd]">
                !
              </span>
            </div>
          </div>

          <div className="relative max-w-md mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#fdfdfd] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
            From startups to side projects, every step
            <br />
            has been a chance to learn, build, and
            <br />
            level up.
          </div>
        </div>

        <Separator className="w-[1242px] h-px mr-[-42.00px] relative object-cover" />

        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          {experienceData.map((experience, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] bg-[#0a0d12]">
                <div className="flex flex-col w-[178px] items-start gap-1 relative">
                  <div className="relative self-stretch mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#a4a7ae] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] [font-style:var(--text-sm-medium-font-style)]">
                    {experience.period}
                  </div>

                  <div className="relative self-stretch text-xl font-bold text-[#fdfdfd] leading-tight">
                    {experience.role}
                  </div>
                </div>

                <div className="relative w-48 h-20 rounded-2xl border-2 border-solid border-[#3a3f4a] p-1">
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

                <div className="relative w-[513px] mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-[#a4a7ae] text-base tracking-[-0.48px] leading-[30px]">
                  {experience.description}
                </div>
              </div>

              {index < experienceData.length - 1 && (
                <Separator className="self-stretch w-full h-px relative object-cover" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex-col w-full gap-12 px-[120px] py-20 flex-[0_0_auto] flex items-center relative">
        <div className="flex flex-col w-[847px] items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative text-center text-4xl font-bold text-[#0a0d12] leading-tight">
            What They Say About Working With Me
          </div>

          <div className="relative text-center text-lg font-medium text-[#6b7280] leading-relaxed">
            Real words from clients, teammates, and mentors I&apos;ve
            collaborated with on various projects.
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex justify-center items-center w-full">
            {/* Back layer - lightest */}
            <div className="absolute z-0 w-[900px] h-[280px] bg-[#e8c5d3] rounded-3xl top-4" />
            
            {/* Middle layer */}
            <div className="absolute z-10 w-[950px] h-[290px] bg-[#d4a0b3] rounded-3xl top-2" />
            
            {/* Front testimonial card */}
            <Card className="relative z-20 flex flex-col w-[1000px] items-center gap-8 px-12 py-10 bg-[#b76080] rounded-3xl">
              <CardContent className="p-0 flex flex-col items-center gap-6 w-full max-w-4xl">
                {/* 5 Star Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#f3b64c] text-2xl">★</span>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <div className="text-center text-xl font-semibold text-white leading-relaxed px-8">
                  "Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!"
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-center gap-3">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    alt="Sarah Tan"
                    src="/ellipse-8.png"
                  />
                  
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-lg font-bold text-white">
                      Sarah Tan
                    </div>
                    <div className="text-base text-white/80">
                      Product Manager at Finovate
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center"
            >
              <svg 
                className="w-5 h-5 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center"
            >
              <svg 
                className="w-5 h-5 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div id="faq" className="flex flex-col w-full items-center gap-12 px-[120px] py-20 relative flex-[0_0_auto] bg-[#f4f4f4]">
        <div className="flex flex-col w-[847px] items-start gap-2 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-display-xl-bold font-[number:var(--display-xl-bold-font-weight)] text-[#0a0d12] text-[length:var(--display-xl-bold-font-size)] text-center tracking-[var(--display-xl-bold-letter-spacing)] leading-[var(--display-xl-bold-line-height)] [font-style:var(--display-xl-bold-font-style)]">
            Let&apos;s Clear Things Up
          </div>

          <div className="relative self-stretch font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#0a0d12] text-[length:var(--text-md-medium-font-size)] text-center tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
            I&apos;ve answered a few questions that usually come up when working
            with a frontend developer like me.
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
          {faqData.map((faq, index) => (
            <React.Fragment key={index}>
              <div className="items-start flex justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="w-fit font-[number:var(--display-xs-semibold-font-weight)] text-[#0a0d12] text-[length:var(--display-xs-semibold-font-size)] text-center tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] whitespace-nowrap relative mt-[-1.00px] font-display-xs-semibold [font-style:var(--display-xs-semibold-font-style)]">
                  {faq.number}
                </div>

                <div className="flex flex-col w-[761px] items-start gap-3 relative">
                  <div className="relative self-stretch mt-[-1.00px] font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-[#0a0d12] text-[length:var(--display-xs-semibold-font-size)] tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] [font-style:var(--display-xs-semibold-font-style)]">
                    {faq.question}
                  </div>

                  {faq.expanded && faq.answer && (
                    <div className="relative self-stretch font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#414651] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
                      {faq.answer}
                    </div>
                  )}
                </div>

                <Button
                  size="icon"
                  className={`w-12 h-12 gap-[10.67px] p-[10.67px] rounded-[133.33px] flex items-center relative h-auto ${faq.expanded ? "bg-[#b76080]" : "bg-white border border-solid border-[#d5d7da]"}`}
                >
                  <img
                    className="relative w-6 h-6"
                    alt={faq.expanded ? "Plus" : "Minus"}
                    src={faq.expanded ? "/plus.svg" : "/minus.svg"}
                  />
                </Button>
              </div>

              {index < faqData.length - 1 && (
                <Separator className="self-stretch w-full h-px relative object-cover" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div id="contact" className="flex w-full items-start justify-center gap-12 p-[120px] relative flex-[0_0_auto]">
        <div className="flex-col w-[540px] justify-center gap-10 flex items-start relative">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-display-xl-bold font-[number:var(--display-xl-bold-font-weight)] text-[#0a0d12] text-[length:var(--display-xl-bold-font-size)] tracking-[var(--display-xl-bold-letter-spacing)] leading-[var(--display-xl-bold-line-height)] [font-style:var(--display-xl-bold-font-style)]">
              Let&apos;s Work Together
            </div>

            <div className="relative self-stretch font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#0a0d12] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
              Have a project in mind or just want to say hi? Drop me a message —
              I&apos;d love to hear from you.
            </div>
          </div>

          <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
            <img
              className="rounded-lg relative w-[142px] h-[142px] object-cover"
              alt="Portfolio image"
              src="/portfolio-image-3.png"
            />

            <img
              className="relative w-[142px] h-[142px] object-cover"
              alt="Portfolio image"
              src="/portfolio-image-4.png"
            />

            <img
              className="relative w-[142px] h-[142px] object-cover"
              alt="Portfolio image"
              src="/portfolio-image-5.png"
            />
          </div>
        </div>

        <Card className="flex flex-col items-start gap-2 p-8 relative flex-1 grow bg-white rounded-3xl shadow-[0px_0px_28px_#c4c4c440]">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="relative self-stretch mt-[-1.00px] font-text-sm-bold font-[number:var(--text-sm-bold-font-weight)] text-[#0a0d12] text-[length:var(--text-sm-bold-font-size)] tracking-[var(--text-sm-bold-letter-spacing)] leading-[var(--text-sm-bold-line-height)] [font-style:var(--text-sm-bold-font-style)]">
                  Name
                </Label>

                <Input
                  placeholder="Enter your name"
                  className="flex h-12 items-center justify-center gap-2 px-4 py-2 relative self-stretch w-full rounded-xl border border-solid border-[#d5d7da]"
                />
              </div>

              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="relative self-stretch mt-[-1.00px] font-text-sm-bold font-[number:var(--text-sm-bold-font-weight)] text-[#0a0d12] text-[length:var(--text-sm-bold-font-size)] tracking-[var(--text-sm-bold-letter-spacing)] leading-[var(--text-sm-bold-line-height)] [font-style:var(--text-sm-bold-font-style)]">
                  Email
                </Label>

                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex h-12 items-center justify-center gap-2 px-4 py-2 relative self-stretch w-full rounded-xl border border-solid border-[#d5d7da]"
                />
              </div>

              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="relative self-stretch mt-[-1.00px] font-text-sm-bold font-[number:var(--text-sm-bold-font-weight)] text-[#0a0d12] text-[length:var(--text-sm-bold-font-size)] tracking-[var(--text-sm-bold-letter-spacing)] leading-[var(--text-sm-bold-line-height)] [font-style:var(--text-sm-bold-font-style)]">
                  Message
                </Label>

                <Textarea
                  placeholder="Enter your message"
                  className="flex h-[134px] items-start gap-2 px-4 py-2 relative self-stretch w-full rounded-xl border border-solid border-[#d5d7da]"
                />
              </div>

              <Button className="flex h-12 items-center justify-center gap-1 p-2 relative self-stretch w-full bg-[#b76080] rounded-full hover:bg-[#a55570] h-auto">
                <div className="relative w-fit font-text-sm-bold font-[number:var(--text-sm-bold-font-weight)] text-white text-[length:var(--text-sm-bold-font-size)] tracking-[var(--text-sm-bold-letter-spacing)] leading-[var(--text-sm-bold-line-height)] whitespace-nowrap [font-style:var(--text-sm-bold-font-style)]">
                  Let&apos;s Talk
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        <img
          className="absolute top-[-35px] left-[calc(50.00%_+_211px)] w-48 h-[170px]"
          alt="Element"
          src="/24a839d1d8.png"
        />
      </div>
    </>
  );
};
