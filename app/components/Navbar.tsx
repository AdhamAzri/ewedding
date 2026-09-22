'use client'

import { useState } from 'react'
import { Heart, MapPin, Gift, CalendarCheck, Image as GalleryIcon } from 'lucide-react'

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('home')

    const navItems = [
        { id: 'utama', label: 'Utama', icon: Heart },
        { id: 'perincian', label: 'Butiran', icon: MapPin },
        { id: 'mempelai', label: 'Mempelai', icon: GalleryIcon },
        // { id: 'gift', label: 'Gift', icon: Gift, href: '#gift' },
        // { id: 'rsvp', label: 'RSVP', icon: CalendarCheck, href: '#rsvp' },
    ]

    const scrollToSection = (id: string) => {
        setActiveTab(id)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
                        onClick={() => scrollToSection(item.id)}
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