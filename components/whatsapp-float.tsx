"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 left-6 z-[9998] group">
      <a
        href="https://wa.me/8801712345678"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[60px] h-[60px] bg-[#25d366] text-white rounded-full flex items-center justify-center text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 border-[3px] border-white hover:scale-110 hover:rotate-[10deg] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)]"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
      <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 bg-foreground text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2">
        WhatsApp করুন
      </div>
    </div>
  )
}
