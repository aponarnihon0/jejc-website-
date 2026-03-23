"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Phone, X, Quote } from "lucide-react"

export function Hero() {
  const [showSpeechBubble, setShowSpeechBubble] = useState(true)

  return (
    <section className="pt-28 pb-24 bg-white relative overflow-hidden" id="home">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-6 px-5 py-2.5 bg-primary/[0.08] rounded-full border border-primary/10">
              <Award className="w-4 h-4" />
              <span>বাংলাদেশের #১ জাপান শিক্ষা প্রতিষ্ঠান</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
              বাংলাদেশ থেকে জাপানে পড়াশোনা:{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text">
                স্বপ্ন থেকে বাস্তবতা
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Japan Education and Job Center (JEJC) - বাংলাদেশের বিশ্বস্ত Japan Education Consultancy। Study in Japan
              from Bangladesh এর জন্য সম্পূর্ণ সহায়তা। JLPT N5, N4, N3 কোর্স, Japan Student Visa Processing, এবং
              পড়াশোনা শেষে Work in Japan এর সুযোগ। ১৫+ বছরের অভিজ্ঞতা এবং ১০০০+ সফল শিক্ষার্থীর সাথে আমরা আপনার জাপান
              যাওয়ার স্বপ্ন পূরণে প্রতিশ্রুতিবদ্ধ।
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full font-semibold text-base shadow-[0_10px_25px_rgba(215,21,24,0.2)] border border-white/10 transition-all hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(215,21,24,0.25)]"
              >
                <BookOpen className="w-5 h-5" />
                ভর্তির আবেদন করুন
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground rounded-full font-semibold text-base border border-border shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all hover:bg-muted hover:border-primary/20 hover:text-primary hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
              >
                <Phone className="w-5 h-5" />
                ফ্রি কনসাল্টেশন
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="https://i.postimg.cc/GhmCGK7Q/Screenshot-20260227-095355.jpg"
              alt="Mount Fuji - Study in Japan from Bangladesh - JEJC"
              width={600}
              height={450}
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              priority
            />

            {/* Speech Bubble */}
            {showSpeechBubble && (
              <div className="absolute -top-5 -right-5 sm:top-[-20px] sm:right-[-20px] bg-white p-5 px-6 rounded-2xl shadow-xl max-w-[280px] text-base font-semibold text-foreground border border-border animate-float">
                <button
                  onClick={() => setShowSpeechBubble(false)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs transition-all hover:bg-primary hover:text-white hover:rotate-90"
                  aria-label="Close"
                >
                  <X className="w-3 h-3" />
                </button>
                <Quote className="inline w-4 h-4 text-primary mr-2" />
                জাপানে পড়াশোনার স্বপ্ন এখনই বাস্তব করে তুলুন!
                <Quote className="inline w-4 h-4 text-primary ml-2 rotate-180" />
                {/* Triangle */}
                <div className="absolute -bottom-2.5 left-[30px] w-5 h-5 bg-white rotate-45 border-b border-r border-border" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
