import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Clock,
  AlertCircle,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Japan Student Visa Requirements | JEJC",
  description: "জাপান স্টুডেন্ট ভিসার জন্য প্রয়োজনীয় কাগজপত্র, প্রক্রিয়া এবং টিপস। COE থেকে Visa Interview পর্যন্ত সম্পূর্ণ গাইড।",
};

const requiredDocuments = [
  "পাসপোর্ট (৬ মাসের বেশি মেয়াদ থাকতে হবে)",
  "সকল শিক্ষাগত সার্টিফিকেট ও মার্কশীট",
  "জন্ম নিবন্ধন সনদ",
  "ব্যাংক স্টেটমেন্ট (শেষ ৬ মাসের)",
  "স্পন্সর এর আয়ের প্রমাণপত্র",
  "ছবি (নির্দিষ্ট সাইজে)",
  "JLPT সার্টিফিকেট (থাকলে)",
  "Statement of Purpose",
];

const visaProcess = [
  {
    step: "১",
    title: "প্রতিষ্ঠান নির্বাচন",
    duration: "১-২ সপ্তাহ",
    description: "জাপানের কোন Language School বা University তে পড়তে চান তা নির্বাচন করুন।",
  },
  {
    step: "২",
    title: "আবেদন জমা",
    duration: "১-২ সপ্তাহ",
    description: "নির্বাচিত প্রতিষ্ঠানে সকল কাগজপত্র সহ আবেদন জমা দিন।",
  },
  {
    step: "৩",
    title: "COE আবেদন",
    duration: "২-৪ মাস",
    description: "প্রতিষ্ঠান আপনার হয়ে Japan Immigration এ Certificate of Eligibility এর জন্য আবেদন করবে।",
  },
  {
    step: "৪",
    title: "COE প্রাপ্তি",
    duration: "১ সপ্তাহ",
    description: "COE অনুমোদন হলে প্রতিষ্ঠান আপনাকে পাঠাবে।",
  },
  {
    step: "৫",
    title: "ভিসা আবেদন",
    duration: "১-২ সপ্তাহ",
    description: "বাংলাদেশে জাপান এম্বাসিতে COE সহ ভিসার জন্য আবেদন করুন।",
  },
  {
    step: "৬",
    title: "ভিসা ইন্টারভিউ",
    duration: "১-২ দিন",
    description: "এম্বাসিতে সংক্ষিপ্ত ইন্টারভিউ। সাধারণত জাপানে যাওয়ার উদ্দেশ্য সম্পর্কে জিজ্ঞাসা করা হয়।",
  },
  {
    step: "৭",
    title: "ভিসা সংগ্রহ",
    duration: "৩-৫ দিন",
    description: "সবকিছু ঠিক থাকলে ভিসা ইস্যু হবে এবং সংগ্রহ করতে পারবেন।",
  },
];

const tips = [
  "সকল ডকুমেন্ট সঠিকভাবে অনুবাদ ও নোটারি করুন",
  "ব্যাংক ব্যালেন্স কমপক্ষে ৬-৮ লাখ টাকা রাখুন",
  "স্পন্সর এর আয়ের উৎস পরিষ্কার হতে হবে",
  "ইন্টারভিউতে সততার সাথে উত্তর দিন",
  "জাপানে পড়াশোনার উদ্দেশ্য স্পষ্ট করুন",
];

export default function VisaPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Japan Student Visa"
          titleEn="জাপান স্টুডেন্ট ভিসা"
          description="COE থেকে Visa Interview পর্যন্ত সম্পূর্ণ প্রক্রিয়া জানুন"
        />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Required Documents */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    প্রয়োজনীয় কাগজপত্র
                  </h2>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <ul className="space-y-3">
                      {requiredDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visa Process */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    ভিসা প্রক্রিয়া ধাপে ধাপে
                  </h2>
                  <div className="space-y-4">
                    {visaProcess.map((item) => (
                      <div key={item.step} className="flex gap-4 p-5 bg-secondary/50 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            <span className="flex items-center gap-1 text-xs text-primary bg-accent px-2 py-1 rounded-full">
                              <Clock className="w-3 h-3" />
                              {item.duration}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Tips */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    গুরুত্বপূর্ণ টিপস
                  </h2>
                  <div className="bg-accent rounded-xl p-6 border border-primary/20">
                    <ul className="space-y-3">
                      {tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Warning */}
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-2">সতর্কতা</h3>
                      <p className="text-yellow-700 text-sm">
                        ভুয়া এজেন্সি থেকে সাবধান! JEJC সরাসরি জাপানের প্রতিষ্ঠানগুলোর সাথে কাজ করে। সবসময় ভেরিফাইড এজেন্সির মাধ্যমে আবেদন করুন।
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-primary rounded-xl p-8 text-white text-center">
                  <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl font-semibold mb-2">ভিসা প্রসেসিং এ সাহায্য চান?</h3>
                  <p className="text-white/80 mb-6">আমাদের ৯৮% ভিসা সাক্সেস রেট। আজই ফ্রি কাউন্সেলিং বুক করুন।</p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-full font-semibold"
                  >
                    ফ্রি কাউন্সেলিং বুক করুন
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Success Rate */}
                  <div className="bg-card rounded-xl p-6 border border-border text-center">
                    <p className="text-5xl font-bold text-primary mb-2">98%</p>
                    <p className="text-foreground font-medium">ভিসা সাক্সেস রেট</p>
                    <p className="text-sm text-muted-foreground mt-1">১০০০+ সফল শিক্ষার্থী</p>
                  </div>

                  {/* Timeline */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-4">সময়সীমা</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">COE প্রসেসিং</span>
                        <span className="font-medium text-foreground">২-৪ মাস</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ভিসা প্রসেসিং</span>
                        <span className="font-medium text-foreground">১-২ সপ্তাহ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">মোট সময়</span>
                        <span className="font-medium text-primary">৩-৫ মাস</span>
                      </div>
                    </div>
                  </div>

                  {/* Related Links */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-4">সম্পর্কিত তথ্য</h4>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/study-in-japan" className="flex items-center gap-3 text-primary hover:gap-4 transition-all">
                          <ArrowRight className="w-4 h-4" />
                          Study in Japan Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/cost" className="flex items-center gap-3 text-primary hover:gap-4 transition-all">
                          <ArrowRight className="w-4 h-4" />
                          খরচের হিসাব
                        </Link>
                      </li>
                      <li>
                        <Link href="/courses" className="flex items-center gap-3 text-primary hover:gap-4 transition-all">
                          <ArrowRight className="w-4 h-4" />
                          ভাষা কোর্স
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="bg-foreground rounded-xl p-6 text-white">
                    <h4 className="font-semibold mb-2">প্রশ্ন আছে?</h4>
                    <p className="text-white/70 text-sm mb-4">আমাদের সাথে যোগাযোগ করুন</p>
                    <a
                      href="tel:+8801712345678"
                      className="block w-full text-center px-4 py-2.5 bg-primary rounded-lg font-semibold text-sm"
                    >
                      +880 1712-345678
                    </a>
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
