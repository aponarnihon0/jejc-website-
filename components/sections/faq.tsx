"use client"

import { useState } from "react"
import { HelpCircle, ChevronDown, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "জাপানে পড়াশোনার জন্য কী কী যোগ্যতা প্রয়োজন?",
    answer:
      "জাপানে পড়াশোনার জন্য সাধারণত HSC/উচ্চ মাধ্যমিক পাস হতে হয়। এছাড়া JLPT N5 বা তার উপরের লেভেল থাকলে ভালো। ভাষা জানা না থাকলেও Language School এ ভর্তি হওয়া যায়। আমরা JEJC তে আপনাকে শুরু থেকে প্রস্তুত করে দিই।",
  },
  {
    question: "জাপানে পড়াশোনার মোট খরচ কত?",
    answer:
      "প্রথম বছরের জন্য সাধারণত ৮-১২ লাখ টাকা খরচ হয় যার মধ্যে টিউশন ফি, ভিসা ফি, এয়ার টিকেট এবং প্রাথমিক থাকা-খাওয়া অন্তর্ভুক্ত। পার্ট-টাইম জব করে পরবর্তী খরচ চালানো সম্ভব। Cost of Studying in Japan সম্পর্কে বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।",
  },
  {
    question: "ভিসা পেতে কতদিন সময় লাগে?",
    answer:
      "COE (Certificate of Eligibility) পেতে ২-৪ মাস এবং তারপর ভিসা পেতে আরও ১-২ সপ্তাহ সময় লাগে। সম্পূর্ণ প্রক্রিয়ায় ৬-৮ মাস আগে থেকে প্রস্তুতি শুরু করা উচিত। Japan Student Visa Requirements পূরণে আমরা সম্পূর্ণ সহায়তা করি।",
  },
  {
    question: "পার্ট-টাইম জব করে কত আয় করা যায়?",
    answer:
      "Student Visa তে সপ্তাহে ২৮ ঘণ্টা পর্যন্ত Part-time Job করা যায়। ছুটির সময় দিনে ৮ ঘণ্টা পর্যন্ত কাজ করা যায়। এতে মাসে ৮০,০০০-১,২০,০০০ ইয়েন (৫০,০০০-৮০,০০০ টাকা) আয় সম্ভব।",
  },
  {
    question: "পড়াশোনা শেষে কি জাপানে থাকা যায়?",
    answer:
      "হ্যাঁ, পড়াশোনা শেষে Work in Japan After Study এর সুযোগ আছে। জাপানে চাকরি পেলে Work Visa তে কনভার্ট করা যায়। বর্তমানে জাপানে দক্ষ কর্মীর চাহিদা অনেক বেশি।",
  },
  {
    question: "JEJC এর সাথে কেন যোগাযোগ করব?",
    answer:
      "JEJC বাংলাদেশের অন্যতম বিশ্বস্ত Japan Education Consultancy। ১৫+ বছরের অভিজ্ঞতা, ১০০০+ সফল শিক্ষার্থী এবং ৯৮% ভিসা সাফল্যের হার। আমরা ভর্তি থেকে শুরু করে জাপানে যাওয়া পর্যন্ত সম্পূর্ণ সহায়তা প্রদান করি।",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-muted relative overflow-hidden" id="faq">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-tag mx-auto">
            <HelpCircle className="w-4 h-4" />
            প্রশ্নোত্তর
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            সচরাচর <span className="text-primary">জিজ্ঞাসা</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            জাপানে পড়াশোনা সম্পর্কে সাধারণ প্রশ্নের উত্তর। আরও প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-2xl border transition-all duration-300",
                openIndex === index
                  ? "border-primary/20 shadow-[0_10px_30px_-10px_rgba(215,21,24,0.12)]"
                  : "border-border shadow-[0_4px_15px_rgba(0,0,0,0.03)]"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-foreground pr-8 text-lg">{faq.question}</span>
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all",
                    openIndex === index
                      ? "bg-primary text-white rotate-180"
                      : "bg-muted text-foreground"
                  )}
                >
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
