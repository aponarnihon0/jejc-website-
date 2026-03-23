import Link from "next/link"
import { GraduationCap, Clock, BookOpen, Users, Star, CheckCircle, ArrowRight } from "lucide-react"

const courses = [
  {
    level: "N5",
    title: "বেসিক জাপানি",
    duration: "৩ মাস",
    classes: "সপ্তাহে ৩ দিন",
    features: ["হিরাগানা ও কাতাকানা", "বেসিক গ্রামার", "১০০+ কাঞ্জি", "দৈনন্দিন কথোপকথন"],
    price: "১৫,০০০",
    popular: false,
  },
  {
    level: "N4",
    title: "ইন্টারমিডিয়েট",
    duration: "৪ মাস",
    classes: "সপ্তাহে ৪ দিন",
    features: ["অ্যাডভান্সড গ্রামার", "৩০০+ কাঞ্জি", "রিডিং ও রাইটিং", "JLPT প্রস্তুতি"],
    price: "২০,০০০",
    popular: true,
  },
  {
    level: "N3",
    title: "অ্যাডভান্সড",
    duration: "৬ মাস",
    classes: "সপ্তাহে ৫ দিন",
    features: ["ব্যবসায়িক জাপানি", "৬৫০+ কাঞ্জি", "ইন্টারভিউ প্রস্তুতি", "কমিউনিকেশন স্কিল"],
    price: "৩০,০০০",
    popular: false,
  },
]

export function Courses() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="courses">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag mx-auto">
            <GraduationCap className="w-4 h-4" />
            কোর্সসমূহ
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            জাপানি ভাষা <span className="text-primary">কোর্স</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            JLPT N5 থেকে N3 পর্যন্ত সকল লেভেলের কোর্স। দক্ষ শিক্ষকদের তত্ত্বাবধানে জাপানি ভাষা শিখুন।
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-400 hover:-translate-y-2 ${
                course.popular
                  ? "border-primary shadow-[0_20px_50px_-10px_rgba(215,21,24,0.2)]"
                  : "border-border shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(215,21,24,0.12)] hover:border-primary/20"
              }`}
            >
              {/* Popular badge */}
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white" />
                  সবচেয়ে জনপ্রিয়
                </div>
              )}

              {/* Level badge */}
              <div className="text-center mb-6">
                <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-2xl font-extrabold mb-4">
                  {course.level}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
              </div>

              {/* Course info */}
              <div className="flex justify-center gap-6 mb-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{course.classes}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-4xl font-extrabold text-foreground">
                  ৳{course.price}
                  <span className="text-base font-normal text-muted-foreground">/মাস</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${
                  course.popular
                    ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    : "bg-muted text-foreground hover:bg-primary hover:text-white"
                }`}
              >
                ভর্তি হন
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
