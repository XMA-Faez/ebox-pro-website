"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interested: string;
}

interface ContactFormProps {
  className?: string;
}

interface StatItem {
  value: string;
  label: string;
}

export default function ContactForm({ className }: ContactFormProps = {}) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interested: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setIsSubmitted(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const stats: StatItem[] = [
    { value: "32K+", label: "Satisfied Customers" },
    { value: "18+", label: "Years Experience" },
    { value: "24", label: "Trusted Partners" },
    { value: "98%", label: "Satisfaction Rating" },
  ];

  return (
    <section className="py-16 lg:py-28 relative overflow-hidden">
      {/* Shipping Block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl bg-neutral-900 text-white flex flex-col justify-center w-full max-w-[1424px] mx-auto py-28 px-[4%] relative overflow-hidden"
      >
        <div className="container-small z-10">
          {/* Shipping Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12 max-w-[510px]"
          >
            <div className="flex flex-col gap-6">
              <div className="rounded-full bg-neutral-900 border border-white/20 px-2 py-0.5 text-sm font-medium text-white inline-block w-fit">
                Our Services
              </div>
              <h3 className="text-3xl lg:text-4xl font-medium font-space-grotesk leading-tight tracking-tighter text-white">
                Get A Shipping <span className="whitespace-nowrap">Quote To</span> Get Started!
              </h3>
              <p className="text-lg leading-6 text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor sapien vel facilisis lobortis.
              </p>
            </div>

            {/* Shipping Form */}
            <div className="max-w-[440px]">
              <div className="mb-0">
                {!isSubmitted && !hasError && (
                  <form onSubmit={handleSubmit} className="flex flex-col">
                    {/* Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
                      <div className="mb-6">
                        <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1 pl-4">
                          Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full border border-white/[0.08] bg-white/[0.04] text-white mb-0 py-2 px-3 pl-4 text-sm leading-6 rounded-lg focus:border-primary focus:outline-none placeholder:text-neutral-400"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1 pl-4">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full border border-white/[0.08] bg-white/[0.04] text-white mb-0 py-2 px-3 pl-4 text-sm leading-6 rounded-lg focus:border-primary focus:outline-none placeholder:text-neutral-400"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1 pl-4">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-white/[0.08] bg-white/[0.04] text-white mb-0 py-2 px-3 pl-4 text-sm leading-6 rounded-lg focus:border-primary focus:outline-none placeholder:text-neutral-400"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-1 pl-4">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+24 31 674 558"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-white/[0.08] bg-white/[0.04] text-white mb-0 py-2 px-3 pl-4 text-sm leading-6 rounded-lg focus:border-primary focus:outline-none placeholder:text-neutral-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Select Dropdown */}
                    <div className="mb-6">
                      <label htmlFor="interested" className="block text-sm font-medium text-white mb-1 pl-4">
                        Interested in:
                      </label>
                      <div className="border border-white/[0.08] bg-white/[0.04] rounded-lg pr-3 text-sm leading-6">
                        <select
                          id="interested"
                          name="interested"
                          value={formData.interested}
                          onChange={handleChange}
                          className="w-full bg-transparent text-neutral-400 border border-black mb-0 py-2 px-3 pl-4 focus:outline-none"
                          required
                        >
                          <option value="" className="bg-neutral-900">Select one...</option>
                          <option value="First" className="bg-neutral-900">First choice</option>
                          <option value="Second" className="bg-neutral-900">Second choice</option>
                          <option value="Third" className="bg-neutral-900">Third choice</option>
                        </select>
                      </div>
                    </div>

                    <input
                      type="submit"
                      value="Submit"
                      className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors cursor-pointer"
                    />
                  </form>
                )}

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-transparent pt-4 relative"
                  >
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-ebox-card flex flex-col justify-start items-start py-6 px-7 relative">
                      <div className="flex items-center gap-4 mb-0">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.1331 15.3332L17.022 6.44428L15.2443 4.6665L8.1331 11.7777L4.57759 8.222L2.7998 9.99989L8.1331 15.3332Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="text-lg font-medium leading-6 text-white">
                          Thank you! Your submission has been received!
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {hasError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-transparent w-full mt-3 py-2"
                  >
                    <div className="flex items-center justify-start gap-1.5">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0008 18.3332C5.39844 18.3332 1.66748 14.6022 1.66748 9.99984C1.66748 5.39746 5.39844 1.6665 10.0008 1.6665C14.6031 1.6665 18.3341 5.39746 18.3341 9.99984C18.3341 14.6022 14.6031 18.3332 10.0008 18.3332ZM9.16748 9.1665V14.1665H10.8341V9.1665H9.16748ZM9.16748 5.83317V7.49984H10.8341V5.83317H9.16748Z" fill="#4D545C"/>
                        </svg>
                      </div>
                      <div className="text-sm text-neutral-400">
                        Ooops! Something went wrong!!!
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Shipping Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 -right-64 h-[105%] min-h-[856px] z-0 pointer-events-none "
        >
          <Image
            src="/graphics/contact-form-bg.png"
            alt="Contact Form Background"
            width={1756}
            height={856}
            className="w-full h-full object-cover opacity-45"
          />
        </motion.div>
      </motion.div>

      {/* Shipping Statistics */}
      <div className="px-[4%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-[22px] rounded-2xl bg-white w-full max-w-[988px] -mt-[76px] mx-auto py-6 sm:py-8 px-6 sm:px-10 relative shadow-ebox-card"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
              className="flex flex-col gap-2 text-neutral-900 text-center justify-between items-center"
            >
              <div className="text-3xl lg:text-4xl font-medium font-space-grotesk text-primary">
                {stat.value}
              </div>
              <div className="text-lg font-medium leading-6 text-text">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
