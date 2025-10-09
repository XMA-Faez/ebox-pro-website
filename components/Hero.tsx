"use client";

import Link from "next/link";
import Image from "next/image";
import HeroIllustration from "@/public/hero-illustration.jpg";
import LogoSection from "@/components/LogoSection";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen bg-white pt-40">
        <div className="w-full max-w-7xl mx-auto px-4 relative flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column - Copy */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <p className="text-black/60 mb-0 text-sm sm:text-base leading-6 uppercase tracking-wider">
                  Tech-Driven 3PL Warehousing
                </p>
                <div className="">
                  <h1 className="text-black text-balance text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-medium font-space-grotesk">
                    Scale Your E-Commerce with Smart Warehousing
                  </h1>
                  <p className="text-black/80 text-lg sm:text-xl mt-4 max-w-2xl">
                    Strategic Dubai warehouse location with real-time inventory
                    management. Seamless multi-channel integration for Amazon,
                    Noon, and your store.
                  </p>
                </div>
              </div>

              {/* Header Details */}
              <div className="flex flex-wrap gap-5 text-white mt-8">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary text-white text-center px-6 py-3 text-sm font-medium leading-6 no-underline flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Get Free UAE Fulfillment Assessment
                </Link>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src={HeroIllustration}
                alt="Warehouse Management Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <LogoSection />
      </section>
    </>
  );
}
