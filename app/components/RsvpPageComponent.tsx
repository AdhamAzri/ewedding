'use client'

import React, { useState } from 'react'
import {HeartHandshake, User, Users, Send, X, Loader2} from 'lucide-react'

interface RsvpComponentProps {
    isOpen: boolean
    onClose: () => void
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWuiSr6jE2r7RSOsYtHq0JaIh8__rrxkJFC7JmPpqwWj4LtJIYi0GDcvKC4Rm_T4An/exec'

export default function RsvpComponent({ isOpen, onClose }: RsvpComponentProps) {
    const [name, setName] = useState('')
    const [attendance, setAttendance] = useState('Hadir')
    const [guestCount, setGuestCount] = useState('1 orang')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    if (!isOpen) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if(!name.trim()){
            alert('Mohon isi nama lengkap.')
            return
        }

        setIsLoading(true)

        try{
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    name: name,
                    attendance: attendance,
                    guestCount: guestCount,
                    message: message
                }),
            })

            alert ('Terima kasih kerana mengisi. Jumpa anda di Majlis!')

            setName('')
            setAttendance('Hadir')
            setGuestCount('1 Orang')
            setMessage('')

            onClose()
        }catch(error) {
            console.error('Error submitting  RSVP: ', error)
            alert('Gagal mengirim konfirmasi.')
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-card">

                {/* Close Button */}
                <button onClick={onClose} className="modal-close-btn">
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
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">

                    {/* Name Input */}
                    <div className="space-y-1">
                        <label className="text-stone-600 font-medium">Nama Lengkap Tamu</label>
                        <div className="relative flex items-center">
                            <User size={16} className="absolute left-3 text-[#4A6B58]" />
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Contoh: Mustaphar Kamal"
                                className="rsvp-field-input"
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
                                    className={`rsvp-option-btn ${
                                        attendance === option.id
                                            ? 'rsvp-option-active'
                                            : 'rsvp-option-inactive'
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
                            <select
                                value={guestCount}
                                onChange={(e) => setGuestCount(e.target.value)}
                                className="rsvp-field-select"
                            >
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
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tuliskan ucapan atau catatan kedatangan Anda di sini..."
                            className="rsvp-field-textarea"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-rsvp pt-2.5 flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={14} className="animate-spin" />
                                Menghantar...
                            </>
                        ):(
                            <>
                                <Send size={14}/>
                                Hantar Konfirmasi Kehadiran
                            </>
                        )}
                    </button>
                </form>

            </div>
        </div>
    )
}