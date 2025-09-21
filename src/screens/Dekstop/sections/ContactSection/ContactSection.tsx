"use client";

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../..//components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="flex w-full items-start justify-center gap-12 p-[120px] relative flex-[0_0_auto]">
      <div className="flex-col w-[540px] justify-center gap-10 flex items-start relative">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] text-5xl font-bold text-[#0a0d12] leading-tight">
            Let&apos;s Work Together
          </div>

          <div className="relative self-stretch text-sm font-medium text-[#0a0d12] leading-relaxed">
            Have a project in mind or just want to say hi? Drop me a message —
            <br />
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

      <Card className="flex flex-col items-stretch p-8 relative flex-1 grow bg-white rounded-3xl shadow-[0px_0px_28px_#c4c4c440]">
        <CardContent className="p-0 flex-1">
          <div className="flex flex-col gap-5 h-full">
            <div className="flex flex-col gap-1.5">
              <Label className="font-text-sm-bold font-[number:var(--text-sm-bold-font-weight)] text-[#0a0d12] text-[length:var(--text-sm-bold-font-size)] tracking-[var(--text-sm-bold-letter-spacing)] leading-[var(--text-sm-bold-line-height)] [font-style:var(--text-sm-bold-font-style)]">
                Name
              </Label>

              <Input
                placeholder="Enter your name"
                className="h-12 px-4 py-2 w-full rounded-xl border border-solid border-[#d5d7da]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="font-text-sm-bold font-[number:var(--text-sm-bold-font-weight)] text-[#0a0d12] text-[length:var(--text-sm-bold-font-size)] tracking-[var(--text-sm-bold-letter-spacing)] leading-[var(--text-sm-bold-line-height)] [font-style:var(--text-sm-bold-font-style)]">
                Email
              </Label>

              <Input
                placeholder="Enter your email"
                type="email"
                className="h-12 px-4 py-2 w-full rounded-xl border border-solid border-[#d5d7da]"
              />
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <Label className="font-text-sm-bold font-[number:var(--text-sm-bold-font-weight)] text-[#0a0d12] text-[length:var(--text-sm-bold-font-size)] tracking-[var(--text-sm-bold-letter-spacing)] leading-[var(--text-sm-bold-line-height)] [font-style:var(--text-sm-bold-font-style)]">
                Message
              </Label>

              <Textarea
                placeholder="Enter your message"
                className="flex-1 min-h-[120px] px-4 py-2 w-full rounded-xl border border-solid border-[#d5d7da] resize-none"
              />
            </div>

            <Button className="h-12 w-full bg-[#b76080] rounded-full hover:bg-[#a55570] transition-colors">
              <div className="font-text-sm-bold font-[number:var(--text-sm-bold-font-weight)] text-white text-[length:var(--text-sm-bold-font-size)] tracking-[var(--text-sm-bold-letter-spacing)] leading-[var(--text-sm-bold-line-height)] [font-style:var(--text-sm-bold-font-style)]">
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
    </section>
  );
};
