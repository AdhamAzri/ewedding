'use client'

import React, {useEffect, useState} from 'react'
import { Loader2, MessageSquare, Send, User } from 'lucide-react'

const INITIAL_MESSAGES = [
    { id: 1, name: 'Mustaphar Kamal', relation: 'Sahabat SMA', text: 'Barakallah Hakimi & Ilyana! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Amin!', time: '10:15 AM' },
    { id: 2, name: 'Siti & Keluarga', relation: 'Keluarga', text: 'Selamat ya untuk kedua mempelai! Lancar sampai hari H.', time: '11:30 AM' },
    { id: 3, name: 'Adham', relation: 'Rekan Kerja', text: 'Congrats bro! Doa terbaik untuk kalian berdua.', time: '01:45 PM' },
]

interface GuestNote {
    name: string
    message: string
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWuiSr6jE2r7RSOsYtHq0JaIh8__rrxkJFC7JmPpqwWj4LtJIYi0GDcvKC4Rm_T4An/exec'

export default function NotePageComponent() {
    // const [messages, setMessages] = useState(INITIAL_MESSAGES)
    // const [nameInput, setNameInput] = useState('')
    // const [msgInput, setMsgInput] = useState('')

    const [notes, setNotes] = useState<GuestNote[]>([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const fetchNotes = async () => {
        try{
            const res = await fetch(GOOGLE_SCRIPT_URL)
            const data = await res.json()
            if (data.result === 'success'){
                setNotes(data.data)
            }
        }catch (error){
            console.error('Gagal untuk tarik mesej tetamu: ', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim() || !message.trim()) return

        setLoading(true)

        try{
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    name: name,
                    message: message
                }),
            })

            alert ('Terima kasih kerana mengisi. Jumpa anda di Majlis!')

            setName('')
            setMessage('')

        }catch(error) {
            console.error('Error submitting  RSVP: ', error)
            alert('Gagal mengirim konfirmasi.')
        }finally {
            setLoading(false)
        }
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
                        {notes.length} pesan dari keluarga &amp; teman
                    </p>
                </div>
            </div>

            {/* Chat Feed */}
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                {/*{messages.map((item) => (*/}
                {/*    <div key={item.id} className="chat-bubble">*/}
                {/*        <div className="flex justify-between items-center text-[11px]">*/}
                {/*            <span className="font-semibold text-[#1A2E22]">{item.name}</span>*/}
                {/*            <span className="text-[10px] text-stone-400">{item.time}</span>*/}
                {/*        </div>*/}
                {/*        <p className="text-xs text-stone-700 leading-relaxed">*/}
                {/*            {item.text}*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*))}*/}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-8 text-stone-400 gap-2">
                        <Loader2 size={20} className="animate-spin text-[#4A6B58]" />
                        <p className="text-xs">Memuat ucapan tamu...</p>
                    </div>
                ): notes.length === 0 ? (
                    <p className="text-center text-xs text-stone-400 py-6">
                        Belum ada ucapan. Jadilah yang pertama memberikan ucapan!
                    </p>
                ) : (
                    notes.map((note, index) => (
                        <div
                            key={index}
                            className="p-3 bg-[#FAF8F5] rounded-xl border border-stone-100/80 space-y-1.5"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#EBF7F1] flex items-center justify-center text-[#4A6B58]">
                                        <User size={12} />
                                    </div>
                                    <span className="font-medium text-xs text-[#1A2E22]">
                                        {note.name}
                                    </span>
                                </div>

                                {/*<span className={`text-[10px] px-2 py-0.5 rounded-full ${*/}
                                {/*    note.attendance === 'Hadir'*/}
                                {/*        ? 'bg-emerald-50 text-emerald-700 font-medium'*/}
                                {/*        : 'bg-stone-100 text-stone-500'*/}
                                {/*}`}>*/}
                                {/*    {note.attendance}*/}
                                {/*</span>*/}
                            </div>

                            <p className="text-xs text-stone-600 leading-relaxed pl-8">
                                &#34;{note.message}&#34;
                            </p>
                        </div>
                    ))
                )

                }
            </div>

            {/* Message Input Box */}
            <form onSubmit={handleSendMessage} className="space-y-2 pt-2 border-t border-stone-100">
                <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                />
                <div className="relative flex items-center">
                    <textarea
                        rows={3}
                        placeholder="Tulis ucapan selamat..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-input pr-10 resize-none"
                    />
                    {/*<button type="submit" className="btn-submit-icon">*/}
                    {/*    <Send size={13} />*/}
                    {/*</button>*/}

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-submit-icon flex items-center gap-1.5 px-3 py-1.5 bg-[#4F7A62] text-white rounded-lg text-xs"
                    >
                        {loading ? (
                            <>
                                <Loader2 size={14} className="animate-spin" />
                                Menghantar...
                            </>
                        ):(
                            <>
                                <Send size={13}/>
                                {/*Hantar Konfirmasi Kehadiran*/}
                            </>
                        )}
                    </button>
                </div>
            </form>

        </div>
    )
}