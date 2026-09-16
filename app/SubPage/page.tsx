'use client'

export default function SubPages() {
    return (
        <div className="w-full flex flex-col">
            {/* Save The Date Card */}
            <section id="save-the-date" className="min-h-screen w-full flex items-center justify-center p-6">
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl w-full text-center shadow-lg text-stone-800">
                    <h3 className="font-serif text-2xl">Save The Date</h3>
                    <p className="text-sm mt-2">Saturday, 24 October 2026</p>
                    <p className="text-xs text-stone-600 mt-1">The Golden Palace, KL</p>
                </div>
            </section>

            {/* RSVP Form */}
            <section id="rsvp" className="min-h-screen w-full flex items-center justify-center p-6">
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl w-full text-center shadow-lg text-stone-800">
                    <h3 className="font-serif text-2xl">RSVP</h3>
                    <p className="text-sm mt-2">Will you join us?</p>
                </div>
            </section>
        </div>
    )
}