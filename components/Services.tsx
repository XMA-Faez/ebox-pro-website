"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WarehouseIllustration from "@/public/illustrations/warehousing.svg";
import ComplianceIllustration from "@/public/illustrations/compliant.svg";
import { IntegrationIllustration } from "@/components/IntegrationIllustration";

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  illustrationPlaceholder: string;
  illustration?: any; // Can be StaticImageData or string path
  customIllustration?: React.ReactNode; // For custom React components
}

interface ServicesProps {
  className?: string;
}

const services: ServiceItem[] = [
  {
    title: "Warehousing & Fulfillment",
    subtitle: "Strategic Dubai Location with Real-Time Operations",
    description:
      "Store your inventory in our state-of-the-art Dubai warehouse facility. We handle everything from receiving and shelving to picking, packing, and shipping. Our strategic location in Dubai Industrial Park ensures quick access to all UAE markets with optimized delivery routes.",
    features: [
      "Climate-controlled storage for sensitive products",
      "Real-time inventory tracking via WMS platform",
      "99%+ picking accuracy with 3-step quality control",
      "Same-day dispatch for orders before 8 PM cutoff",
    ],
    illustrationPlaceholder: "[WAREHOUSE_ILLUSTRATION]",
    illustration: WarehouseIllustration,
  },
  {
    title: "Multi-Platform Integration",
    subtitle: "One Inventory Pool Across All Sales Channels",
    description:
      "Seamlessly connect all your e-commerce platforms to our centralized system. Whether you sell on Amazon, Noon, Shopify, or your own website, manage everything from one unified inventory pool. No more manual updates or stock discrepancies across channels.",
    features: [
      "Official Amazon SPN Partner with priority handling",
      "Approved Noon logistics partner integration",
      "Shopify, WooCommerce, and Magento ready",
      "Real-time sync prevents overselling",
    ],
    illustrationPlaceholder: "[INTEGRATION_ILLUSTRATION]",
    customIllustration: <IntegrationIllustration />,
  },
  {
    title: "UAE Market Entry Support",
    subtitle: "Complete Regulatory Compliance & Product Registration",
    description:
      "Navigate UAE market requirements effortlessly with our comprehensive registration and compliance services. We handle all the paperwork, certifications, and approvals needed to legally sell your products in the UAE market, from customs clearance to ministry-level certifications.",
    features: [
      "Product registration with UAE authorities",
      "Customs documentation and clearance",
      "Ministry certifications and approvals",
      "Ongoing compliance monitoring and updates",
    ],
    illustrationPlaceholder: "[COMPLIANCE_ILLUSTRATION]",
    illustration: ComplianceIllustration,
  },
];

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 3L4.5 8.5L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    />
  </svg>
);

export default function Services({ className }: ServicesProps = {}) {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-medium font-space-grotesk leading-tight tracking-tight text-black mb-4">
            What We Do
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Three core services to scale your e-commerce business in UAE
          </p>
        </motion.div>

        {/* Services - Alternating Layout */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Illustration - Left on even, Right on odd */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div
                    className={`w-full h-80 lg:h-96 rounded-3xl flex items-center justify-center transition-colors overflow-hidden ${
                      service.illustration || service.customIllustration
                        ? ""
                        : ""
                    }`}
                  >
                    {service.customIllustration ? (
                      <div className="w-full h-full">
                        {service.customIllustration}
                      </div>
                    ) : service.illustration ? (
                      <div className="relative w-full h-full p-8">
                        <Image
                          src={service.illustration}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono text-sm px-4 py-2 bg-white rounded border">
                        {service.illustrationPlaceholder}
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Content - Right on even, Left on odd */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className={`flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h3 className="text-2xl lg:text-3xl font-medium font-space-grotesk text-black mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base text-primary/80 font-medium mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-black/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + featureIndex * 0.1,
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <CheckIcon />
                        </div>
                        <span className="text-black/70 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors group no-underline font-medium"
          >
            Learn More About Our Services
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
