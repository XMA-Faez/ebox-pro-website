"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  Package,
  TrendingUp,
  Users,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

const stats = [
  { icon: Package, value: "2M+", label: "Orders Fulfilled" },
  { icon: ShoppingCart, value: "500+", label: "E-commerce Sellers" },
  { icon: TrendingUp, value: "99.9%", label: "Order Accuracy" },
  { icon: Users, value: "24hr", label: "Processing Time" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/20 via-cream/80 to-gold-light/30" />
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gold-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold-rich/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light/60 backdrop-blur-sm rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-rich opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-rich"></span>
            </span>
            <span className="text-sm font-medium text-gold-dark">
              Trusted by 500+ E-commerce Sellers
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
              E-commerce Fulfillment
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold-rich via-gold-primary to-gold-accent bg-clip-text text-transparent">
              That Scales
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            From Amazon FBA prep to Shopify fulfillment, we handle your entire
            post-purchase journey. Connect your store and start shipping in 24
            hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="primary" size="lg">
              Connect Your Store <ArrowRight className="w-5 h-5" />
            </Button>

            <Button variant="secondary" size="lg">
              View Pricing
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/10 to-gold-rich/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 hover:border-gold-light transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gold-rich mb-2 mx-auto" />
                    <div className="text-2xl font-bold text-text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-gold-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

