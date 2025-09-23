"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Ebox - Final Logo/ebox - final logo -11.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/service" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
        <div className="bg-transparent flex justify-center items-center py-8 px-4">
          <div className="flex justify-center items-center w-full max-w-[1192px] gap-8">
            {/* Navigation Left */}
            <div className="flex-1 flex justify-start items-center">
              <nav className="hidden md:flex items-center gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-full bg-transparent text-white px-4 py-3 text-sm leading-6 transition-colors duration-300 hover:bg-white/[0.08] hover:backdrop-blur-[8px]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Logo Center */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Ebox Pro"
                width={120}
                height={40}
                className="h-20 w-auto"
              />
            </Link>

            {/* Navigation Right */}
            <div className="flex-1 flex justify-end items-center">
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="/pricing"
                  className="rounded-full bg-transparent text-white px-4 py-3 text-sm leading-6 transition-colors duration-300 hover:bg-white/[0.08] hover:backdrop-blur-[8px]"
                >
                  Pricing & Plans
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-primary text-white text-center px-4 py-3 text-sm font-medium leading-6 no-underline flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden rounded-full bg-transparent transition-colors duration-300 hover:bg-white/[0.08] hover:backdrop-blur-[8px] flex justify-center items-center p-3 min-h-[44px] min-w-[44px]"
              >
                <div className="flex flex-col justify-center items-center w-6 h-6 gap-1 p-0">
                  {isMobileMenuOpen ? (
                    <>
                      <div className="w-4 h-0.5 bg-white rounded-full transform rotate-45 translate-y-0.5"></div>
                      <div className="w-4 h-0.5 bg-white rounded-full transform -rotate-45 -translate-y-0.5"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-4 h-0.5 bg-white rounded-full"></div>
                      <div className="w-4 h-0.5 bg-white rounded-full"></div>
                      <div className="w-4 h-0.5 bg-white rounded-full"></div>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden rounded-b-3xl bg-white/[0.1] backdrop-blur-[10px] flex flex-col pb-16 overflow-hidden">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white px-4 py-6 text-2xl leading-10 border-b border-white/[0.08] transition-colors hover:border-white/[0.32] hover:bg-transparent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-stretch justify-center mt-32 px-4 gap-2">
              <Link
                href="/pricing"
                className="rounded-full bg-transparent text-white px-4 py-2 text-sm leading-6 transition-colors duration-300 hover:bg-white/[0.08] hover:backdrop-blur-[8px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing & Plans
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-primary text-white text-center px-4 py-3 text-sm font-medium leading-6 no-underline w-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Navigation line */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center px-4">
        <div className="bg-white/[0.08] w-full max-w-[1192px] h-px"></div>
      </div>
    </>
  );
}
