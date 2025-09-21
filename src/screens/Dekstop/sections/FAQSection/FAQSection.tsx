"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

interface FAQ {
  id: string;
  q: string;
  a: string;
}

interface FAQSectionProps {
  mockFaq: FAQ[];
}

export const FAQSection = ({ mockFaq }: FAQSectionProps): JSX.Element => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaq(prevId => (prevId === id ? null : id));
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="faq"
      className="flex flex-col w-full items-center gap-10 md:gap-12 px-6 md:px-[120px] py-16 md:py-20 relative bg-[#f4f4f4]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="flex flex-col w-full md:w-[847px] items-center gap-4 relative">
        <h2 className="relative text-center text-3xl md:text-4xl font-bold text-[#0a0d12] leading-tight">
          Let&apos;s Clear Things Up
        </h2>

        <p className="relative text-center text-base md:text-lg font-montserrat font-medium text-[#6b7280] leading-relaxed">
          I&apos;ve answered a few questions that usually come up when working
          with a frontend developer like me.
        </p>
      </motion.div>

      <motion.div className="flex flex-col items-start gap-4 md:gap-5 self-stretch w-full relative">
        {mockFaq.map((faq, index) => {
          const isExpanded = expandedFaq === faq.id;
          return (
            <React.Fragment key={faq.id}>
              <div className="items-start flex justify-between gap-4 relative self-stretch w-full">
                <div className="w-fit text-lg md:text-xl font-semibold text-[#0a0d12] text-center whitespace-nowrap relative mt-[-1.00px]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex flex-1 flex-col items-start gap-3 relative">
                  <button
                    type="button"
                    className="relative self-stretch mt-[-1.00px] text-lg md:text-xl font-semibold text-[#0a0d12] cursor-pointer hover:text-[#b76080] transition-colors text-left w-full"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {faq.q}
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto", y: 0 },
                          collapsed: { opacity: 0, height: 0, y: -10 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative self-stretch text-base font-medium text-[#6b7280] leading-relaxed overflow-hidden"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button
                  size="icon"
                  onClick={() => toggleFaq(faq.id)}
                  className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 p-2 md:p-[10.67px] rounded-full flex items-center justify-center relative transition-colors ${
                    isExpanded
                      ? "bg-[#b76080] hover:bg-[#a55570] text-white"
                      : "bg-white border border-solid border-[#d5d7da] hover:bg-gray-50 text-[#0a0d12]"
                  }`}
                >
                  {isExpanded ? (
                    // Ikon Plus (+) ketika pertanyaan terbuka
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  ) : (
                    // Ikon Minus (-) ketika pertanyaan tertutup
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12" />
                    </svg>
                  )}
                </Button>
              </div>
              {index < mockFaq.length - 1 && (
                <Separator className="self-stretch w-full h-px relative object-cover" />
              )}
            </React.Fragment>
          );
        })}
      </motion.div>
    </motion.section>
  );
};
