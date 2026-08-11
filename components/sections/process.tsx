import { Route, UserPlus, BookOpen, FileText, FileCheck, Plane, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    number: "০১",
    title: "রেজিস্ট্রেশন",
    description: "আমাদের অফিসে এসে বা অনলাইনে রেজিস্ট্রেশন করুন। ফ্রি কাউন্সেলিং নিন।",
  },
  {
    icon: BookOpen,
    number: "০২",
    title: "ভাষা কোর্স",
    description: "JLPT N5/N4 লেভেল পাস করুন। দক্ষ শিক্ষকদের তত্ত্বাবধানে জাপানি শিখুন।",
  },
  {
    icon: FileText,
    number: "০৩",
    title: "ডকুমেন্ট প্রস্তুতি",
    description: "প্রয়োজনীয় সকল কাগজপত্র প্রস্তুত ও যাচাই। আমরা সম্পূর্ণ সহায়তা করি।",
  },
  {
    icon: FileCheck,
    number: "০৪",
    title: "COE আবেদন",
    description: "জাপানে Certificate of Eligibility (COE) এর জন্য আবেদন করা হয়।",
  },
  {
    icon: Plane,
    number: "০৫",
    title: "ভিসা প্রসেসিং",
    description: "COE পাওয়ার পর জাপান দূতাবাসে ভিসার জন্য আবেদন করুন।",
  },
  {
    icon: CheckCircle,
    number: "০৬",
    title: "জাপানে যাত্রা",
    description: "ভিসা পাওয়ার পর জাপানে যাত্রা। এয়ারপোর্ট পিকআপ ও থাকার ব্যবস্থা।",
  },
]

export function Process() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden" id="process">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag mx-auto">
            <Route className="w-4 h-4" />
            প্রক্রিয়া
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            জাপানে যাওয়ার <span className="text-primary">সহজ প্রক্রিয়া</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            ৬টি সহজ ধাপে আপনার জাপান যাওয়ার স্বপ্ন পূরণ করুন। প্রতিটি ধাপে আমরা আপনার পাশে।
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && index !== 2 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%+16px)] w-[calc(100%-32px)] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="bg-white rounded-2xl p-8 border border-border shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(215,21,24,0.12)] hover:border-primary/20 h-full">
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:shadow-[0_10px_25px_rgba(215,21,24,0.2)]">
                  <step.icon className="w-7 h-7 text-primary transition-colors group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 transition-colors group-hover:text-primary">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-[15px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
