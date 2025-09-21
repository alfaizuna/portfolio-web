"use client";

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
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setExpandedFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="flex flex-col w-full items-center gap-12 px-[120px] py-20 relative flex-[0_0_auto] bg-[#f4f4f4]">
      <div className="flex flex-col w-[847px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="relative text-center text-4xl font-bold text-[#0a0d12] leading-tight">
          Let&apos;s Clear Things Up
        </div>

        <div className="relative text-center text-md font-medium text-[#6b7280] leading-relaxed">
          I&apos;ve answered a few questions that usually come up when working
          with a frontend developer like me.
        </div>
      </div>

      <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
        {mockFaq.map((faq, index) => {
          const isExpanded = expandedFaqs.includes(faq.id);
          return (
            <React.Fragment key={faq.id}>
              <div className="items-start flex justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="w-fit text-xl font-semibold text-[#0a0d12] text-center whitespace-nowrap relative mt-[-1.00px]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex flex-col w-[761px] items-start gap-3 relative">
                  <div
                    className="relative self-stretch mt-[-1.00px] text-xl font-semibold text-[#0a0d12] cursor-pointer hover:text-[#b76080] transition-colors"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {faq.q}
                  </div>

                  {isExpanded && (
                    <div className="relative self-stretch text-base font-medium text-[#6b7280] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>

                <Button
                  size="icon"
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-12 h-12 gap-[10.67px] p-[10.67px] rounded-full flex items-center relative h-auto transition-colors ${isExpanded
                      ? "bg-[#b76080] hover:bg-[#a55570] text-white"
                      : "bg-white border border-solid border-[#d5d7da] hover:bg-gray-50 text-[#0a0d12]"
                    }`}
                >
                  {isExpanded ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  ) : (
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
      </div>
    </section>
  );
};
