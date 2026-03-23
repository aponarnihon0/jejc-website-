import Link from "next/link";
import { GraduationCap, FileCheck, Languages, Calculator, Briefcase, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study in Japan",
    titleBn: "জাপানে পড়াশোনা",
    description: "বিশ্বমানের শিক্ষা এবং গবেষণার সুযোগ পান জাপানের শীর্ষ বিশ্ববিদ্যালয়গুলোতে।",
    href: "/study-in-japan",
  },
  {
    icon: FileCheck,
    title: "Visa Processing",
    titleBn: "ভিসা প্রসেসিং",
    description: "COE থেকে শুরু করে Student Visa পর্যন্ত সম্পূর্ণ ভিসা প্রক্রিয়ায় সাহায্য।",
    href: "/visa",
  },
  {
    icon: Languages,
    title: "Language Course",
    titleBn: "ভাষা কোর্স",
    description: "JLPT N5 থেকে N1 পর্যন্ত সকল লেভেলের জাপানি ভাষা কোর্স।",
    href: "/courses",
  },
  {
    icon: Calculator,
    title: "Cost Analysis",
    titleBn: "খরচের হিসাব",
    description: "টিউশন ফি, থাকা-খাওয়া এবং অন্যান্য খরচের বিস্তারিত বিশ্লেষণ।",
    href: "/cost",
  },
  {
    icon: Briefcase,
    title: "Part-time Job",
    titleBn: "পার্ট-টাইম জব",
    description: "পড়াশোনার পাশাপাশি আয়ের সুযোগ এবং কাজের অনুমতি সম্পর্কে জানুন।",
    href: "/jobs",
  },
  {
    icon: Users,
    title: "Counseling",
    titleBn: "কাউন্সেলিং",
    description: "অভিজ্ঞ কাউন্সেলরদের কাছ থেকে ব্যক্তিগত পরামর্শ এবং গাইডলাইন।",
    href: "/#contact",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            আমাদের সেবাসমূহ
          </h2>
          <p className="text-muted-foreground text-lg">
            জাপানে পড়াশোনার প্রতিটি ধাপে JEJC আপনার পাশে থাকবে
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.titleBn}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {service.title}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>বিস্তারিত</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
