"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

const faqs = [
  {
    id: 1,
    question: "How quickly can you start fulfilling our orders?",
    answer: "Our typical onboarding process takes 1-2 weeks for e-commerce businesses. We start with a comprehensive assessment of your products and requirements, then set up your inventory in our warehouse. Our dedicated onboarding team ensures a smooth transition with real-time integration to your sales channels."
  },
  {
    id: 2,
    question: "Which e-commerce platforms do you integrate with?",
    answer: "We specialize in Amazon FBA, Shopify, Noon marketplace, WooCommerce, Magento, BigCommerce, and more. Our API-first approach enables seamless connections to virtually any e-commerce platform. We also offer custom integrations for unique business requirements."
  },
  {
    id: 3,
    question: "How do you maintain inventory accuracy?",
    answer: "We maintain 99.9% inventory accuracy through real-time tracking, cycle counting, barcode scanning, and automated reconciliation across all your sales channels. Our warehouse management system provides live visibility into stock levels with instant updates."
  },
  {
    id: 4,
    question: "Do you ship to UAE and Saudi Arabia?",
    answer: "Yes, we specialize in UAE and KSA markets with local fulfillment centers. We handle all customs documentation, VAT requirements, and compliance for both countries. Our regional expertise includes Arabic labeling and cash-on-delivery options for Noon marketplace."
  },
  {
    id: 5,
    question: "What are your fulfillment fees?",
    answer: "Our pricing is transparent with no hidden fees. We charge per-unit picking and packing fees, storage per cubic foot monthly, and shipping at cost plus a small markup. We offer volume discounts for higher volumes. Contact us for a detailed quote based on your specific needs."
  },
  {
    id: 6,
    question: "How do you handle returns from customers?",
    answer: "We offer comprehensive returns processing including quality inspection, restocking, and customer communication. Returns can be automatically processed or require approval based on your rules. We integrate with your customer service tools to provide seamless return experiences across all channels."
  },
  {
    id: 7,
    question: "Are you Amazon FBA compliant?",
    answer: "Yes, we are fully Amazon FBA compliant with certified prep services. We handle labeling, poly bagging, bubble wrapping, and bundle creation according to Amazon's strict requirements. We can prep and forward your inventory directly to Amazon fulfillment centers."
  },
  {
    id: 8,
    question: "Can you handle same-day delivery?",
    answer: "Yes, we offer same-day delivery in Dubai, Abu Dhabi, and Riyadh through our strategically located fulfillment centers. We also provide next-day delivery coverage throughout UAE and KSA with full tracking and customer communication."
  }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cream/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge>
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                Questions?
              </span>{" "}
              <span className="bg-gradient-to-r from-gold-rich to-gold-accent bg-clip-text text-transparent">
                We've Got Answers
              </span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Find answers to common questions about our e-commerce fulfillment services, 
              platform integrations, and processes.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div variants={staggerContainer} className="space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-gold-light/50 hover:border-gold-light transition-colors duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gold-light/20 transition-colors duration-200"
                >
                  <span className="font-semibold text-text-primary pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openFaq === faq.id ? (
                      <Minus className="w-5 h-5 text-gold-rich" />
                    ) : (
                      <Plus className="w-5 h-5 text-gold-rich" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-gold-light/50"
                    >
                      <div className="px-6 py-6">
                        <p className="text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Still have questions? Our e-commerce fulfillment experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-gold-rich to-gold-primary text-white font-semibold rounded-full hover:from-gold-dark hover:to-gold-rich hover:shadow-gold-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 font-semibold text-gold-rich border-2 border-gold-rich rounded-full hover:bg-gold-rich hover:text-white transition-colors duration-300">
                View All FAQs
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}