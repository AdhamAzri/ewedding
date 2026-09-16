import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Hakimi & Ilyana | Wedding Invitation",
  description: "Join us in celebrating our wedding day.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="h-full">
      {/* Outer Desktop Area Background */}
          <body className="min-h-screen  flex items-center justify-center m-0 p-0">

            {/*Inner 412px Phone Card Background*/}
              <div className="w-103 max-w-full h-screen relative overflow-hidden  shadow-2xl">
                  {children}
              </div>
          </body>
      </html>
  );
}