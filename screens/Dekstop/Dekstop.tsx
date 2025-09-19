import { ArrowRightIcon, MouseIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { SkillsSection } from "./sections/SkillsSection/SkillsSection";

const navigationItems = [
  { label: "Home" },
  { label: "About" },
  { label: "Skill" },
  { label: "Projects" },
  { label: "FAQ" },
  { label: "Contact" },
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
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] relative">
      <section className="relative w-full">
        <div className="flex w-[1440px] h-[1024px] items-center gap-2 absolute top-0 left-0 bg-[#a53860]">
          <div className="relative w-[720px] h-[1024px] bg-[#a53860]" />
        </div>

        <div className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-[1023px] bg-white">
          <img
            className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-[1023px] object-cover"
            alt="Element"
            src="/227.png"
          />

          <div className="absolute -top-px left-0 w-[1440px] h-[1024px] bg-[#a53860f0]" />
        </div>

        <img
          className="absolute w-[13.89%] h-[3.23%] top-[5.29%] left-[20.21%]"
          alt="Clip path group"
          src="/clip-path-group.png"
        />

        <img
          className="absolute w-[21.49%] h-[3.96%] top-[9.72%] left-[55.56%]"
          alt="Clip path group"
          src="/clip-path-group-1.png"
        />

        <img
          className="absolute top-[289px] left-[calc(50.00%_-_305px)] w-[610px] h-[735px]"
          alt="Harmonious purple"
          src="/harmonious-purple-palette---candid-gentleman-portrait-1.png"
        />

        <div className="top-[451px] left-[calc(50.00%_-_328px)] [-webkit-text-stroke:1px_#f3b64c] text-transparent absolute font-anton font-normal text-[168.8px] text-center tracking-[-3.38px] leading-[205px] whitespace-nowrap">
          DEVELOPER
        </div>

        <Card className="flex flex-col w-[222px] items-start gap-5 absolute top-[237px] left-[1098px] bg-transparent border-none shadow-none">
          <CardContent className="p-0 w-full">
            {statsData.map((stat, index) => (
              <div key={index}>
                <div className="flex flex-col items-start gap-[3px] relative w-full flex-[0_0_auto]">
                  <div className="relative w-full mt-[-1.00px] font-display-2xl-bold font-[number:var(--display-2xl-bold-font-weight)] text-white text-[length:var(--display-2xl-bold-font-size)] tracking-[var(--display-2xl-bold-letter-spacing)] leading-[var(--display-2xl-bold-line-height)] [font-style:var(--display-2xl-bold-font-style)]">
                    {stat.value}
                  </div>

                  <div className="relative w-full font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
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

            <Button className="flex h-14 items-center justify-center gap-2 pl-4 pr-2 py-2 relative w-full bg-[#f3b64c] rounded-[100px] mt-5 h-auto hover:bg-[#f3b64c]/90">
              <div className="relative flex-1 font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#0a0d12] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                Contact Me
              </div>

              <div className="inline-flex items-center gap-2 p-2 relative flex-[0_0_auto] bg-[#0a0d12] rounded-[100px]">
                <ArrowRightIcon className="relative w-5 h-5 text-white" />
              </div>
            </Button>
          </CardContent>
        </Card>

        <div className="flex flex-col w-[451px] items-start gap-3.5 absolute top-[614px] left-[120px]">
          <img
            className="relative w-[63px] h-[63px]"
            alt="Fluent mic filled"
            src="/fluent-mic-24-filled.svg"
          />

          <div className="relative w-full font-text-xl-bold font-[number:var(--text-xl-bold-font-weight)] text-white text-[length:var(--text-xl-bold-font-size)] tracking-[var(--text-xl-bold-letter-spacing)] leading-[var(--text-xl-bold-line-height)] [font-style:var(--text-xl-bold-font-style)]">
            Hi, I&#39;m Edwin Anderson
          </div>

          <div className="relative w-full font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-white text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] [font-style:var(--text-lg-medium-font-style)]">
            a frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </div>
        </div>

        <nav className="inline-flex h-12 items-center justify-center gap-6 px-6 py-0 absolute top-8 left-[calc(50.00%_-_276px)] bg-[#00000033] rounded-[100px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-bg-blur">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex items-center justify-center gap-2 p-2 relative flex-[0_0_auto] h-auto hover:bg-white/10"
            >
              <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-white text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
                {item.label}
              </div>
            </Button>
          ))}
        </nav>

        <div className="inline-flex items-center gap-0.5 absolute top-[954px] left-[calc(50.00%_-_62px)]">
          <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
            Scroll Down
          </div>

          <MouseIcon className="relative w-6 h-6 text-white" />
        </div>

        <Badge className="inline-flex items-center gap-1.5 px-4 py-1 absolute top-[227px] left-[calc(50.00%_-_97px)] bg-[#860d39] rounded-full border border-solid border-[#b76080] hover:bg-[#860d39]">
          <div className="relative w-4 h-4 bg-[#e16190] rounded-lg" />

          <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
            Available for Hire
          </div>
        </Badge>

        <div className="inline-flex flex-col items-start justify-center gap-[21.78px] px-[21.78px] py-[32.67px] absolute top-[108px] left-[120px] rounded-[13613.1px] border-[1.36px] border-solid border-[#b76080]">
          {socialIcons.map((icon, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex w-[69.43px] h-[69.43px] items-center justify-center gap-[11.57px] p-[11.57px] relative rounded-[28927.83px] border-[1.36px] border-solid border-[#b76080] hover:bg-white/10 h-auto"
            >
              {index === 2 && (
                <div className="absolute top-[19px] left-[23px] w-[23px] h-[31px] bg-white" />
              )}
              <img className={icon.className} alt={icon.alt} src={icon.src} />
            </Button>
          ))}
        </div>

        <div className="absolute top-52 left-[314px] rotate-[-12.34deg] [font-family:'Bonheur_Royale',Helvetica] font-normal text-white text-[113.2px] tracking-[-2.26px] leading-[141.5px] whitespace-nowrap">
          Junior
        </div>
      </section>

      <SkillsSection />
      <HeroSection />
    </div>
  );
};
