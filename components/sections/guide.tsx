import Image from "next/image"
import { GraduationCap, FileText, Briefcase, TrendingUp, Home, Building2, BookOpen, Sparkles } from "lucide-react"

const guideItems = [
  {
    icon: GraduationCap,
    title: "উচ্চশিক্ষার সুযোগ",
    description:
      "জাপানে বিশ্বমানের শিক্ষা প্রতিষ্ঠানে পড়ার সুযোগ। টেকনোলজি থেকে আর্টস—সব বিষয়ে পড়াশোনার দরজা খোলা।",
  },
  {
    icon: FileText,
    title: "ভাষা কোর্স ও JLPT",
    description:
      "জাপানি ভাষা কোর্স JLPT N5 থেকে N1 পর্যন্ত। দক্ষ শিক্ষকদের তত্ত্বাবধানে জাপানি ভাষা শিখুন।",
  },
  {
    icon: Briefcase,
    title: "পার্ট-টাইম জব",
    description:
      "পড়াশোনার পাশাপাশি সপ্তাহে ২৮ ঘন্টা কাজ করার সুযোগ। মাসে ৮০,০০০ থেকে ১,২০,০০০ ইয়েন আয় করুন।",
  },
  {
    icon: TrendingUp,
    title: "ক্যারিয়ার গ্রোথ",
    description:
      "পড়াশোনা শেষে জাপানে চাকরির সুযোগ। বিভিন্ন মাল্টিন্যাশনাল কোম্পানিতে কাজের দরজা খোলা।",
  },
  {
    icon: Home,
    title: "থাকা-খাওয়ার ব্যবস্থা",
    description:
      "সাশ্রয়ী মূল্যে ডরমিটরি ও হোস্টেল। মাসিক ৩০,০০০ থেকে ৫০,০০০ ইয়েনে আরামদায়ক থাকার ব্যবস্থা।",
  },
  {
    icon: Building2,
    title: "স্কলারশিপ সুযোগ",
    description:
      "MEXT, JASSO সহ বিভিন্ন স্কলারশিপের সুযোগ। মেধাবী শিক্ষার্থীদের জন্য আর্থিক সহায়তা।",
  },
]

export function Guide() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden" id="guide">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag mx-auto">
            <BookOpen className="w-4 h-4" />
            সম্পূর্ণ গাইড
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            জাপানে পড়াশোনার <span className="text-primary">সম্পূর্ণ গাইড</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Study in Japan from Bangladesh - জাপানে পড়াশোনার প্রতিটি ধাপে আমরা আপনার পাশে। এখানে জানুন জাপানে শিক্ষা,
            কাজ এবং জীবনযাপনের সব তথ্য।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-border shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(215,21,24,0.12)] hover:border-primary/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:shadow-[0_10px_25px_rgba(215,21,24,0.2)]">
                <item.icon className="w-7 h-7 text-primary transition-colors group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 transition-colors group-hover:text-primary">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-[15px]">{item.description}</p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute top-0 right-0 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative image */}
        <div className="mt-16 text-center">
          <Image
            src="https://i.postimg.cc/VkPJ4VTm/japan-pattern-3.png"
            alt="Japanese pattern decoration"
            width={150}
            height={40}
            className="mx-auto opacity-50"
          />
        </div>
      </div>
    </section>
  )
}
