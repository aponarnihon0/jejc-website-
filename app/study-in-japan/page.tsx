import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { 
  GraduationCap, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  MapPin,
  Calendar,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Study in Japan from Bangladesh | Complete Guide | JEJC",
  description: "বাংলাদেশ থেকে জাপানে পড়াশোনার সম্পূর্ণ গাইড। Admission process, university selection, application timeline, এবং অভিভাবকদের জন্য গাইডলাইন।",
};

const benefits = [
  "বিশ্বমানের শিক্ষা: জাপানের বিশ্ববিদ্যালয়গুলো বিশ্ব র‍্যাংকিং এ উচ্চ অবস্থানে",
  "আধুনিক গবেষণা সুবিধা: Technology এবং Engineering সেক্টরে বিপুল বিনিয়োগ",
  "সাংস্কৃতিক সমৃদ্ধি: প্রাচীন ঐতিহ্য এবং আধুনিক প্রযুক্তির সুন্দর মিশেল",
  "কর্মসংস্থানের সুযোগ: পড়াশোনা শেষে জাপানে কাজের excellent সুযোগ",
  "নিরাপত্তা: জাপান বিশ্বের সবচেয়ে নিরাপদ দেশগুলোর একটি",
];

const studyTypes = [
  {
    icon: Building,
    title: "Japanese Language Schools",
    titleBn: "জাপানি ভাষা স্কুল",
    description: "১-২ বছর ভাষা শিখে JLPT N2/N1 পাস করে বিশ্ববিদ্যালয়ে ভর্তি হওয়া যায়। এটি Study in Japan from Bangladesh এর সবচেয়ে জনপ্রিয় পথ।",
  },
  {
    icon: GraduationCap,
    title: "Universities & Colleges",
    titleBn: "বিশ্ববিদ্যালয় ও কলেজ",
    description: "সরাসরি Undergraduate বা Graduate প্রোগ্রামে ভর্তি। জাপানি ভাষায় N2 দক্ষতা অথবা English Medium প্রোগ্রামের জন্য IELTS/TOEFL প্রয়োজন।",
  },
];

const steps = [
  {
    step: "১",
    title: "কাউন্সেলিং এবং পথ নির্বাচন",
    description: "আমাদের এক্সপার্ট কাউন্সেলরদের সাথে কথা বলে নির্ধারণ করুন কোন পথে যাবেন - Language School নাকি সরাসরি University।",
  },
  {
    step: "২",
    title: "প্রতিষ্ঠান নির্বাচন",
    description: "৫০+ পার্টনার ইনস্টিটিউট থেকে সেরা অপশন বেছে নিন। টোকিও, ওসাকা, নাগোয়া, ফুকুওকা - কোন শহর উপযুক্ত তা নির্ধারণ করুন।",
  },
  {
    step: "৩",
    title: "আবেদনপত্র জমা",
    description: "নির্বাচিত প্রতিষ্ঠানে Application Form জমা দিন প্রয়োজনীয় ডকুমেন্টস সহ। আমরা পুরো প্রক্রিয়ায় সাহায্য করি।",
  },
  {
    step: "৪",
    title: "COE আবেদন",
    description: "Certificate of Eligibility এর জন্য প্রতিষ্ঠান Japan Immigration এ আবেদন করে। এতে ২-৪ মাস সময় লাগে।",
  },
  {
    step: "৫",
    title: "ভিসা আবেদন",
    description: "COE পাওয়ার পর জাপান এম্বাসিতে Student Visa এর জন্য আবেদন করুন। Interview এবং ভেরিফিকেশন শেষে ভিসা ইস্যু হয়।",
  },
];

const cities = [
  { name: "টোকিও", nameEn: "Tokyo", desc: "রাজধানী, সুযোগ-সুবিধা সবচেয়ে বেশি, তবে খরচও বেশি" },
  { name: "ওসাকা", nameEn: "Osaka", desc: "ব্যবসায়িক শহর, টোকিওর চেয়ে কম খরচে ভালো সুযোগ" },
  { name: "ফুকুওকা", nameEn: "Fukuoka", desc: "দ্রুত বর্ধনশীল শহর, লিভিং কস্ট কম, International Students এর জন্য সহায়তা বেশি" },
  { name: "নাগোয়া", nameEn: "Nagoya", desc: "শিল্প শহর, Engineering এবং Manufacturing স্টুডেন্টদের জন্য আদর্শ" },
];

const relatedLinks = [
  { href: "/visa", label: "Visa Requirements", icon: "fas fa-passport" },
  { href: "/cost", label: "খরচের হিসাব", icon: "fas fa-calculator" },
  { href: "/courses", label: "ভাষা কোর্স", icon: "fas fa-language" },
  { href: "/jobs", label: "পার্ট-টাইম জব", icon: "fas fa-briefcase" },
];

export default function StudyInJapanPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Study in Japan from Bangladesh"
          description="বাংলাদেশ থেকে জাপানে পড়াশোনার সম্পূর্ণ গাইড ২০২৪ - Admission Process, University Selection, এবং Timeline"
        />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <p className="text-lg text-muted-foreground border-b border-border pb-6 mb-8">
                  Japan Education and Job Center (JEJC) আপনাকে স্বাগতম। এই গাইডে আমরা বিস্তারিতভাবে জানবো কীভাবে বাংলাদেশ থেকে জাপানে পড়াশোনা করা যায়, কী কী প্রয়োজনীয়তা রয়েছে, এবং সঠিক প্রক্রিয়াটি কী।
                </p>

                {/* Why Japan */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    জাপানে উচ্চশিক্ষা কেন বেছে নেবেন?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    জাপান বিশ্বের শীর্ষস্থানীয় শিক্ষাব্যবস্থার দেশগুলোর মধ্যে একটি। <span className="text-primary font-medium">Study in Japan from Bangladesh</span> এর সুবিধাগুলো অনেক:
                  </p>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Study Types */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    জাপানে পড়াশোনার ধরন
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {studyTypes.map((type) => (
                      <div key={type.title} className="bg-card rounded-xl p-6 border border-border">
                        <type.icon className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-1">{type.titleBn}</h3>
                        <p className="text-sm text-primary mb-3">{type.title}</p>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Admission Process */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    ভর্তি প্রক্রিয়া ধাপে ধাপে
                  </h2>
                  <div className="space-y-4">
                    {steps.map((step) => (
                      <div key={step.step} className="flex gap-4 p-5 bg-secondary/50 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Cities */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    জনপ্রিয় শহরগুলো
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cities.map((city) => (
                      <div key={city.name} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">{city.name} <span className="text-muted-foreground font-normal">({city.nameEn})</span></p>
                          <p className="text-sm text-muted-foreground">{city.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    Timeline: কখন শুরু করবেন?
                  </h2>
                  <div className="bg-secondary/50 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground">জাপানে সেশন সাধারণত <strong className="text-foreground">এপ্রিল</strong> এবং <strong className="text-foreground">অক্টোবরে</strong> শুরু হয়।</p>
                        <p className="text-muted-foreground mt-2">আবেদন করতে হয় <strong className="text-foreground">৬-৮ মাস আগে</strong>। তাই যদি এপ্রিল সেশনে যেতে চান, তাহলে আগের বছরের আগস্ট-সেপ্টেম্বর থেকে প্রস্তুতি শুরু করুন।</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="bg-accent rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">প্রো টিপ</h3>
                      <p className="text-muted-foreground mb-4">আজকেই ফ্রি কাউন্সেলিং বুক করুন। JEJC এর বিশেষজ্ঞরা আপনার প্রোফাইল বিশ্লেষণ করে সেরা রোডম্যাপ তৈরি করে দেবেন।</p>
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm"
                      >
                        ফ্রি কাউন্সেলিং বুক করুন
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Related Links */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-4">সম্পর্কিত তথ্য</h4>
                    <ul className="space-y-3">
                      {relatedLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-3 text-primary hover:gap-4 transition-all"
                          >
                            <ArrowRight className="w-4 h-4" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Box */}
                  <div className="bg-primary rounded-xl p-6 text-white">
                    <h4 className="text-lg font-semibold mb-2">আপনার স্বপ্ন জাপানে?</h4>
                    <p className="text-white/80 text-sm mb-4">আমাদের ১৫+ বছরের অভিজ্ঞতা আপনার পাশে আছে</p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-white text-primary rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-transform"
                    >
                      যোগাযোগ করুন
                    </Link>
                  </div>

                  {/* Timeline Box */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-4">সময়সূচি</h4>
                    <div className="space-y-3 text-sm">
                      <p><strong className="text-foreground">এপ্রিল সেশন:</strong> <span className="text-muted-foreground">আবেদন শুরু: আগস্ট</span></p>
                      <p><strong className="text-foreground">অক্টোবর সেশন:</strong> <span className="text-muted-foreground">আবেদন শুরু: ফেব্রুয়ারি</span></p>
                      <p className="text-muted-foreground">COE প্রসেসিং: ২-৪ মাস</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
