'use client'

import { useState } from 'react'
import { Heart, MapPin, Gift, CalendarCheck, Image as GalleryIcon } from 'lucide-react'

export default function Navbar() {
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

    return (
        <nav className="navbar-container">
            {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.id

                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id, item.href)}
                        className={`nav-button ${isActive ? 'nav-button-active' : 'nav-button-inactive'}`}
                    >
                        <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
                        <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
                    </button>
                )
            })}
        </nav>
    )
}