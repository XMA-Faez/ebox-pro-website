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
      <div className="w-full max-w-7xl mx-auto py-16 px-4 relative flex items-center justify-center min-h-[100vh] min-h-[100dvh]">
        <div className="flex flex-col gap-5 justify-center items-center text-center max-w-4xl mx-auto">
          <div className="flex flex-col gap-3">
            <p className="text-white/60 mb-0 text-sm sm:text-base leading-6 uppercase tracking-wider">
              Premium 3PL Logistics Solutions
            </p>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight font-medium font-space-grotesk">
                Ebox Pro Logistics
              </h1>
              <p className="text-white/80 text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl">
                Streamline your supply chain with end-to-end logistics solutions.
                From warehousing to last-mile delivery, we handle it all.
              </p>
            </div>
          </div>

          {/* Header Details */}
          <div className="flex flex-wrap justify-center items-center gap-5 text-white mt-8">
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
