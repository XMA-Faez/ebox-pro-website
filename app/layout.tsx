import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ebox Pro - Premium Logistics & 3PL Services",
  description: "Leading 3PL logistics provider offering warehousing, fulfillment, transportation, and supply chain solutions. Ebox Pro delivers reliable, scalable logistics services for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
