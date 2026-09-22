'use client'

import { useState } from "react";
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

const GALLERY_IMAGES = [
    { id: 1, src: '/bride-groom-1.svg', alt: 'Hakimi & Ilyana Prewedding 1', caption: 'First Glance 🌸' },
    { id: 2, src: '/bride-groom-2.svg', alt: 'Hakimi & Ilyana Prewedding 2', caption: 'Two Hearts Entwined 💍' },
    { id: 3, src: '/bride-groom-3.svg', alt: 'Hakimi & Ilyana Prewedding 3', caption: 'Walking Down the Aisle ✨' },
]

export default function GalleryPageComponent() {
    const [images, setImages] = useState(GALLERY_IMAGES)

    const handleNextPhoto = () => {
        setImages((prev) => {
            const updated = [...prev]
            const topImage = updated.shift()
            if (topImage) updated.push(topImage)
            return updated
        })
    }

    return (
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
                            <div className="relative w-full h-full bg-stone-200">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="412px"
                                    className="object-cover"
                                />

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
    )
}