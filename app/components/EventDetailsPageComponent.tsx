// export default function EventDetailsPageComponent() {
//     return (
//         <div className="w-full flex flex-col">
//             {/* Save The Date Card */}
//             <section id="save-the-date" className=" w-full flex items-center justify-center pt-6">
//                 <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl w-full text-center shadow-lg text-stone-800">
//                     <h3 className="font-serif text-2xl">Save The Date</h3>
//                     <p className="text-sm mt-2">Saturday, 24 October 2026</p>
//                     <p className="text-xs text-stone-600 mt-1">The Golden Palace, KL</p>
//                 </div>
//             </section>
//
//             {/* RSVP Form */}
//             <section id="rsvp" className="w-full flex items-center justify-center pt-6">
//                 <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl w-full text-center shadow-lg text-stone-800">
//                     <h3 className="font-serif text-2xl">RSVP</h3>
//                     <p className="text-sm mt-2">Will you join us?</p>
//                 </div>
//             </section>
//         </div>
//     )
// }

// src/app/components/EventDetailsPageComponent.tsx
'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, HeartHandshake } from 'lucide-react'
import RsvpComponent from "@/app/components/RsvpPageComponent";

export default function EventDetailsPageComponent() {
    const [isRsvpOpen, setIsRsvpOpen] = useState(false)

    return (
        <section id="event" className="w-full space-y-6 pb-6 pt-4">

            {/* SECTION HEADER */}
            <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D8F3E5] text-[#4F7A62] text-xs font-medium tracking-wide">
          SAVE THE DATE
        </span>
                <h2 className="font-serif text-2xl text-[#1A2E22] font-semibold">
                    Rangkaian Hari Bahagia
                </h2>
                <p className="text-xs text-stone-600 px-4 leading-relaxed">
                    Dengan memohon rahmat dan redha Allah SWT, kami bermaksud menyelenggarakan acara pernikahan:
                </p>
            </div>

            {/* 1. COUNTDOWN CARD */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-stone-100 text-center space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#FDE8E8] text-[#9E4A56] text-xs font-medium">
                    Sabtu, 24 Oktober 2026
                </div>
                <h3 className="font-serif text-lg text-[#1A2E22]">Menghitung Hari Bahagia</h3>

                <div className="grid grid-cols-4 gap-2 pt-1">
                    {[
                        { label: 'HARI', val: '00' },
                        { label: 'JAM', val: '00' },
                        { label: 'MENIT', val: '00' },
                        { label: 'DETIK', val: '00' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#EBF7F1] rounded-xl p-2.5 flex flex-col items-center">
                            <span className="text-lg font-bold text-[#8C535D]">{item.val}</span>
                            <span className="text-[10px] text-[#527863] font-medium tracking-wider">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. EVENT LOCATION DETAILS CARD */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-stone-100 space-y-5">
                <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-[#FDE8E8] text-[#9E4A56] text-xs font-medium">
            Akad Nikah
          </span>
                    <span className="px-3 py-1 rounded-full bg-[#EBF7F1] text-[#4F7A62] text-xs font-medium">
            Walimatul Urus
          </span>
                </div>

                <div>
                    <h3 className="font-serif text-xl text-[#1A2E22] font-semibold">Akad Nikah & Resepsi</h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Prosesi pengucapan janji suci pernikahan di hadapan penghulu, keluarga, dan para saksi.
                    </p>
                </div>

                <div className="space-y-3 text-xs text-stone-700 pt-1">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-[#EBF7F1] text-[#4F7A62] shrink-0">
                            <Clock size={16} />
                        </div>
                        <div>
                            <p className="font-semibold text-[#1A2E22]">08.00 – 10.00 WIB</p>
                            <p className="text-stone-500 text-[11px]">Sabtu, 24 Oktober 2026</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-[#EBF7F1] text-[#4F7A62] shrink-0">
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
                    <button className="w-full py-3 px-4 bg-[#8C535D] hover:bg-[#78444E] text-white font-medium text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer">
                        <Calendar size={15} />
                        Simpan ke Google Calendar
                    </button>

                    <button
                        onClick={() => setIsRsvpOpen(true)}
                        className="w-full py-3 px-4 bg-[#4A6B58] hover:bg-[#3D5949] text-white font-medium text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                    >
                        <HeartHandshake size={15} />
                        Isi Kehadiran (RSVP)
                    </button>
                </div>
            </div>

            {/* 3. MODAL COMPONENT */}
            <RsvpComponent
                isOpen={isRsvpOpen}
                onClose={() => setIsRsvpOpen(false)}
            />

        </section>
    )
}