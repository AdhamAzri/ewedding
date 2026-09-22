'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'
import RsvpComponent from "@/app/components/RsvpPageComponent"

// Reusable animation preset
const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export default function EventDetailsPageComponent() {
    const [isRsvpOpen, setIsRsvpOpen] = useState(false)

    return (
        <section id="event" className="w-full space-y-6 pb-6 pt-4">

            {/* SECTION HEADER */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="text-center space-y-2"
            >
                <span className="badge-green">SAVE THE DATE</span>
                <h2 className="section-title">Rangkaian Hari Bahagia</h2>
                <p className="section-description">
                    Dengan memohon rahmat dan redha Allah SWT, kami bermaksud menyelenggarakan acara pernikahan:
                </p>
            </motion.div>

            {/* 1. COUNTDOWN CARD */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="countdown-card"
            >
                <div className="badge-pink">Sabtu, 24 Oktober 2026</div>
                <h3 className="font-serif text-lg text-[#1A2E22]">Menghitung Hari Bahagia</h3>

                <div className="grid grid-cols-4 gap-2 pt-1">
                    {[
                        { label: 'HARI', val: '00' },
                        { label: 'JAM', val: '00' },
                        { label: 'MENIT', val: '00' },
                        { label: 'DETIK', val: '00' }
                    ].map((item, idx) => (
                        <div key={idx} className="countdown-box">
                            <span className="countdown-val">{item.val}</span>
                            <span className="countdown-lbl">{item.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. EVENT LOCATION DETAILS CARD */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="event-card"
            >
                <div className="flex gap-2">
                    <span className="badge-pink">Akad Nikah</span>
                    <span className="badge-green">Walimatul Urus</span>
                </div>

                <div>
                    <h3 className="font-serif text-xl text-[#1A2E22] font-semibold">Akad Nikah &amp; Resepsi</h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Prosesi pengucapan janji suci pernikahan di hadapan penghulu, keluarga, dan para saksi.
                    </p>
                </div>

                <div className="space-y-3 text-xs text-stone-700 pt-1">
                    <div className="flex items-start gap-3">
                        <div className="icon-wrapper">
                            <Clock size={16} />
                        </div>
                        <div>
                            <p className="font-semibold text-[#1A2E22]">08.00 – 10.00 WIB</p>
                            <p className="text-stone-500 text-[11px]">Sabtu, 24 Oktober 2026</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="icon-wrapper">
                            <MapPin size={16} />
                        </div>
                        <div>
                            <p className="font-semibold text-[#1A2E22]">The Golden Palace</p>
                            <p className="text-stone-500 text-[11px]">Kuala Lumpur, Malaysia</p>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="space-y-2.5 pt-2">
                    <button className="btn-calendar">
                        <Calendar size={15} />
                        Simpan ke Google Calendar
                    </button>

                    <button onClick={() => setIsRsvpOpen(true)} className="btn-rsvp">
                        <HeartHandshake size={15} />
                        Isi Kehadiran (RSVP)
                    </button>
                </div>
            </motion.div>

            {/* 3. MODAL COMPONENT */}
            <RsvpComponent isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />

        </section>
    )
}