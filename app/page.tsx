'use client'

import { useState } from 'react'
import LandingPageComponent from "@/app/components/LandingPageComponent";
import MainPageComponent from "@/app/components/MainPageComponent";
import Navbar from './components/Navbar'
import EventDetailsPageComponent from "@/app/components/EventDetailsPageComponent";
import SangMempelaiPageComponent from "@/app/components/SangMempelaiPageComponent";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className="w-full h-full">
        {!isOpen ? (
            /* 1. Landing Cover Page */
            <LandingPageComponent onOpen={() => setIsOpen(true)} />
        ) : (
            <div className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
              {/* 2. Main Page + Sub Pages in Continuous Smooth Scroll Container */}
              <div className="w-full h-full overflow-y-auto scroll-smooth pb-24 px-4 pt-4">
                  <MainPageComponent />
                  <EventDetailsPageComponent/>
                  <SangMempelaiPageComponent/>
              </div>

              {/* 3. Navbar visible only after opening */}
              <div className="absolute bottom-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <div className="pointer-events-auto w-full max-w-[380px]">
                  <Navbar />
                </div>
              </div>

            </div>


        )}
      </div>
  )
}