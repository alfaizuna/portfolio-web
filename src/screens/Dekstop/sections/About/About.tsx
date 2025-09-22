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
    <section id="about" className="flex flex-col w-full items-center relative py-12 md:py-20">
      {/* Main Text Section */}
      <motion.div 
        className="flex items-center justify-center px-4 md:px-[120px] mb-8 md:mb-12 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl text-2xl md:text-3xl font-montserrat font-bold text-center leading-tight">
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
          <span className="text-2xl md:text-3xl">🎨</span>
          <span className="text-black">
            {" "}with usability{" "}
          </span>
          <span className="text-2xl md:text-3xl">🌟</span>
          <span className="text-black">.</span>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div 
        className="w-full px-4 md:px-[120px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 max-w-6xl mx-auto">
          {featureData.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`flex flex-col items-start gap-4 py-6 md:py-8 ${
                index < featureData.length - 1 ? 'border-b border-gray-200 md:border-b-0' : ''
              } ${index === 1 ? 'md:border-x md:border-gray-200 md:px-10' : ''}`}
            >
              {/* Icon */}
              <div className="flex w-12 h-12 items-center justify-center rounded-full bg-gray-50 border border-gray-200">
                <span className="text-xl">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 w-full">
                <h3 className="text-lg font-bold text-black uppercase tracking-wide leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed font-montserrat">
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