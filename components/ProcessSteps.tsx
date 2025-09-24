"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const solutions = [
  {
    id: "consultation",
    title: "Free Consultation",
    description:
      "Start with a comprehensive needs assessment to understand your order volume, SKUs, and target markets.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.667 15.833a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM15 15.833a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeMiterlimit="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.375 14.167H12.5V5.5A.5.5 0 0 0 12 5H.833M4.708 14.167H3a.5.5 0 0 1-.5-.5V9.583"
          stroke="#fff"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M1.667 7.5H5"
          stroke="#fff"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 7.5h4.675a.5.5 0 0 1 .457.297l1.492 3.356a.5.5 0 0 1 .043.203v2.31a.5.5 0 0 1-.5.5h-1.584M12.5 14.167h.833"
          stroke="#fff"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
    features: [
      {
        stat: "15",
        description: "minute discovery call",
        text: "Quick assessment of your current fulfillment challenges and growth objectives.",
      },
      {
        stat: "24",
        description: "hour proposal delivery",
        text: "Customized pricing and service proposal based on your specific requirements.",
      },
      {
        stat: "100%",
        description: "transparent pricing",
        text: "No hidden fees, pay-as-you-go model with clear cost breakdowns.",
      },
    ],
  },
  {
    id: "integration",
    title: "Platform Integration",
    description:
      "Seamless connection with your e-commerce platforms in just 1-3 business days.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.49984 9.16667C9.34075 9.16667 10.8332 7.67428 10.8332 5.83333C10.8332 3.99238 9.34075 2.5 7.49984 2.5C5.65889 2.5 4.1665 3.99238 4.1665 5.83333C4.1665 7.67428 5.65889 9.16667 7.49984 9.16667Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.6665 15.0001C1.6665 11.7784 4.27818 9.16675 7.49984 9.16675C8.86234 9.16675 10.1158 9.63391 11.1087 10.4167"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.8036 13.9224L18.0505 15.5891C18.1996 16.5958 17.4196 17.5 16.4018 17.5H13.5986C12.5809 17.5 11.8008 16.5958 11.95 15.5891L12.1969 13.9224C12.318 13.1052 13.0195 12.5 13.8456 12.5H16.1549C16.981 12.5 17.6825 13.1052 17.8036 13.9224Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1665 10.8333H15.8332"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    features: [
      {
        stat: "1-3",
        description: "days integration time",
        text: "Quick setup with Amazon, Noon, Shopify, WooCommerce, and other major platforms.",
      },
      {
        stat: "24/7",
        description: "real-time sync",
        text: "Orders automatically flow from your store to our WMS for instant processing.",
      },
      {
        stat: "100%",
        description: "API connectivity",
        text: "Seamless data exchange between all your sales channels and our system.",
      },
    ],
  },
  {
    id: "golive",
    title: "Go Live & Scale",
    description:
      "Start fulfilling orders within 5-10 days. Scale seamlessly with flexible storage and no MOQs.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0505 8.07999L17.2043 15.58C17.3596 16.5896 16.5785 17.5001 15.5571 17.5001H4.44241C3.42094 17.5001 2.6398 16.5896 2.79513 15.58L3.94897 8.07999C4.07406 7.26693 4.77365 6.66675 5.59626 6.66675H14.4032C15.2258 6.66675 15.9254 7.26693 16.0505 8.07999Z"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M11.6668 4.16667C11.6668 3.24619 10.9207 2.5 10.0002 2.5C9.07966 2.5 8.3335 3.24619 8.3335 4.16667"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
    features: [
      {
        stat: "5-10",
        description: "days to first order",
        text: "From signup to shipping your first order in under two weeks.",
      },
      {
        stat: "99%+",
        description: "order accuracy",
        text: "Tech-driven operations ensure precision in every shipment.",
      },
      {
        stat: "24/7",
        description: "dashboard access",
        text: "Monitor inventory, orders, and analytics anytime from anywhere.",
      },
    ],
  },
];

export default function ProcessSteps() {
  const [activeId, setActiveId] = useState<string>("");

  return (
    <section className="w-full max-w-5xl mx-auto py-16 lg:py-28 px-6 border-l border-r border-dashed border-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-4xl lg:text-6xl font-medium font-space-grotesk leading-tight tracking-tighter text-text">
                Your Onboarding Journey
              </h2>
              <p className="text-lg leading-6 text-text-secondary">
                From signup to shipping in under 2 weeks
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:text-left"
            >
              <div className="border border-text rounded-full px-2 py-0.5 text-sm font-medium text-text inline-block w-fit mb-4">
                Quick Setup Process
              </div>
              <p className="text-lg leading-6 text-text max-w-md">
                Our streamlined onboarding gets you from signup to shipping in days, not weeks.
                No complex contracts, no hidden fees.
              </p>
            </motion.div>
          </div>

          {/* Solution Cards */}
          <div className="flex flex-col gap-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rounded-2xl bg-white shadow-ebox-card overflow-hidden"
              >
                {/* Solution Header */}
                <button
                  //TODO: Enable accordion functionality
                  // onClick={() =>
                  //   setActiveId(activeId === solution.id ? "" : solution.id)
                  // }
                  className="w-full p-6 lg:p-7 flex items-center justify-between hover:bg-surface-hover transition-colors group"
                >
                  <div className="flex items-center gap-4 lg:gap-8 flex-1">
                    <div className="bg-primary rounded-lg text-white flex items-center justify-center p-3">
                      {solution.icon}
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-xl font-medium font-space-grotesk text-text mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary flex items-center justify-center w-5 h-5 flex-none">
                    <ChevronDown className={`w-4 h-4 text-white transition-transform ${
                      activeId === solution.id ? "rotate-180" : ""
                    }`} />
                  </div>
                </button>

                {/* Solution Content */}
                {activeId === solution.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-dashed border-border-strong opacity-70"
                  >
                    <div className="p-6 lg:p-7 flex flex-col gap-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Image */}
                        <div className="rounded-2xl min-h-64 flex relative overflow-hidden">
                          <Image
                            src="/graphics/solution-image.webp"
                            alt="Logistics Solution"
                            width={500}
                            height={264}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
                        </div>

                        {/* Features */}
                        <div className="flex justify-center items-center">
                          <div className="flex flex-col gap-0">
                            {solution.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex flex-col gap-1 bg-transparent flex-1 p-4 lg:p-5"
                              >
                                <div className="text-base font-medium font-space-grotesk text-text">
                                  {feature.stat}
                                  <span className="text-primary">
                                    +
                                  </span>{" "}
                                  {feature.description}
                                </div>
                                <p className="text-sm leading-relaxed text-text-secondary">
                                  {feature.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

