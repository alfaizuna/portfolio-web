"use client";

import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";

const featureData = [
  {
    icon: "⚙️",
    title: "COMPONENT-BASED DEVELOPMENT",
    description:
      "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    icon: "🎨",
    title: "PIXEL-PERFECT UI IMPLEMENTATION",
    description:
      "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    icon: "📱",
    title: "RESPONSIVE & ACCESSIBLE DESIGN",
    description:
      "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];

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
      {/*buat margin bottom  */}
      {/* <div className="mb-80"></div>
      <div className="mb-60"></div> */}

      <section id="about" className="flex flex-col w-full items-start relative">
        {/* Main Text Section - Now below the photo */}
        <div className="flex items-center justify-center gap-2 px-[120px] py-20 relative self-stretch w-full flex-[0_0_auto]">


          <div className="relative w-[1100px] mt-[-1.00px] text-3xl md:text-2xl lg:text-4xl font-bold text-center leading-tight z-10">
            <span className="text-[#0a0d12]">
              As frontend developers, we bring designs to life
            </span>

            <br />

            <span className="text-[#0a0d12]">
              with{" "}
            </span>

            <span className="text-[#b76080]">
              clean, responsive code
            </span>

            <span className="text-[#0a0d12]">
              {" "}that blends creativity
            </span>

            <br />

            <span className="text-4xl md:text-3xl lg:text-4xl">🎨</span>

            <span className="text-[#0a0d12]">
              {" "}with usability{" "}
            </span>

            <span className="text-4xl md:text-3xl lg:text-4xl">🌟</span>

            <span className="text-[#0a0d12]">
              .
            </span>
          </div>
        </div>

        <div className="flex items-start gap-10 px-[120px] py-20 relative self-stretch w-full flex-[0_0_auto]">
          {featureData.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                <div className="flex w-[63px] h-[63px] items-center justify-center gap-[10.5px] px-[6.56px] py-[2.62px] relative rounded-full overflow-hidden border-[1.31px] border-solid border-[#d5d7da]">
                  <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-9 whitespace-nowrap">
                    {feature.icon}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] font-bold text-[#0a0d12] text-xl tracking-tight leading-tight uppercase">
                    {feature.title}
                  </h3>

                  <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#6b7280] text-base tracking-normal leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {index < featureData.length - 1 && (
                <div className="w-px h-32 bg-[#e5e7eb] relative"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

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

                  <div className="top-7 left-[-9px] h-[29px] rotate-180 absolute w-[97px]">
                    {/* <img
                      className="absolute w-[8.93%] h-[57.86%] top-0 left-[90.52%] -rotate-180"
                      alt="Clip path group"
                      src={`/clip-path-group-${index + 2}.png`}
                    /> */}

                    <Badge className="top-2 left-0 h-[21px] flex bg-[#f3b64c] rounded-[178.63px_0px_0px_178.63px] overflow-hidden absolute w-[97px]">
                      <div className="-mt-px w-20 h-6 ml-[11px] rotate-180 font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                        Best Portfolio
                      </div>
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex items-center justify-between p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#f4f4f4] rounded-[20px]">
                <CardContent className="p-0">
                  <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-lg-bold font-[number:var(--text-lg-bold-font-weight)] text-[#0a0d12] text-[length:var(--text-lg-bold-font-size)] tracking-[var(--text-lg-bold-letter-spacing)] leading-[var(--text-lg-bold-line-height)] [font-style:var(--text-lg-bold-font-style)]">
                      {portfolio.title}
                    </div>

                    <Separator className="self-stretch w-full h-px relative object-cover" />

                    <div className="relative self-stretch font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#535861] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
                      {portfolio.category}
                    </div>
                  </div>

                  <Button
                    size="icon"
                    className="inline-flex items-center gap-2 p-2 relative flex-[0_0_auto] bg-[#b76080] rounded-[100px] h-auto"
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
          <div className="relative w-[365px] mt-[-1.00px] font-display-xl-bold font-[number:var(--display-xl-bold-font-weight)] text-transparent text-[length:var(--display-xl-bold-font-size)] tracking-[var(--display-xl-bold-letter-spacing)] leading-[var(--display-xl-bold-line-height)] [font-style:var(--display-xl-bold-font-style)]">
            <span className="text-[#fdfdfd] tracking-[var(--display-xl-bold-letter-spacing)] font-display-xl-bold [font-style:var(--display-xl-bold-font-style)] font-[number:var(--display-xl-bold-font-weight)] leading-[var(--display-xl-bold-line-height)] text-[length:var(--display-xl-bold-font-size)]">
              Experiences That{" "}
            </span>

            <span className="text-[#f3b64c] tracking-[var(--display-xl-bold-letter-spacing)] font-display-xl-bold [font-style:var(--display-xl-bold-font-style)] font-[number:var(--display-xl-bold-font-weight)] leading-[var(--display-xl-bold-line-height)] text-[length:var(--display-xl-bold-font-size)]">
              Shaped Me
            </span>

            <span className="text-[#fdfdfd] tracking-[var(--display-xl-bold-letter-spacing)] font-display-xl-bold [font-style:var(--display-xl-bold-font-style)] font-[number:var(--display-xl-bold-font-weight)] leading-[var(--display-xl-bold-line-height)] text-[length:var(--display-xl-bold-font-size)]">
              !
            </span>
          </div>

          <div className="relative w-[366px] mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#fdfdfd] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
            From startups to side projects, every step has been a chance to
            learn, build, and level up.
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

                  <div className="relative self-stretch font-text-xl-bold font-[number:var(--text-xl-bold-font-weight)] text-[#fdfdfd] text-[length:var(--text-xl-bold-font-size)] tracking-[var(--text-xl-bold-letter-spacing)] leading-[var(--text-xl-bold-line-height)] [font-style:var(--text-xl-bold-font-style)]">
                    {experience.role}
                  </div>
                </div>

                <Card className="flex flex-col w-48 items-start gap-2 p-2 relative rounded-2xl border border-solid border-[#252b37]">
                  <CardContent className="flex flex-col items-start gap-2 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#0a0d12] rounded-2xl border border-solid border-[#252b37]">
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
                  </CardContent>
                </Card>

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
        <div className="flex flex-col w-[847px] items-start gap-2 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-display-xl-bold font-[number:var(--display-xl-bold-font-weight)] text-[#0a0d12] text-[length:var(--display-xl-bold-font-size)] text-center tracking-[var(--display-xl-bold-letter-spacing)] leading-[var(--display-xl-bold-line-height)] [font-style:var(--display-xl-bold-font-style)]">
            What They Say About Working With Me
          </div>

          <div className="relative self-stretch font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#0a0d12] text-[length:var(--text-md-medium-font-size)] text-center tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
            Real words from clients, teammates, and mentors I&apos;ve
            collaborated with on various projects.
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch w-full h-[437px]">
            <div className="absolute top-[365px] left-[100px] w-[1000px] h-14 bg-[#b7608033] rounded-2xl" />

            <div className="absolute top-[343px] left-[50px] w-[1100px] h-14 bg-[#d4a0b3] rounded-2xl" />

            <Card className="flex flex-col w-[1200px] items-center gap-8 px-10 py-8 absolute top-0 left-0 bg-[#b76080] rounded-3xl">
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Rating"
                    src="/rating.svg"
                  />

                  <div className="relative self-stretch font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-[#fdfdfd] text-[length:var(--display-xs-semibold-font-size)] text-center tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] [font-style:var(--display-xs-semibold-font-style)]">
                    &quot;Working with Edwin Anderson was a smooth experience
                    from start to finish. He translated our design into clean,
                    responsive code and even suggested improvements we
                    hadn&apos;t thought of. Highly recommended!&quot;
                  </div>
                </div>

                <div className="flex flex-col w-[546px] items-center gap-2 relative flex-[0_0_auto]">
                  <img
                    className="relative w-16 h-16 object-cover"
                    alt="Ellipse"
                    src="/ellipse-8.png"
                  />

                  <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                    <div className="mt-[-1.00px] font-[number:var(--text-lg-semibold-font-weight)] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] relative self-stretch font-text-lg-semibold text-[#fdfdfd] text-center [font-style:var(--text-lg-semibold-font-style)]">
                      Sarah Tan
                    </div>

                    <div className="font-[number:var(--text-md-medium-font-weight)] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] relative self-stretch font-text-md-medium text-[#fdfdfd] text-center [font-style:var(--text-md-medium-font-style)]">
                      Product Manager at Finovate
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              size="icon"
              className="inline-flex items-center gap-[10.67px] p-[10.67px] rounded-[133.33px] border border-solid border-[#d5d7da] relative flex-[0_0_auto] h-auto"
            >
              <img
                className="relative w-6 h-6"
                alt="Arrow right"
                src="/arrow-right-1.svg"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="inline-flex items-center gap-[10.67px] p-[10.67px] rounded-[133.33px] border border-solid border-[#d5d7da] relative flex-[0_0_auto] h-auto"
            >
              <img
                className="relative w-6 h-6"
                alt="Arrow right"
                src="/arrow-right-2.svg"
              />
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

      <footer className="flex w-full items-center gap-[275px] px-32 py-6 relative flex-[0_0_auto] bg-[#0a0d12]">
        <div className="flex w-[756px] items-center gap-4 relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-[#fdfdfd] text-base text-center tracking-[-0.48px] leading-[30px] whitespace-nowrap">
            © 2025 Edwin Anderson. All rights reserved.
          </div>
        </div>

        <div className="flex w-52 h-10 items-center gap-4 relative mr-[-55.00px]">
          <img
            className="relative w-10 h-10"
            alt="Social media"
            src="/social-media-1.svg"
          />

          <img
            className="relative w-10 h-10"
            alt="Social media"
            src="/social-media.svg"
          />

          <img
            className="relative w-10 h-10"
            alt="Social media"
            src="/social-media-2.svg"
          />

          <img
            className="relative w-10 h-10"
            alt="Social media"
            src="/social-media-3.svg"
          />
        </div>
      </footer>
    </>
  );
};
