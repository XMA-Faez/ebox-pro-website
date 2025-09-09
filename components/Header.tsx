"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Package, ShoppingCart, Truck, BarChart3, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInDown } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

const navigation = [
  {
    name: "Services",
    href: "#services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Amazon FBA Prep", href: "#amazon-fba", icon: Package },
      { name: "Shopify Fulfillment", href: "#shopify", icon: ShoppingCart },
      { name: "Noon Integration", href: "#noon", icon: Truck },
      { name: "Multi-Channel", href: "#multi-channel", icon: BarChart3 },
    ],
  },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={fadeInDown}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-rich to-gold-primary blur-lg opacity-60" />
              <div className="relative bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text">
                <span className="text-2xl md:text-3xl font-bold text-transparent">
                  Ebox Pro
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-base font-medium transition-all duration-200 hover:-translate-y-0.5",
                    isScrolled ? "text-text-secondary hover:text-gold-rich" : "text-black hover:text-gold-rich"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden"
                    >
                      {item.dropdownItems?.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-gold-light hover:text-gold-rich hover:translate-x-1 transition-all duration-200"
                          >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{dropdownItem.name}</span>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-all duration-200 active:scale-95",
              isScrolled ? "text-text-secondary" : "text-black"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                        isScrolled
                          ? "text-text-secondary hover:bg-gold-light hover:text-gold-rich"
                          : "text-black hover:bg-gold-light hover:text-gold-rich"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => {
                          const Icon = dropdownItem.icon;
                          return (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={cn(
                                "flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors",
                                isScrolled
                                  ? "text-text-muted hover:bg-gold-light hover:text-gold-rich"
                                  : "text-black/80 hover:bg-gold-light hover:text-gold-rich"
                              )}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <Icon className="w-4 h-4" />
                              {dropdownItem.name}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                <Button variant="primary" size="lg" className="w-full mt-4">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
