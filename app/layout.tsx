import type { Metadata } from "next";
import "./globals.css";
import { Amiri } from 'next/font/google';
import React from "react";
import SprinkleCanvas from "@/app/components/SprinkeComponent";

export const metadata: Metadata = {
  title: "Hakimi & Ilyana | Wedding Invitation",
  description: "Join us in celebrating our wedding day.",
};

const amiri = Amiri({
    subsets: ['arabic'],
    weight: ['400', '700'],
    variable: '--font-amiri',
})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="h-full theme-simple amiri.variable">
      {/* Outer Desktop Area Background */}
          <body className="body">

            {/*Inner 412px Phone Card Background*/}
              <div className="main-div">
                  <SprinkleCanvas/>
                  {children}
              </div>
          </body>
      </html>
  );
}