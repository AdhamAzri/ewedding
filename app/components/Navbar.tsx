'use client'

import { useState } from 'react'
import { Heart, MapPin, Gift, CalendarCheck, Image as GalleryIcon } from 'lucide-react'

export default function Navbar(){
    const [activeTab, setActiveTab] = useState('home')

    const navItems = [
        { id: 'home', label: 'Home', icon: Heart, href: '#home' },
        { id: 'details', label: 'Event', icon: MapPin, href: '#details' },
        { id: 'gallery', label: 'Gallery', icon: GalleryIcon, href: '#gallery' },
        { id: 'gift', label: 'Gift', icon: Gift, href: '#gift' },
        { id: 'rsvp', label: 'RSVP', icon: CalendarCheck, href: '#rsvp' },
    ]

    const scrollToSection = (id: string, href: string) => {
        setActiveTab(id)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return(
        <nav className="bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-xl rounded-full px-4 py-2.5 flex justify-around items-center text-xs text-stone-700 font-medium">
            {/*<div className="bg-white/80 backdrop-blur-md border border-stone-200/80 shadow-lg rounded-full px-3 py-2 flex justify-around items-center">*/}
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.id

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id, item.href)}
                            className={`flex flex-col items-center justify-center py-1 px-2 rounded-full transition-all duration-200 ${
                                isActive
                                    ? 'text-[#9E3B4D] scale-105'
                                    : 'text-stone-500 hover:text-stone-800'
                            }`}
                        >
                            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
                            <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
                        </button>
                    )
                })}
            {/*</div>*/}
        </nav>
    )
}