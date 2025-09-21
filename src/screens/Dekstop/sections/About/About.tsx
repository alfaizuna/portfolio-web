'use client';

import React from "react";

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

export const About = (): JSX.Element => {
  return (
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
                      <div className="relative w-fit font-bold text-black text-[32px] tracking-[0] leading-9 whitespace-nowrap">
                        {feature.icon}
                      </div>
                    </div>
    
                    <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] font-bold text-[#0a0d12] text-xl tracking-tight leading-tight uppercase">
                        {feature.title}
                      </h3>
    
                      <p className="relative self-stretch font-montserrat font-normal text-[#6b7280] text-base tracking-normal leading-relaxed">
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
  );
};