'use client'

import { useState } from 'react'
import { MessageSquare, Send } from "lucide-react";

const INITIAL_MESSAGES = [
    { id: 1, name: 'Mustaphar Kamal', relation: 'Sahabat SMA', text: 'Barakallah Hakimi & Ilyana! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Amin!', time: '10:15 AM' },
    { id: 2, name: 'Siti & Keluarga', relation: 'Keluarga', text: 'Selamat ya untuk kedua mempelai! Lancar sampai hari H.', time: '11:30 AM' },
    { id: 3, name: 'Adham', relation: 'Rekan Kerja', text: 'Congrats bro! Doa terbaik untuk kalian berdua.', time: '01:45 PM' },
]

export default function NotePageComponent() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES)
    const [nameInput, setNameInput] = useState('')
    const [msgInput, setMsgInput] = useState('')

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
        <div className="guestbook-card">

            {/* Guestbook Title */}
            <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                <MessageSquare size={18} className="text-[#4F7A62]" />
                <div>
                    <h3 className="font-serif text-base text-[#1A2E22] font-semibold">
                        Ucapan &amp; Doa Restu
                    </h3>
                    <p className="text-[11px] text-stone-500">
                        {messages.length} pesan dari keluarga &amp; teman
                    </p>
                </div>
            </div>

            {/* Chat Feed */}
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                {messages.map((item) => (
                    <div key={item.id} className="chat-bubble">
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
                    className="form-input"
                />
                <div className="relative flex items-center">
                    <textarea
                        rows={2}
                        placeholder="Tulis ucapan selamat..."
                        value={msgInput}
                        onChange={(e) => setMsgInput(e.target.value)}
                        className="form-input pr-10 resize-none"
                    />
                    <button type="submit" className="btn-submit-icon">
                        <Send size={13} />
                    </button>
                </div>
            </form>

        </div>
    )
}