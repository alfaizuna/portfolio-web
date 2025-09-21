"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import Modal from "../../../../components/modal/Modal";

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi API call dengan delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Skenario dummy: 70% success, 30% failure
    const isSuccessful = Math.random() > 0.3;
    
    setIsSuccess(isSuccessful);
    setIsModalOpen(true);
    setIsLoading(false);
    
    // Reset form jika berhasil
    if (isSuccessful) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section id="contact" className="flex w-full items-start justify-center gap-12 p-[120px] relative flex-[0_0_auto]">
      <div className="flex-col w-[540px] justify-center gap-10 flex items-start relative">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] text-5xl font-bold text-[#0a0d12] leading-tight">
            Let&apos;s Work Together
          </div>

          <div className="relative self-stretch text-lg font-montserrat font-medium text-[#0a0d12] leading-relaxed">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
            <div className="flex flex-col gap-1.5">
              <Label className="font-montserrat font-bold text-[#0a0d12] text-sm tracking-tight leading-normal">
                Name
              </Label>

              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="h-12 px-4 py-2 w-full rounded-xl border border-solid border-[#d5d7da]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="font-montserrat font-bold text-[#0a0d12] text-sm tracking-tight leading-normal">
                Email
              </Label>

              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="h-12 px-4 py-2 w-full rounded-xl border border-solid border-[#d5d7da]"
              />
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <Label className="font-montserrat font-bold text-[#0a0d12] text-sm tracking-tight leading-normal">
                Message
              </Label>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                required
                className="flex-1 min-h-[120px] px-4 py-2 w-full rounded-xl border border-solid border-[#d5d7da] resize-none"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="h-12 w-full bg-[#b76080] rounded-full hover:bg-[#a55570] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="font-montserrat font-bold text-white text-sm tracking-tight leading-normal">
                {isLoading ? "Sending..." : "Let's Talk"}
              </div>
            </Button>
          </form>
        </CardContent>
      </Card>

      <img
        className="absolute top-[-35px] left-[calc(50.00%_+_211px)] w-48 h-[170px]"
        alt="Element"
        src="/24a839d1d8.png"
      />
      
      {/* Modal */}
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        isSuccess={isSuccess}
      />
    </section>
  );
};
