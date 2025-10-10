"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Import illustrations here when ready
import ConnectIllustration from "@/public/illustrations/process/connect.png";
import StockIllustration from "@/public/illustrations/process/stock.svg";
import FulfillIllustration from "@/public/illustrations/process/fulfill.png";
import TrackIllustration from "@/public/illustrations/process/track.png";

interface StepItem {
  number: string;
  title: string;
  description: string;
  illustrationPlaceholder: string;
  illustration?: any; // Can be StaticImageData or string path
  customIllustration?: React.ReactNode; // For custom React components
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Connect",
    description: "Integration with your e-commerce platforms in 1-3 days",
    illustrationPlaceholder: "[INTEGRATION_ILLUSTRATION]",
    illustration: ConnectIllustration,
  },
  {
    number: "02",
    title: "Stock",
    description: "Ship inventory to our Dubai warehouse - live in 4 hours",
    illustrationPlaceholder: "[INVENTORY_ILLUSTRATION]",
    illustration: StockIllustration,
  },
  {
    number: "03",
    title: "Fulfill",
    description: "Orders auto-sync for same-day pick, pack, and ship",
    illustrationPlaceholder: "[FULFILLMENT_ILLUSTRATION]",
    illustration: FulfillIllustration,
  },
  {
    number: "04",
    title: "Track",
    description: "Real-time visibility through your dedicated dashboard",
    illustrationPlaceholder: "[DASHBOARD_ILLUSTRATION]",
    illustration: TrackIllustration,
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-medium font-space-grotesk leading-tight tracking-tight text-black mb-4">
            How It Works
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Get started in 4 simple steps - from integration to fulfillment in under 2 weeks
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Illustration */}
              <div
                className={`w-full h-48 rounded-2xl flex items-center justify-center mb-6 overflow-hidden ${
                  step.illustration || step.customIllustration
                    ? ""
                    : "bg-white border-2 border-dashed border-gray-300"
                }`}
              >
                {step.customIllustration ? (
                  <div className="w-full h-full">
                    {step.customIllustration}
                  </div>
                ) : step.illustration ? (
                  <div className="relative w-full h-full p-6">
                    <Image
                      src={step.illustration}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-gray-400 font-mono text-xs px-3 py-2 bg-gray-50 rounded border">
                    {step.illustrationPlaceholder}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-medium text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

