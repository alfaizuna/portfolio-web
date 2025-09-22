"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { motion, AnimatePresence, wrap } from "framer-motion";

// 1. Data untuk testimoni dibuat dinamis dalam sebuah array
const testimonials = [
  {
    id: 1,
    quote:
      "Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!",
    name: "Sarah Tan",
    title: "Product Manager at Finovate",
    image: "/ellipse-8.png",
  },
  {
    id: 2,
    quote:
      "His attention to detail and commitment to quality are outstanding. The final product exceeded our expectations. A true professional and a pleasure to work with.",
    name: "Michael Chen",
    title: "Lead Designer at Creative Solutions",
    image: "/default-portrait.png",
  },
  {
    id: 3,
    quote:
      "Edwin is a proactive and resourceful developer. He's not just a coder; he's a problem solver who contributes great ideas to the team. I would gladly work with him again.",
    name: "Jessica Liu",
    title: "Senior Frontend Developer at TechCorp",
    image: "/default-portrait.png",
  },
];

// 2. Varian animasi untuk efek geser (slide)
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export const TestimonialsSection = (): JSX.Element => {
  // 3. State untuk mengelola halaman dan arah navigasi
  const [[page, direction], setPage] = useState([0, 0]);

  // `wrap` adalah utilitas dari framer-motion untuk menangani array wrapping (misal: dari item terakhir kembali ke pertama)
  const testimonialIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    // Animasi fade-in + slide-up untuk seluruh section
    <motion.section
      id="testimonials"
      className="flex-col w-full gap-12 px-6 sm:px-12 md:px-20 py-20 flex items-center relative overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col w-full max-w-3xl items-center gap-4 relative">
        <div className="relative text-center text-2xl sm:text-4xl font-bold font-montserrat text-[#0a0d12] leading-tight">
          What They Say About Working With Me
        </div>
        <div className="relative text-center text-base sm:text-lg font-montserrat font-medium text-[#6b7280] leading-relaxed">
          Real words from clients, teammates, and mentors I&apos;ve collaborated
          with on various projects.
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 relative self-stretch w-full">
        {/* Container untuk card stack, dibuat responsif */}
        <div className="relative flex justify-center items-center w-full h-[480px] sm:h-[420px] md:h-[380px]">
          {/* AnimatePresence untuk menangani animasi keluar-masuk elemen */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full max-w-4xl translate-y-8 sm:translate-y-0"
            >
              {/* Container relatif untuk menumpuk kartu */}
              <div className="relative">
                {/* Kartu dekoratif sekarang berada di dalam grup animasi dan di belakang kartu utama */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-0 w-[90%] h-full bg-[#e5b6c3] rounded-3xl" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-[95%] h-full bg-[#d48fa3] rounded-3xl" />

                {/* Kartu Testimoni Utama (Paling Depan) */}
                <Card className="relative z-20 flex flex-col w-full items-center gap-8 px-8 sm:px-12 py-10 bg-[#B15C7D] rounded-3xl shadow-lg">
                  <CardContent className="p-0 flex flex-col items-center gap-6 w-full">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#f3b64c] text-2xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="text-center text-xl font-semibold font-montserrat text-white leading-relaxed min-h-[120px] sm:min-h-[96px]">
                      &quot;{currentTestimonial.quote}&quot;
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <img
                        className="w-16 h-16 rounded-full object-cover"
                        alt={currentTestimonial.name}
                        src={currentTestimonial.image}
                      />
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-lg font-bold font-montserrat text-white">{currentTestimonial.name}</div>
                        <div className="text-base text-white/80">{currentTestimonial.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4  translate-y-4 sm:translate-y-0 z-30">
          <Button
            onClick={() => paginate(-1)}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
          <Button
            onClick={() => paginate(1)}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
