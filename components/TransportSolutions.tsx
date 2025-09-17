"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const transportCards = [
  {
    title: "Overnight Freight Delivery",
    description: "Fast and reliable overnight delivery services for urgent shipments with guaranteed timeframes.",
    image: "/graphics/transport-01.webp",
    badge: "Delivery"
  },
  {
    title: "Advanced Transport Solutions",
    description: "Comprehensive transportation management with advanced tracking and optimization technologies.",
    image: "/graphics/transport-02.webp",
    badge: "Delivery"
  }
];

const transportFeatures = [
  {
    number: "1",
    description: "Advanced route optimization using AI-powered logistics algorithms for maximum efficiency."
  },
  {
    number: "2",
    description: "Real-time tracking and monitoring systems providing complete shipment visibility."
  },
  {
    number: "3",
    description: "24/7 customer support with dedicated account managers for personalized service."
  }
];

export default function TransportSolutions() {
  return (
    <section className="py-16 lg:py-28">
      <div className="w-full max-w-5xl mx-auto px-6">
        {/* Transport Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 lg:mb-28">
          {transportCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col gap-5"
            >
              {/* Transport Image Wrapper */}
              <div className="rounded-3xl bg-gradient-to-r from-white to-black p-2 lg:px-9 relative overflow-hidden">
                <div className="border border-opacity-low rounded-2xl relative overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white text-text px-2.5 py-0.5 rounded-full text-xs font-medium shadow-lg">
                    {card.badge}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/24 pointer-events-none" />
                </div>
              </div>

              {/* Transport Content */}
              <div className="flex flex-col gap-2 px-5">
                <h3 className="text-xl font-medium font-space-grotesk text-text leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px border-t border-dashed border-border my-16 lg:my-28" />

        {/* Content and Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <div className="border border-text rounded-full px-2 py-0.5 text-sm font-medium text-text inline-block w-fit">
                Transport Solutions
              </div>
              <h3 className="text-3xl lg:text-4xl font-medium font-space-grotesk leading-tight tracking-tighter text-text">
                Deliver on time and with satisfaction.
              </h3>
              <p className="text-lg leading-6 text-text-secondary">
                Advanced logistics solutions designed to optimize your supply chain with cutting-edge technology and reliable service.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-primary text-white text-center px-6 py-3 text-sm font-medium leading-6 no-underline flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover w-fit"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-14 max-w-md lg:max-w-sm"
          >
            {transportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                className="flex items-center gap-5"
              >
                <div className="rounded-full bg-text shadow-ebox-nav text-white flex items-center justify-center w-8 h-8 flex-none">
                  <span className="text-sm font-medium leading-5 tracking-tight">
                    {feature.number}
                  </span>
                </div>
                <p className="text-base font-medium leading-6 text-text">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}