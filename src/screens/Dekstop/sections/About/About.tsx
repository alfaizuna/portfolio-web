'use client';

import React from "react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const About = (): JSX.Element => {
  return (
    <section id="about" className="flex flex-col w-full items-center relative py-8 sm:py-12 lg:py-16 xl:py-20">
      {/* Main Text Section */}
      <motion.div 
        className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mb-6 sm:mb-8 lg:mb-12 xl:mb-16 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-montserrat font-bold text-center leading-tight sm:leading-tight lg:leading-tight">
          <span className="text-black">
            As frontend developers, we bring designs to life
          </span>
          <br></br>
          <span className="text-black">with {" "}</span>
          <span className="text-pink-500">
            clean, responsive code
          </span>
          <span className="text-black">
            {" "}that blends creativity{" "}
          </span>
          <br></br>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">🎨</span>
          <span className="text-black">
            {" "}with usability{" "}
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">🌟</span>
          <span className="text-black">.</span>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div 
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 xl:gap-8 max-w-xs sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          {featureData.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`flex flex-col items-start gap-3 sm:gap-4 lg:gap-5 py-4 sm:py-6 lg:py-8 ${
                index < featureData.length - 1 ? 'border-b border-gray-200 lg:border-b-0' : ''
              } ${index === 1 ? 'lg:border-x lg:border-gray-200 lg:px-6 xl:px-8' : ''}`}
            >
              {/* Icon */}
              <div className="flex w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-gray-50 border border-gray-200">
                <span className="text-lg sm:text-xl lg:text-2xl">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 w-full">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black uppercase tracking-wide leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-montserrat">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};