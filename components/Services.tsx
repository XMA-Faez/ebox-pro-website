"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import {
  TbShoppingCart,
  TbTruck,
  TbDashboard,
  TbPackageImport,
  TbGift,
  TbShieldCheck
} from "react-icons/tb";

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  mark: "top-right" | "bottom-right";
}

interface ServicesProps {
  className?: string;
}

const services: ServiceItem[] = [
  {
    title: "Multi-Channel Fulfillment",
    description:
      "Seamless integration with Amazon, Noon, Shopify, and WooCommerce. Manage all your sales channels from one inventory pool.",
    features: [
      "Amazon SPN Partner",
      "Noon Seller Lab approved",
      "Shopify & WooCommerce ready",
    ],
    icon: <TbShoppingCart size={20} />,
    mark: "top-right",
  },
  {
    title: "Same-Day Delivery",
    description:
      "Dubai & Sharjah same-day, all 7 Emirates next-day. Orders processed before 8PM cutoff for guaranteed delivery times.",
    features: [
      "Same-day in Dubai",
      "Next-day UAE-wide",
      "2-3 days GCC delivery",
    ],
    icon: <TbTruck size={20} />,
    mark: "top-right",
  },
  {
    title: "Real-Time Inventory",
    description:
      "Advanced WMS/OMS dashboard with live tracking. Monitor stock levels, orders, and performance metrics 24/7.",
    features: [
      "Live inventory tracking",
      "99%+ order accuracy",
      "SKU-level analytics",
    ],
    icon: <TbDashboard size={20} />,
    mark: "bottom-right",
  },
  {
    title: "Returns Processing",
    description:
      "24-48 hour returns processing with inspection, restocking, and detailed reporting. Damaged goods photographed & logged.",
    features: [
      "24-hour inspection",
      "Automated restocking",
      "Detailed return analytics",
    ],
    icon: <TbPackageImport size={20} />,
    mark: "top-right",
  },
  {
    title: "Custom Packaging",
    description:
      "Branded packaging, gift wrapping, and kitting services. Create memorable unboxing experiences for your customers.",
    features: [
      "Branded boxes & inserts",
      "Gift wrapping options",
      "Product kitting services",
    ],
    icon: <TbGift size={20} />,
    mark: "bottom-right",
  },
  {
    title: "UAE Compliance",
    description:
      "Complete product registration, customs clearance, and regulatory compliance. Navigate UAE market requirements effortlessly.",
    features: [
      "Product registration",
      "Customs documentation",
      "Ministry certifications",
    ],
    icon: <TbShieldCheck size={20} />,
    mark: "top-right",
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#b)" clipPath="url(#a)">
      <path
        d="m7.2 11.394 5.333-5.333-1.066-1.067L7.2 9.261 5.067 7.127 4 8.194l3.2 3.2Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
      <filter
        id="b"
        x="-6.559"
        y="-5.565"
        width="29.652"
        height="27.519"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1.508"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_4017_133"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.525" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.968627 0 0 0 0 0.294118 0 0 0 0 0.270588 0 0 0 0.12 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4017_133"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4017_133"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const CornerMark = ({
  position,
}: {
  position: "top-right" | "bottom-right";
}) => {
  if (position === "top-right") {
    return (
      <div className="absolute -bottom-4 -left-4">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 14L14 6"
            stroke="var(--color-primary)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M1 1L9 1"
            stroke="var(--color-primary)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <rect
            x="13"
            width="2"
            height="2"
            rx="1"
            fill="var(--color-primary)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute -bottom-4 -right-4">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 14L0.999999 6"
          stroke="var(--color-primary)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M14 1L6 1"
          stroke="var(--color-primary)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <rect
          width="2"
          height="2"
          rx="1"
          transform="matrix(-1 0 0 1 2 0)"
          fill="var(--color-primary)"
        />
      </svg>
    </div>
  );
};

export default function Services({ className }: ServicesProps = {}) {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto lg:px-4 rounded-3xl bg-background-subtle flex flex-col relative overflow-hidden"
      >
        <div className="w-full max-w-5xl mx-auto py-16 lg:py-28 px-6 border-l border-r border-dashed border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 w-full max-w-xl mx-auto flex flex-col gap-4"
          >
            <div className="border border-text rounded-full px-2 py-0.5 text-sm font-medium text-text inline-block w-fit mx-auto">
              Our Services
            </div>
            <h3 className="text-4xl lg:text-5xl font-medium font-space-grotesk leading-tight tracking-tighter text-text">
              End-to-End 3PL Solutions
            </h3>
            <div className="w-full max-w-md mx-auto">
              <p className="text-lg leading-6 text-text mb-0">
                From Dubai warehouse to customer doorstep. Tech-driven
                fulfillment for e-commerce brands scaling in UAE & GCC.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative rounded-2xl bg-surface p-7 flex flex-col gap-6 shadow-lg"
                >
                  {/* {service.mark && <CornerMark position={service.mark as "top-right" | "bottom-right"} />} */}

                  {/* Icon with negative margin */}
                  <div className="bg-primary rounded-full text-white px-3 py-1.5 w-fit shadow-ebox-button -mt-11">
                    {service.icon}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium text-text">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="rounded-full bg-primary flex-none w-4 h-4 flex items-center justify-center text-primary">
                          <CheckIcon />
                        </div>
                        <span className="text-sm leading-relaxed text-text">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="text-xs font-medium leading-5 text-text hover:text-primary transition-colors group no-underline"
              >
                Get a Quote for Your Business
                <span className="text-primary ml-1 group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
