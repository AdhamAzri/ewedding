// src/app/components/RsvpComponent.tsx
'use client'

import { useState } from 'react'
import { HeartHandshake, User, Users, Send, X } from 'lucide-react'

interface RsvpComponentProps {
    isOpen: boolean
    onClose: () => void
}

export default function RsvpComponent({ isOpen, onClose }: RsvpComponentProps) {
    const [attendance, setAttendance] = useState('Hadir')

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
            <div className="bg-white w-full max-w-[380px] rounded-2xl p-6 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-all cursor-pointer"
                >
                    <X size={18} />
                </button>

                {/* Header */}
                <div>
                    <h3 className="font-serif text-lg text-[#1A2E22] font-semibold flex items-center gap-2">
                        <HeartHandshake size={18} className="text-[#4A6B58]" />
                        Buku Tamu Digital
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Mohon mengisi formulir berikut untuk mempermudah penataan akomodasi jamuan kami.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-xs">

                    {/* Name Input */}
                    <div className="space-y-1">
                        <label className="text-stone-600 font-medium">Nama Lengkap Tamu</label>
                        <div className="relative flex items-center">
                            <User size={16} className="absolute left-3 text-[#4A6B58]" />
                            <input
                                type="text"
                                placeholder="Contoh: Mustaphar Kamal"
                                className="w-full pl-9 pr-3 py-2.5 bg-[#EBF7F1] text-stone-800 rounded-xl border border-transparent focus:border-[#4A6B58] outline-none transition-all placeholder:text-stone-400"
                            />
                        </div>
                    </div>

                    {/* Attendance Selection */}
                    <div className="space-y-1">
                        <label className="text-stone-600 font-medium">Kesediaan Hadir</label>
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                { id: 'Hadir', label: 'Hadir' },
                                { id: 'Ragu', label: 'Masih Ragu' },
                                { id: 'Tidak', label: 'Tidak Hadir' }
                            ].map((option) => (
                                <button
                                    type="button"
                                    key={option.id}
                                    onClick={() => setAttendance(option.id)}
                                    className={`py-2 px-1 rounded-xl font-medium transition-all cursor-pointer border text-[11px] ${
                                        attendance === option.id
                                            ? 'bg-[#4A6B58] text-white border-[#4A6B58]'
                                            : 'bg-[#EBF7F1] text-stone-600 border-transparent hover:border-[#4A6B58]/30'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Guest Count Dropdown */}
                    <div className="space-y-1">
                        <label className="text-stone-600 font-medium">Jumlah Tamu</label>
                        <div className="relative flex items-center">
                            <Users size={16} className="absolute left-3 text-[#4A6B58]" />
                            <select className="w-full pl-9 pr-3 py-2.5 bg-[#EBF7F1] text-stone-800 rounded-xl border border-transparent focus:border-[#4A6B58] outline-none transition-all appearance-none cursor-pointer">
                                <option>1 Orang</option>
                                <option>2 Orang (Bersama Pasangan)</option>
                                <option>3 Orang atau Lebih</option>
                            </select>
                        </div>
                    </div>

                    {/* Note / Message TextArea */}
                    <div className="space-y-1">
                        <label className="text-stone-600 font-medium">Catatan atau Ucapan Singkat</label>
                        <textarea
                            rows={3}
                            placeholder="Tuliskan ucapan atau catatan kedatangan Anda di sini..."
                            className="w-full p-3 bg-[#EBF7F1] text-stone-800 rounded-xl border border-transparent focus:border-[#4A6B58] outline-none transition-all placeholder:text-stone-400 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={onClose}
                        className="w-full py-3 bg-[#4A6B58] hover:bg-[#3D5949] text-white font-medium text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer pt-2.5"
                    >
                        <Send size={14} />
                        Kirim Konfirmasi Kehadiran
                    </button>
                </form>

            </div>
        </div>
    )
}