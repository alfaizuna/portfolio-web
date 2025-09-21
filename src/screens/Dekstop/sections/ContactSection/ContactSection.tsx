"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import Modal from "../../../../components/modal/Modal";
import { motion, useInView, Variants } from "framer-motion";

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const leftContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section ref={ref} id="contact" className="relative flex w-full flex-col items-center justify-center gap-12 p-8 md:p-16 lg:flex-row lg:items-start lg:p-[120px]">
      <motion.div variants={leftContainerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="relative flex w-full max-w-[540px] flex-col items-center justify-center gap-10 lg:items-start">
        <motion.div variants={itemVariants} className="relative flex w-full flex-col items-center gap-2 self-stretch lg:items-start">
          <div className="relative mt-[-1.00px] self-stretch text-center text-2xl font-bold leading-tight text-[#0a0d12] lg:text-left lg:text-5xl">
            Let&apos;s Work Together
          </div>

          <div className="relative self-stretch text-center font-montserrat text-base font-medium leading-relaxed text-[#0a0d12] lg:text-left lg:text-lg">
            Have a project in mind or just want to say hi? Drop me a message —
            <br />
            I&apos;d love to hear from you.
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative inline-flex flex-wrap items-start justify-center gap-5">
          <img
            className="relative h-28 w-28 rounded-lg object-cover lg:h-[142px] lg:w-[142px]"
            alt="Portfolio image"
            src="/portfolio-image-3.png"
          />

          <img
            className="relative h-28 w-28 object-cover lg:h-[142px] lg:w-[142px]"
            alt="Portfolio image"
            src="/portfolio-image-4.png"
          />

          <img
            className="relative h-28 w-28 object-cover lg:h-[142px] lg:w-[142px]"
            alt="Portfolio image"
            src="/portfolio-image-5.png"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={formVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-full max-w-[540px] lg:flex-1 lg:grow"
      >
        <Card className="relative mt-16 flex w-full flex-col items-stretch rounded-3xl bg-white p-8 shadow-[0px_0px_28px_#c4c4c440] lg:mt-0">
          <img
            className="mx-auto -mt-36 mb-2 block h-auto w-36 lg:hidden"
            alt="Element"
            src="/24a839d1d8.png"
          />
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
      </motion.div>

      <img
        className="absolute top-[-35px] left-[calc(50.00%_+_211px)] hidden h-[170px] w-48 lg:block"
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
