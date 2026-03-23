"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "জাপানে পড়াশোনার জন্য কী কী যোগ্যতা প্রয়োজন?",
    answer: "জাপানে পড়াশোনার জন্য সাধারণত HSC/উচ্চ মাধ্যমিক পাস হতে হয়। এছাড়া JLPT N5 বা তার উপরের লেভেল থাকলে ভালো। ভাষা জানা না থাকলেও Language School এ ভর্তি হওয়া যায়।",
  },
  {
    question: "জাপানে পড়াশোনার খরচ কত?",
    answer: "প্রথম বছরের জন্য সাধারণত ৮-১২ লাখ টাকা খরচ হয় যার মধ্যে টিউশন ফি, ভিসা ফি, এয়ার টিকেট এবং প্রাথমিক থাকা-খাওয়া অন্তর্ভুক্ত। পার্ট-টাইম জব করে পরবর্তী খরচ চালানো যায়।",
  },
  {
    question: "ভিসা পেতে কতদিন সময় লাগে?",
    answer: "COE (Certificate of Eligibility) পেতে ২-৪ মাস এবং তারপর ভিসা পেতে আরও ১-২ সপ্তাহ সময় লাগে। সম্পূর্ণ প্রক্রিয়ায় ৬-৮ মাস আগে থেকে প্রস্তুতি শুরু করা উচিত।",
  },
  {
    question: "পার্ট-টাইম জব করা যাবে কি?",
    answer: "হ্যাঁ, Student Visa তে সপ্তাহে ২৮ ঘণ্টা পর্যন্ত পার্ট-টাইম কাজ করা যায়। ছুটির সময় দিনে ৮ ঘণ্টা পর্যন্ত কাজ করা যায়। এতে মাসে ৮০,০০০-১,২০,০০০ ইয়েন আয় সম্ভব।",
  },
  {
    question: "JEJC এর ফি কত?",
    answer: "আমাদের সার্ভিস চার্জ এবং প্যাকেজ সম্পর্কে বিস্তারিত জানতে ফ্রি কাউন্সেলিং বুক করুন। আমরা আপনার প্রোফাইল অনুযায়ী সেরা অপশন সাজেস্ট করব।",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            সচরাচর জিজ্ঞাসা
          </h2>
          <p className="text-muted-foreground text-lg">
            জাপানে পড়াশোনা সম্পর্কে সাধারণ প্রশ্নের উত্তর
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary flex-shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
