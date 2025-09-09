"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart,
  Package, 
  Truck, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Boxes,
  RotateCcw,
  Zap,
  Users
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const services = [
  {
    id: "amazon-fba",
    title: "Amazon FBA Prep",
    description: "Complete FBA preparation and shipment services for Amazon sellers",
    icon: Package,
    color: "from-gold-rich to-gold-primary",
    features: [
      "FBA-compliant labeling",
      "Poly bagging & bubble wrap",
      "Bundle creation & kitting",
      "Direct Amazon forwarding",
    ],
    stats: { processed: "100K+ units", compliance: "100%" },
  },
  {
    id: "shopify",
    title: "Shopify Fulfillment",
    description: "Seamless integration with Shopify stores for automated fulfillment",
    icon: ShoppingCart,
    color: "from-gold-primary to-gold-accent",
    features: [
      "One-click app integration",
      "Branded packaging options",
      "Real-time inventory sync",
      "Subscription box support",
    ],
    stats: { stores: "500+ connected", speed: "2hr processing" },
  },
  {
    id: "noon",
    title: "Noon Integration", 
    description: "Specialized fulfillment for Noon marketplace sellers in UAE/KSA",
    icon: Truck,
    color: "from-gold-accent to-gold-light",
    features: [
      "Noon FBN preparation",
      "Arabic label printing",
      "Cash-on-delivery handling",
      "Same-day delivery setup",
    ],
    stats: { coverage: "UAE + KSA", delivery: "Same day" },
  },
  {
    id: "multi-channel",
    title: "Multi-Channel Hub",
    description: "Centralized fulfillment across all your sales channels",
    icon: BarChart3,
    color: "from-gold-light to-gold-primary",
    features: [
      "Unified inventory dashboard",
      "Cross-platform sync",
      "Overflow prevention",
      "Analytics & reporting",
    ],
    stats: { channels: "10+ platforms", accuracy: "99.9%" },
  },
];

const additionalFeatures = [
  { icon: Boxes, text: "Custom Packaging" },
  { icon: RotateCcw, text: "Returns Processing" },
  { icon: Zap, text: "Same-Day Processing" },
  { icon: Users, text: "Dedicated Support" },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const activeService = services.find(s => s.id === selectedService)!;

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-cream/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge>
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                Scale Without
              </span>{" "}
              <span className="bg-gradient-to-r from-gold-rich to-gold-accent bg-clip-text text-transparent">
                The Hassle
              </span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From Amazon FBA to Shopify stores, we handle every step of your 
              e-commerce fulfillment with speed and precision.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                    selectedService === service.id
                      ? "bg-gradient-to-r from-gold-rich to-gold-primary text-white shadow-gold-md scale-105"
                      : "bg-white text-text-secondary hover:bg-gold-light border border-neutral-200"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {service.title}
                </button>
              );
            })}
          </motion.div>

          {/* Active Service Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              {/* Left: Service Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {activeService.title}
                  </h3>
                  <p className="text-text-secondary">
                    {activeService.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {activeService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold-rich flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  {Object.entries(activeService.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent">
                        {value}
                      </div>
                      <div className="text-sm text-text-muted capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="primary" size="md">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Right: Visual Card */}
              <div
                className="relative h-[400px] rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-90",
                  `${activeService.color}`
                )} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {React.createElement(activeService.icon, {
                      className: "w-32 h-32 text-white/20"
                    })}
                  </motion.div>
                </div>
                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <h4 className="text-white font-semibold mb-2">Quick Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(activeService.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-white/80 text-sm capitalize">{key}</div>
                          <div className="text-white text-xl font-bold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Additional Features */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-light rounded-full mb-3">
                    <Icon className="w-8 h-8 text-gold-rich" />
                  </div>
                  <p className="text-text-secondary font-medium">{feature.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';