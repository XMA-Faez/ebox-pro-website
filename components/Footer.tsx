"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  ArrowUpRight,
  Send
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  services: [
    { name: "Amazon FBA Prep", href: "#amazon-fba" },
    { name: "Shopify Fulfillment", href: "#shopify" },
    { name: "Noon Integration", href: "#noon" },
    { name: "Multi-Channel Hub", href: "#multi-channel" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Case Studies", href: "#cases" },
    { name: "Partners", href: "#partners" },
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "Support Center", href: "#support" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={fadeInUp}>
              <div className="mb-6">
                <div className="inline-block">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent">
                    Ebox Pro
                  </div>
                  <p className="text-neutral-400 mt-2">
                    E-commerce Fulfillment Excellence
                  </p>
                </div>
              </div>
              <p className="text-neutral-400 max-w-md mb-6">
                Powering e-commerce success with seamless fulfillment solutions. 
                From Amazon FBA to Shopify stores, we scale with your business.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+971501234567" 
                  className="flex items-center gap-3 text-neutral-400 hover:text-gold-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+971 50 123 4567</span>
                </a>
                <a 
                  href="mailto:hello@eboxprologistics.com" 
                  className="flex items-center gap-3 text-neutral-400 hover:text-gold-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@eboxprologistics.com</span>
                </a>
                <div className="flex items-center gap-3 text-neutral-400">
                  <MapPin className="w-5 h-5" />
                  <span>Dubai Internet City, Dubai, UAE</span>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={fadeInUp} className="md:pl-12">
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-neutral-400 mb-6">
                Get e-commerce fulfillment tips, platform updates, and scaling strategies.
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-gold-primary transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-gold-rich to-gold-primary rounded-md hover:shadow-gold-md hover:scale-110 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-neutral-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gold-primary hover:scale-110 hover:rotate-6 active:scale-95 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 border-t border-neutral-800"
          >
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-gold-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-gold-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-gold-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            variants={fadeInUp}
            className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © 2024 Ebox Pro Logistics. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-500 hover:text-gold-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-500 hover:text-gold-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-500 hover:text-gold-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}