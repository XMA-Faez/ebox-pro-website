"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

const testimonials = [
  {
    id: 1,
    content: "Ebox Pro transformed our Amazon FBA operations completely. Their prep services and direct forwarding cut our processing time by 60% while maintaining 100% compliance.",
    author: "Sarah Al-Mansoori",
    title: "E-commerce Director",
    company: "Desert Rose Electronics",
    rating: 5,
    metric: "60% faster FBA prep",
  },
  {
    id: 2,
    content: "The Shopify integration was seamless - orders flow automatically from our store to their warehouse. Real-time inventory sync eliminated our stockout issues completely.",
    author: "Ahmed Hassan",
    title: "Founder", 
    company: "Gulf Fashion Co",
    rating: 5,
    metric: "Zero stockouts",
  },
  {
    id: 3,
    content: "Scaling from 500 to 10,000 monthly orders on Noon marketplace was effortless with Ebox Pro. Their regional expertise in UAE and KSA is unmatched.",
    author: "Fatima Al-Zahra",
    title: "Co-Founder",
    company: "Wellness Plus",
    rating: 5,
    metric: "2000% order growth",
  },
  {
    id: 4,
    content: "Multi-channel fulfillment across Amazon, Shopify, and Noon from one dashboard. Ebox Pro unified our inventory and eliminated the complexity of managing multiple platforms.",
    author: "Omar Khalil",
    title: "Operations Manager",
    company: "Tech Hub Middle East",
    rating: 5,
    metric: "3 channels unified",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream/50">
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
              Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                Real Results,
              </span>{" "}
              <span className="bg-gradient-to-r from-gold-rich to-gold-accent bg-clip-text text-transparent">
                Real Growth
              </span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See how we've helped e-commerce businesses scale their fulfillment operations
              across Amazon, Shopify, and Noon marketplaces.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="relative bg-white rounded-2xl p-8 border border-gold-light/50 hover:border-gold-light hover:shadow-gold-sm hover:-translate-y-1 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gold-primary/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-text-secondary mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Metric Highlight */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light rounded-full mb-6">
                  <div className="w-2 h-2 bg-gold-rich rounded-full"></div>
                  <span className="text-gold-dark font-semibold text-sm">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-rich to-gold-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-gold-rich font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Join 500+ e-commerce sellers that trust Ebox Pro with their fulfillment
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-gold-rich to-gold-primary text-white font-semibold rounded-full hover:from-gold-dark hover:to-gold-rich hover:shadow-gold-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
              See All Case Studies
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}