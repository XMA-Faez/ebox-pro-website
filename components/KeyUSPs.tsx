"use client";

import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi";
import { TbRocket } from "react-icons/tb";
import { RiCheckboxMultipleLine } from "react-icons/ri";

const usps = [
  {
    title: "Amazon SPN Partner",
    description: "Official Service Provider Network partner with exclusive rates and priority handling",
    icon: HiShieldCheck
  },
  {
    title: "Same-Day Delivery",
    description: "Dubai & Sharjah same-day, all 7 Emirates next-day delivery guaranteed",
    icon: TbRocket
  },
  {
    title: "99%+ Accuracy",
    description: "3-step quality control process ensures precision in every shipment",
    icon: RiCheckboxMultipleLine
  }
];

export default function KeyUSPs() {
  return (
    <section className="bg-white py-20">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* USPs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-medium text-black mb-3 group-hover:text-primary transition-colors">
                    {usp.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed max-w-sm">
                    {usp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
