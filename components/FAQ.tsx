"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "Do you support small businesses?",
    answer: "Yes, we specialize in providing scalable logistics solutions for businesses of all sizes, from small startups to enterprise companies. Our flexible service packages can be customized to meet your specific needs and budget."
  },
  {
    id: 2,
    question: "Do you offer global solutions?",
    answer: "Absolutely! We provide comprehensive global logistics services with coverage across 50+ countries and strategic partnerships with carriers worldwide. Our network ensures reliable service no matter where your business operates."
  },
  {
    id: 3,
    question: "What makes your warehousing solutions different?",
    answer: "Our warehousing facilities feature state-of-the-art inventory management systems, climate-controlled environments, and 24/7 security monitoring. We provide real-time inventory tracking and flexible storage options."
  },
  {
    id: 4,
    question: "How do you ensure package safety and security?",
    answer: "We implement multi-layer security protocols including comprehensive insurance coverage, secure facilities, tracked transport, and professional handling by certified drivers to ensure your packages arrive safely."
  }
];

const CornerMark = () => (
  <div className="absolute top-4 right-4">
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 14L6 14" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M1 1L1 9" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round"/>
      <rect width="2" height="2" rx="1" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 13)" fill="var(--color-primary)"/>
    </svg>
  </div>
);

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19.5C7.85775 19.5 4.5 16.1423 4.5 12C4.5 7.85775 7.85775 4.5 12 4.5C16.1423 4.5 19.5 7.85775 19.5 12C19.5 16.1423 16.1423 19.5 12 19.5ZM11.25 11.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z" fill="currentColor"/>
  </svg>
);

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-28">
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          {/* Left side - FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 w-full"
          >
            {/* Header */}
            <div className="flex flex-col gap-6">
              <div className="border border-text rounded-full px-2 py-0.5 text-sm font-medium text-text inline-block w-fit">
                Logistics Optimization
              </div>
              <h3 className="text-3xl lg:text-4xl font-medium font-space-grotesk leading-tight tracking-tighter text-text">
                Some of the most frequently asked questions
              </h3>
            </div>

            {/* FAQ Items */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border border-border rounded-xl flex-col w-full overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-3 lg:p-4 text-left flex items-center justify-between hover:bg-surface-hover transition-colors group"
                  >
                    <span className="text-text text-base font-medium leading-6 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-6 h-6 text-atlantio-dark">
                      <PlusIcon />
                    </div>
                  </button>

                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-transparent"
                    >
                      <div className="mt-1 pb-3 lg:pb-4 px-4 lg:px-4">
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-sm leading-6 text-text">
              Still have questions?{" "}
              <Link href="/contact" className="text-text underline hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
