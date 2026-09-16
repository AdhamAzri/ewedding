'use client'


export default function MainPageComponent(){
    return (
        <section id="main" className="h-[88vh] w-full flex flex-col items-center justify-center text-center pt-6 text-[#1A1A1A]">
            <h1 className="pb-4">بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</h1>

            {/*<div className="max-h-50vh h-screen w-full flex flex-col items-center justify-center text-center p-6 text-white bg-white rounded-2xl ">*/}
            {/*    <p className="text-sm mt-2 text-[#1A1A1A]">*/}
            {/*        Dengan penuh kesyukuran ke hadrat Ilahi*/}
            {/*        kami dengan sukacitanya menjemput*/}
            {/*        Dato'/Datin/Tuan/Puan/Encik/Cik*/}
            {/*        ke Majlis Perkahwinan Putera & Puteri kami*/}
            {/*    </p>*/}
            {/*    <h3 className="font-serif text-2xl text-[#1A1A1A]">Ali bin Abdullah</h3>*/}
            {/*    <h3 className="font-serif text-2xl text-[#1A1A1A]">Sarah binti Mohamad Zulkarnain</h3>*/}

            {/*</div>*/}

            <div className="max-h-50vh h-screen w-full flex flex-col items-center justify-center text-center p-6 text-white bg-white rounded-2xl space-y-6 border shadow-sm">
                {/*<div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-stone-100 text-stone-800 space-y-6 text-center">*/}

                {/* SALAM & SALUTATION */}
                <div className="space-y-1">
                    <p className="font-serif italic text-xs text-[#8C535D] tracking-wide">
                        Assalamualaikum W.B.T &amp; Salam Sejahtera
                    </p>
                </div>

                {/* HOST / PARENTS NAMES */}
                <div className="space-y-1 text-xs">
                    <p className="text-stone-500 uppercase tracking-widest text-[10px]">Kami</p>
                    <p className="font-semibold text-stone-900 tracking-wide">
                        MUHAMMAD ALIF HAIKAL BIN IZZUDDIN
                    </p>
                    <p className="font-serif italic text-[#8C535D]">&amp;</p>
                    <p className="font-semibold text-stone-900 tracking-wide">
                        NUR SITI FATIMAH BINTI KAMAL
                    </p>
                </div>

                <p className="text-stone-500 uppercase tracking-widest text-[10px] mb-[24px]">Bersama</p>

                {/* CO-HOST / CO-PARENTS NAMES */}

                <div className="space-y-1 text-xs">
                    <p className="font-semibold text-stone-900 tracking-wide">
                        MOHD ZALIF BIN MOHD ZULKARNAIN
                    </p>
                    <p className="font-serif italic text-[#8C535D]">&amp;</p>
                    <p className="font-semibold text-stone-900 tracking-wide">
                        NURUL ZAFIRAH BINTI KAMARUDIN
                    </p>
                </div>

                {/* INVITATION STATEMENT */}
                <div className="space-y-2">
                    <p className="text-[11px] text-stone-600 leading-relaxed px-2">
                        Dengan penuh kesyukuran ke hadrat Ilahi, kami dengan berbesar hati dan sukacitanya menjemput:
                    </p>
                    <p className="font-serif italic text-xs text-[#4F7A62] bg-[#EBF7F1] py-1.5 px-3 rounded-full inline-block">
                        YB / Tan Sri / Puan Sri / Datuk / Datin / Tuan / Puan / Encik / Cik
                    </p>
                </div>

                {/* DIVIDER */}
                <div className="flex items-center justify-center gap-2">
                    <div className="h-[1px] w-12 bg-stone-200" />
                    <span className="text-stone-400 text-xs">❖</span>
                    <div className="h-[1px] w-12 bg-stone-200" />
                </div>

                {/* BRIDE & GROOM NAMES */}
                <div className="space-y-2">
                    <p className="font-serif italic text-xs text-[#8C535D]">
                        Ke Majlis Perkahwinan Puteri & Putera Kami
                    </p>

                    <div className="space-y-1 text-sm font-semibold text-[#1A2E22]">
                        <p className="tracking-wide">NUR ILYANA BINTI MUHAMMAD ALIF HAIKAL</p>
                        <p className="font-serif italic text-xs text-[#8C535D] font-normal">&amp;</p>
                        <p className="tracking-wide">MUHAMMAD ALIF HAKIMI BIN MOHD ZALIF</p>
                    </div>
                </div>

            </div>

            <p className="text-xs text-[#1A1A1A] mt-8 animate-bounce">Scroll down ↓</p>
        </section>
    )
}

// src/app/components/KadJemputanComponent.tsx
// 'use client'
//
// import { MapPin, Clock, QrCode } from 'lucide-react'
//
// export default function MainPageComponent() {
//     return (
//
//         <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-stone-100 text-stone-800 space-y-6 text-center">
//
//             <h1 className="pb-4">بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</h1>
//
//             {/* SALAM & SALUTATION */}
//             <div className="space-y-1">
//                 <p className="font-serif italic text-xs text-[#8C535D] tracking-wide">
//                     Assalamualaikum W.B.T &amp; Salam Sejahtera
//                 </p>
//             </div>
//
//             {/* HOST / PARENTS NAMES */}
//             <div className="space-y-1 text-xs">
//                 <p className="text-stone-500 uppercase tracking-widest text-[10px]">Kami</p>
//                 <p className="font-semibold text-stone-900 tracking-wide">
//                     MUHAMMAD ALIF HAIKAL BIN IZZUDDIN
//                 </p>
//                 <p className="font-serif italic text-[#8C535D]">&amp;</p>
//                 <p className="font-semibold text-stone-900 tracking-wide">
//                     NUR SITI FATIMAH BINTI KAMAL
//                 </p>
//             </div>
//
//             <p className="text-stone-500 uppercase tracking-widest text-[10px] m-4">Bersama</p>
//
//             {/* CO-HOST / CO-PARENTS NAMES */}
//
//             <div className="space-y-1 text-xs">
//                 <p className="font-semibold text-stone-900 tracking-wide">
//                     MUHAMMAD ALIF HAIKAL BIN IZZUDDIN
//                 </p>
//                 <p className="font-serif italic text-[#8C535D]">&amp;</p>
//                 <p className="font-semibold text-stone-900 tracking-wide">
//                     NUR SITI FATIMAH BINTI KAMAL
//                 </p>
//             </div>
//
//             {/* INVITATION STATEMENT */}
//             <div className="space-y-2">
//                 <p className="text-[11px] text-stone-600 leading-relaxed px-2">
//                     Dengan penuh kesyukuran ke hadrat Ilahi, kami dengan berbesar hati dan sukacitanya menjemput:
//                 </p>
//                 <p className="font-serif italic text-xs text-[#4F7A62] bg-[#EBF7F1] py-1.5 px-3 rounded-full inline-block">
//                     YB / Tan Sri / Puan Sri / Datuk / Datin / Tuan / Puan / Encik / Cik
//                 </p>
//             </div>
//
//             {/* DIVIDER */}
//             <div className="flex items-center justify-center gap-2">
//                 <div className="h-[1px] w-12 bg-stone-200" />
//                 <span className="text-stone-400 text-xs">❖</span>
//                 <div className="h-[1px] w-12 bg-stone-200" />
//             </div>
//
//             {/* BRIDE & GROOM NAMES */}
//             <div className="space-y-2">
//                 <p className="font-serif italic text-xs text-[#8C535D]">
//                     Ke Majlis Perkahwinan Puteri Kami
//                 </p>
//
//                 <div className="space-y-1 text-sm font-semibold text-[#1A2E22]">
//                     <p className="tracking-wide">NUR ILYANA BINTI MUHAMMAD ALIF HAIKAL</p>
//                     <p className="font-serif italic text-xs text-[#8C535D] font-normal">&amp;</p>
//                     <p className="tracking-wide">MUHAMMAD ALIF HAKIMI BIN MOHD ZALIF</p>
//                 </div>
//             </div>
//
//             {/* EVENT DETAILS GRID */}
//             {/*<div className="grid grid-cols-1 gap-3 pt-2 text-left bg-[#EBF7F1]/50 p-4 rounded-xl border border-[#D8F3E5]">*/}
//
//             {/*    /!* TIME *!/*/}
//             {/*    <div className="flex items-start gap-2.5 text-xs">*/}
//             {/*        <Clock size={16} className="text-[#4F7A62] shrink-0 mt-0.5" />*/}
//             {/*        <div>*/}
//             {/*            <p className="font-semibold text-stone-900 uppercase text-[10px] tracking-wider">*/}
//             {/*                Aturcara Majlis*/}
//             {/*            </p>*/}
//             {/*            <p className="text-stone-700 font-medium">11:00 TENGAH HARI - 4:00 PETANG</p>*/}
//             {/*        </div>*/}
//             {/*    </div>*/}
//
//             {/*    /!* LOCATION *!/*/}
//             {/*    <div className="flex items-start gap-2.5 text-xs">*/}
//             {/*        <MapPin size={16} className="text-[#4F7A62] shrink-0 mt-0.5" />*/}
//             {/*        <div>*/}
//             {/*            <p className="font-semibold text-stone-900 uppercase text-[10px] tracking-wider">*/}
//             {/*                Lokasi Majlis*/}
//             {/*            </p>*/}
//             {/*            <p className="text-stone-700 font-medium leading-tight">*/}
//             {/*                NO 99 KG BECHAH TOKAR 17500<br />*/}
//             {/*                TANAH MERAH, KELANTAN*/}
//             {/*            </p>*/}
//             {/*        </div>*/}
//             {/*    </div>*/}
//
//             {/*</div>*/}
//
//             {/*/!* CLOSING STATEMENT *!/*/}
//             {/*<p className="text-[11px] text-stone-600 uppercase tracking-wider leading-relaxed px-2">*/}
//             {/*    Semoga dengan kehadiran para tetamu sekalian akan menyerikan lagi majlis kami*/}
//             {/*</p>*/}
//
//             {/*/!* QR CODE SECTION *!/*/}
//             {/*<div className="pt-2 flex flex-col items-center gap-1.5">*/}
//             {/*    <div className="p-2 bg-white rounded-xl shadow-md border border-stone-200">*/}
//             {/*        <QrCode size={64} className="text-stone-800" />*/}
//             {/*    </div>*/}
//             {/*    <p className="text-[10px] text-stone-500 italic">*/}
//             {/*        Scan untuk ke lokasi majlis*/}
//             {/*    </p>*/}
//             {/*</div>*/}
//
//         </div>
//     )
// }