// src/app/components/SangMempelaiComponent.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, MessageSquare, Send, Sparkles } from 'lucide-react'

// Placeholder images for the stacked gallery
const GALLERY_IMAGES = [
    { id: 1, src: '/bride-groom-1.jpg', alt: 'Hakimi & Ilyana Prewedding 1', caption: 'First Glance 🌸' },
    { id: 2, src: '/bride-groom-2.jpg', alt: 'Hakimi & Ilyana Prewedding 2', caption: 'Two Hearts Entwined 💍' },
    { id: 3, src: '/bride-groom-3.jpg', alt: 'Hakimi & Ilyana Prewedding 3', caption: 'Walking Down the Aisle ✨' },
]

// Mock guestbook messages
const INITIAL_MESSAGES = [
    { id: 1, name: 'Mustaphar Kamal', relation: 'Sahabat SMA', text: 'Barakallah Hakimi & Ilyana! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Amin!', time: '10:15 AM' },
    { id: 2, name: 'Siti & Keluarga', relation: 'Keluarga', text: 'Selamat ya untuk kedua mempelai! Lancar sampai hari H.', time: '11:30 AM' },
    { id: 3, name: 'Adham', relation: 'Rekan Kerja', text: 'Congrats bro! Doa terbaik untuk kalian berdua.', time: '01:45 PM' },
]

export default function SangMempelaiPageComponent() {
    const [images, setImages] = useState(GALLERY_IMAGES)
    const [messages, setMessages] = useState(INITIAL_MESSAGES)
    const [nameInput, setNameInput] = useState('')
    const [msgInput, setMsgInput] = useState('')

    // Stack Cycle: Moves top picture to the bottom of the stack on click
    const handleNextPhoto = () => {
        setImages((prev) => {
            const updated = [...prev]
            const topImage = updated.shift()
            if (topImage) updated.push(topImage)
            return updated
        })
    }

    // Handle new guest message submit
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!nameInput.trim() || !msgInput.trim()) return

        const newEntry = {
            id: Date.now(),
            name: nameInput.trim(),
            relation: 'Tamu Undangan',
            text: msgInput.trim(),
            time: 'Baru saja',
        }

        setMessages([newEntry, ...messages])
        setNameInput('')
        setMsgInput('')
    }

    return (
        <section id="mempelai" className="w-full space-y-8 pb-6">

            {/* SECTION HEADER */}
            <div className="text-center space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF7F1] text-[#4F7A62] text-xs font-medium tracking-wide">
                  PASANGAN BERBAHAGIA
                </span>
                <h2 className="font-serif text-2xl text-[#1A2E22] font-semibold">
                    Sang Mempelai
                </h2>
            </div>

            {/* GROOM & BRIDE PROFILES */}
            <div className="space-y-4">
                {/* Groom Profile */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-stone-100 text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#EBF7F1] text-[#4F7A62] flex items-center justify-center font-bold text-sm">
                        👨‍💼
                    </div>
                    <h3 className="font-serif text-lg text-[#1A2E22] font-semibold">
                        Muhammad Alif Hakimi
                    </h3>
                    <p className="text-[11px] text-[#4F7A62] font-semibold tracking-wider uppercase">
                        Pengantin Lelaki
                    </p>
                    <p className="text-xs text-stone-500 leading-relaxed">
                        Putra Pertama En. Mohd Zalif & Pn. Nurul Zafirah
                    </p>
                </div>

                {/* Bride Profile */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-stone-100 text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#FDE8E8] text-[#9E4A56] flex items-center justify-center font-bold text-sm">
                        👩‍💼
                    </div>
                    <h3 className="font-serif text-lg text-[#1A2E22] font-semibold">
                        Nur Ilyana
                    </h3>
                    <p className="text-[11px] text-[#9E4A56] font-semibold tracking-wider uppercase">
                        Pengantin Wanita
                    </p>
                    <p className="text-xs text-stone-500 leading-relaxed">
                        Putri Bungsu En. Muhammad Alif Haikal & Pn. Siti Nur Fatimah
                    </p>
                </div>
            </div>

            {/* 1. INTERACTIVE STACKED PHOTO GALLERY */}
            <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2 text-[#4F7A62] text-xs font-semibold uppercase tracking-wider">
                    <Sparkles size={14} />
                    <span>Momen Bahagia</span>
                </div>

                {/* Card Stack Container */}
                <div
                    onClick={handleNextPhoto}
                    className="relative w-full h-[360px] cursor-pointer group flex items-center justify-center"
                >
                    {images.map((img, index) => {
                        // Compute stacked card transformations
                        const isTop = index === 0
                        const rotation = isTop ? 'rotate-0' : index === 1 ? 'rotate-3 scale-[0.96]' : '-rotate-3 scale-[0.92]'
                        const opacity = isTop ? 'opacity-100' : index === 1 ? 'opacity-80' : 'opacity-60'
                        const translateY = index * 8

                        return (
                            <div
                                key={img.id}
                                style={{ transform: `translateY(${translateY}px)` }}
                                className={`absolute w-full h-[340px] rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-all duration-300 ease-in-out ${rotation} ${opacity} ${
                                    isTop ? 'z-30 group-hover:scale-[1.01]' : index === 1 ? 'z-20' : 'z-10'
                                }`}
                            >
                                {/* Image Placeholder */}
                                <div className="relative w-full h-full bg-stone-200">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="412px"
                                        className="object-cover"
                                    />

                                    {/* Photo Caption Overlay */}
                                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white text-left">
                                        <p className="text-xs font-medium">{img.caption}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p className="text-[11px] text-stone-500 italic">
                    *Ketuk foto untuk melihat foto berikutnya
                </p>
            </div>

            {/* 2. CHAT STYLE GUESTBOOK / NOTES FROM GUESTS */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-stone-100 space-y-4">

                {/* Guestbook Title */}
                <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                    <MessageSquare size={18} className="text-[#4F7A62]" />
                    <div>
                        <h3 className="font-serif text-base text-[#1A2E22] font-semibold">
                            Ucapan & Doa Restu
                        </h3>
                        <p className="text-[11px] text-stone-500">
                            {messages.length} pesan dari keluarga & teman
                        </p>
                    </div>
                </div>

                {/* Chat Feed */}
                <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                    {messages.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#EBF7F1]/60 rounded-xl p-3 space-y-1 border border-[#D8F3E5]"
                        >
                            <div className="flex justify-between items-center text-[11px]">
                                <span className="font-semibold text-[#1A2E22]">{item.name}</span>
                                <span className="text-[10px] text-stone-400">{item.time}</span>
                            </div>
                            <p className="text-xs text-stone-700 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Message Input Box */}
                <form onSubmit={handleSendMessage} className="space-y-2 pt-2 border-t border-stone-100">
                    <input
                        type="text"
                        placeholder="Nama Anda"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        className="w-full px-3 py-2 bg-[#EBF7F1] text-xs text-stone-800 rounded-xl outline-none focus:ring-1 focus:ring-[#4F7A62]"
                    />
                    <div className="relative flex items-center">
            <textarea
                rows={2}
                placeholder="Tulis ucapan selamat..."
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                className="w-full pl-3 pr-10 py-2 bg-[#EBF7F1] text-xs text-stone-800 rounded-xl outline-none focus:ring-1 focus:ring-[#4F7A62] resize-none"
            />
                        <button
                            type="submit"
                            className="absolute right-2 bottom-2 p-1.5 bg-[#4F7A62] text-white rounded-lg hover:bg-[#3D5949] transition-all cursor-pointer"
                        >
                            <Send size={13} />
                        </button>
                    </div>
                </form>

            </div>

        </section>
    )
}