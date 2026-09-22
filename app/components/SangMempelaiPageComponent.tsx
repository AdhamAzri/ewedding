'use client'

import { motion } from 'framer-motion'
import GalleryPageComponent from "@/app/components/GalleryPageComponent";
import NotePageComponent from "@/app/components/NotePageComponent";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: customDelay, ease: 'easeOut' }
    })
}

export default function SangMempelaiPageComponent() {
    return (
        <section id="mempelai" className="w-full space-y-8 pb-6">

            {/* SECTION HEADER */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                custom={0}
                className="text-center space-y-2"
            >
                <span className="badge-green">PASANGAN BERBAHAGIA</span>
                <h2 className="section-title">Sang Mempelai</h2>
            </motion.div>

            {/* GROOM & BRIDE PROFILES */}
            <div className="space-y-4">
                {/* Groom Profile */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.1}
                    className="mempelai-card"
                >
                    <div className="mempelai-avatar-groom">♂</div>
                    <h3 className="font-serif text-lg text-[#1A2E22] font-semibold">Muhammad Alif Hakimi</h3>
                    <p className="text-[11px] text-[#4F7A62] font-semibold tracking-wider uppercase">Pengantin Lelaki</p>
                    <p className="text-xs text-stone-500 leading-relaxed">Putra Pertama En. Mohd Zalif &amp; Pn. Nurul Zafirah</p>
                </motion.div>

                {/* Bride Profile */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    custom={0.2}
                    className="mempelai-card"
                >
                    <div className="mempelai-avatar-bride">♀</div>
                    <h3 className="font-serif text-lg text-[#1A2E22] font-semibold">Nur Ilyana</h3>
                    <p className="text-[11px] text-[#9E4A56] font-semibold tracking-wider uppercase">Pengantin Wanita</p>
                    <p className="text-xs text-stone-500 leading-relaxed">Putri Bungsu En. Muhammad Alif Haikal &amp; Pn. Siti Nur Fatimah</p>
                </motion.div>
            </div>

            {/* INTERACTIVE GALLERY */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                custom={0.3}
            >
                <GalleryPageComponent/>
            </motion.div>

            {/* GUESTBOOK NOTES */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                custom={0.4}
            >
                <NotePageComponent/>
            </motion.div>
        </section>
    )
}