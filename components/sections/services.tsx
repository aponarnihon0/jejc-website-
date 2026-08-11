import Link from "next/link"
import {
  Settings,
  GraduationCap,
  FileCheck,
  Languages,
  Briefcase,
  Building2,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "জাপানে উচ্চশিক্ষা",
    description:
      "Language School, Vocational College (SSW), University ও Graduate School এ ভর্তির সম্পূর্ণ সহায়তা। Study in Japan from Bangladesh এর জন্য সেরা গাইডলাইন।",
    href: "/study-in-japan",
  },
  {
    icon: FileCheck,
    title: "ভিসা প্রসেসিং",
    description:
      "Japan Student Visa Requirements পূরণে সম্পূর্ণ সহায়তা। COE Application থেকে ভিসা স্ট্যাম্পিং পর্যন্ত প্রতিটি ধাপে পাশে থাকি।",
    href: "/visa",
  },
  {
    icon: Languages,
    title: "জাপানি ভাষা কোর্স",
    description:
      "JLPT N5, N4, N3 কোর্স দক্ষ শিক্ষকদের তত্ত্বাবধানে। Japanese Language Course Bangladesh এর জন্য সেরা প্রতিষ্ঠান।",
    href: "/courses",
  },
  {
    icon: Briefcase,
    title: "পার্ট-টাইম জব গাইডলাইন",
    description:
      "Part-time Job in Japan for Students সম্পর্কে বিস্তারিত তথ্য। সপ্তাহে ২৮ ঘন্টা কাজের সুযোগ ও আয়ের হিসাব।",
    href: "/jobs",
  },
  {
    icon: Building2,
    title: "ক্যারিয়ার প্লেসমেন্ট",
    description:
      "পড়াশোনা শেষে Work in Japan After Study এর সুযোগ। জাপানে চাকরি খোঁজা ও ইন্টারভিউ প্রস্তুতিতে সহায়তা।",
    href: "/jobs",
  },
  {
    icon: HeadphonesIcon,
    title: "২৪/৭ সাপোর্ট",
    description:
      "জাপানে যাওয়ার আগে ও পরে সার্বক্ষণিক সহায়তা। যেকোনো সমস্যায় আমাদের টিম সবসময় আপনার পাশে।",
    href: "#contact",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag mx-auto">
            <Settings className="w-4 h-4" />
            আমাদের সেবাসমূহ
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            সম্পূর্ণ <span className="text-primary">সেবা প্যাকেজ</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            জাপানে পড়াশোনার প্রতিটি ধাপে JEJC আপনার পাশে। ভর্তি থেকে চাকরি পর্যন্ত সম্পূর্ণ সহায়তা।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative bg-white rounded-2xl p-8 border border-border shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(215,21,24,0.12)] hover:border-primary/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-dark group-hover:shadow-[0_10px_25px_rgba(215,21,24,0.2)]">
                <service.icon className="w-7 h-7 text-primary transition-colors group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 transition-colors group-hover:text-primary">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">{service.description}</p>

              <div className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <span>বিস্তারিত জানুন</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute top-0 right-0 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
