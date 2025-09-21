"use client";

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section id="testimonials" className="flex-col w-full gap-12 px-[120px] py-20 flex-[0_0_auto] flex items-center relative">
      <div className="flex flex-col w-[847px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="relative text-center text-4xl font-bold text-[#0a0d12] leading-tight">
          What They Say About Working With Me
        </div>

        <div className="relative text-center text-lg font-montserrat font-medium text-[#6b7280] leading-relaxed">
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
    </section>
  );
};
