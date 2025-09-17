"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <section className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://cdn.prod.website-files.com/6684af61b1cc1eae182f04b5/6684af61b1cc1eae182f04c7_Header%20Image%2001.webp"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b0f]/90 via-[#070b0f]/50 to-[#070b0f]/90"></div>
      </div>

      {/* Header Content */}
      <div className="w-full max-w-7xl mx-auto py-16 px-4 relative flex items-center min-h-screen">
        <div className="flex flex-col gap-5 justify-start items-start max-w-3xl">
          <div className="flex flex-col gap-3">
            <p className="text-white/60 mb-0 text-base leading-6">
              BUSINESS AUTOMATION TOOLS
            </p>
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-white text-hero md:text-hero sm:text-hero-mobile leading-tight tracking-hero font-normal font-space-grotesk uppercase">
                Ebox Pro Logistics
                <br />
                POWERFUL SHIPPING
              </h1>
            </div>
          </div>

          {/* Header Details */}
          <div className="flex flex-wrap justify-start items-center gap-5 text-white">
            <Link
              href="/contact"
              className="rounded-full bg-primary text-white text-center px-4 py-3 text-sm font-medium leading-6 no-underline flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Contact Us
            </Link>

            <div className="bg-white/8 w-px h-4"></div>

            <div className="text-sm font-medium leading-6">
              +(61)481 454 678
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
