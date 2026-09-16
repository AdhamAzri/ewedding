// 'use client'
//
// interface LandingPageProps {
//     onOpen: () => void
// }
//
// export default function LandingPageComponent({ onOpen }: LandingPageProps) {
//     return (
//         <div className="h-screen w-full flex flex-col items-center justify-center text-center p-6 text-white" onClick={onOpen}>
//             <p className="text-xs uppercase tracking-widest text-[#1A1A1A] ">You Are Invited To</p>
//             <h1 className="font-serif text-4xl my-3 text-[#1A1A1A]">Adam & Sarah</h1>
//
//             {/*<button*/}
//             {/*    onClick={onOpen}*/}
//             {/*    className="mt-6 px-6 py-2.5 bg-white backdrop-blur-md border border-white/40 text-[#1A1A1A] text-sm rounded-full shadow-lg hover:bg-white/30 transition-all active:scale-95 cursor-pointer"*/}
//             {/*>*/}
//             {/*    Open Invitation*/}
//             {/*</button>*/}
//         </div>
//     )
// }

// src/app/components/LandingPageComponent.tsx
'use client'

import { Music, Share2, Calendar, MapPin, Mail, Home, Heart, CalendarCheck, CheckCircle2 } from 'lucide-react'

interface LandingPageComponentProps {
    onOpen?: () => void
}

export default function LandingPageComponent({ onOpen }: LandingPageComponentProps) {
    return (
        <div className="relative min-h-screen w-full max-w-[430px] mx-auto bg-[#FAFAF7] text-[#2C2C2C] flex flex-col justify-between overflow-hidden font-serif border-x border-stone-200 shadow-2xl"
             onClick={onOpen}>

            {/* GOLD INNER BORDER DECORATION */}
            <div className="absolute inset-3 border border-[#C5A059]/40 pointer-events-none rounded-xl z-10" />

            {/* FLOATING TOP ACTION BAR */}
            <div className="relative z-20 px-6 pt-6 flex justify-between items-center">
                {/* Music Player Capsule */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-xs border border-stone-200/60 text-[10px] tracking-wider uppercase text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <Music size={12} className="text-[#9E4A56]" />
                    <span className="truncate max-w-[140px] font-sans font-medium">CAN'T HELP FALLING IN LOVE</span>
                </div>

                {/* Share Button */}
                <button
                    aria-label="Share invitation"
                    className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-xs border border-stone-200/60 text-stone-600 hover:text-stone-900 transition-all cursor-pointer"
                >
                    <Share2 size={15} />
                </button>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="relative z-20 my-auto py-8 px-6 text-center space-y-6">

                {/* WALIMATULURUS HEADER */}
                <div className="space-y-1">
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-[1px] w-8 bg-[#C5A059]/50" />
                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium">
                            WALIMATULURUS
                        </p>
                        <span className="h-[1px] w-8 bg-[#C5A059]/50" />
                    </div>
                    <p className="italic text-stone-500 text-xs">Save the Date</p>
                </div>

                {/* BRIDE & GROOM NAMES */}
                <div className="space-y-1 pt-2">
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#8C3A48] tracking-wide leading-tight">
                        Ilyana
                    </h1>
                    <p className="text-2xl font-serif italic text-[#8C3A48]/80 font-light">
                        &amp;
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#8C3A48] tracking-wide leading-tight">
                        Hakimi
                    </h1>
                </div>

                {/* DATE DISPLAY: DATE | MONTH | YEAR */}
                <div className="pt-4 pb-2">
                    <div className="inline-flex items-center justify-center gap-4 py-2 px-6 border-y border-stone-300/80 text-sm tracking-[0.2em] font-sans text-stone-800">
                        <span>24</span>
                        <span className="text-[#C5A059] font-light">|</span>
                        <span className="font-semibold text-base">OKTOBER</span>
                        <span className="text-[#C5A059] font-light">|</span>
                        <span>2026</span>
                    </div>
                </div>

                {/* PLACE / VENUE */}
                <div className="space-y-1 pt-2">
                    <p className="text-xs uppercase tracking-[0.18em] font-sans font-semibold text-stone-800">
                        THE GOLDEN PALACE
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.15em] font-sans text-stone-500">
                        KUALA LUMPUR, MALAYSIA
                    </p>
                </div>

                {/* ACTION BUTTONS */}
                {/*<div className="space-y-2.5 pt-6 max-w-[280px] mx-auto font-sans text-xs">*/}
                {/*    /!* Main Call To Action *!/*/}
                {/*    <button*/}
                {/*        onClick={onOpen}*/}
                {/*        className="w-full py-3 px-4 bg-[#8C3A48] hover:bg-[#78303C] text-white font-medium uppercase tracking-wider rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"*/}
                {/*    >*/}
                {/*        <Calendar size={14} />*/}
                {/*        SAVE THE DATE*/}
                {/*    </button>*/}

                {/*    /!* Secondary Action Buttons *!/*/}
                {/*    <div className="grid grid-cols-2 gap-2.5">*/}
                {/*        <button className="py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-700 font-medium uppercase tracking-wider rounded-xl border border-stone-300 shadow-2xs flex items-center justify-center gap-1.5 transition-all cursor-pointer text-[11px]">*/}
                {/*            <MapPin size={13} className="text-[#8C3A48]" />*/}
                {/*            BUKA PETA*/}
                {/*        </button>*/}
                {/*        <button className="py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-700 font-medium uppercase tracking-wider rounded-xl border border-stone-300 shadow-2xs flex items-center justify-center gap-1.5 transition-all cursor-pointer text-[11px]">*/}
                {/*            <Mail size={13} className="text-[#8C3A48]" />*/}
                {/*            RSVP*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>

        </div>
    )
}