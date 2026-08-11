import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { 
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Building,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Part-time Job in Japan for Students | JEJC",
  description: "জাপানে স্টুডেন্টদের জন্য পার্ট-টাইম জব। কাজের ধরন, বেতন, নিয়মকানুন এবং টিপস।",
};

const jobTypes = [
  {
    title: "Convenience Store",
    titleBn: "কনভেনিয়েন্স স্টোর",
    hourlyRate: "¥১,০০০-১,২০০",
    description: "7-Eleven, Lawson, FamilyMart ইত্যাদি। সবচেয়ে সহজে পাওয়া যায়।",
    japaneseRequired: "N4-N5",
    popular: true,
  },
  {
    title: "Restaurant/Fast Food",
    titleBn: "রেস্টুরেন্ট/ফাস্ট ফুড",
    hourlyRate: "¥১,০০০-১,৩০০",
    description: "কিচেন বা সার্ভিং এর কাজ। খাবার ফ্রি পাওয়া যায় অনেক জায়গায়।",
    japaneseRequired: "N4-N3",
    popular: true,
  },
  {
    title: "Factory Work",
    titleBn: "ফ্যাক্টরি",
    hourlyRate: "¥১,১০০-১,৫০০",
    description: "প্যাকেজিং, সাজানো, মেশিন অপারেটর। রাতের শিফটে বেশি বেতন।",
    japaneseRequired: "N5",
    popular: true,
  },
  {
    title: "Delivery Service",
    titleBn: "ডেলিভারি",
    hourlyRate: "¥১,২০০-১,৫০০",
    description: "Uber Eats, Demae-can। নিজের সময়মতো কাজ করা যায়।",
    japaneseRequired: "N5",
    popular: false,
  },
  {
    title: "Hotel/Cleaning",
    titleBn: "হোটেল/ক্লিনিং",
    hourlyRate: "¥১,০০০-১,২০০",
    description: "রুম ক্লিনিং, বেড মেকিং। সকালের শিফট বেশি।",
    japaneseRequired: "N5",
    popular: false,
  },
  {
    title: "Teaching/Tutoring",
    titleBn: "শিক্ষকতা",
    hourlyRate: "¥১,৫০০-৩,০০০",
    description: "ইংলিশ/বাংলা শেখানো, প্রাইভেট টিউশন। উচ্চ বেতন।",
    japaneseRequired: "N3-N2",
    popular: false,
  },
];

const rules = [
  "Student Visa তে সপ্তাহে সর্বোচ্চ ২৮ ঘণ্টা কাজ করা যায়",
  "ছুটির সময় (গ্রীষ্ম/শীতকালীন) দিনে ৮ ঘণ্টা পর্যন্ত কাজ করা যায়",
  "কাজ শুরুর আগে Immigration Office থেকে অনুমতি নিতে হবে",
  "নির্দিষ্ট কিছু কাজ (বার, পাচিনকো, গেমিং) করা নিষেধ",
  "নিয়ম ভঙ্গ করলে ভিসা বাতিল এবং দেশে ফেরত পাঠানো হতে পারে",
];

const tips = [
  "প্রথমে সহজ কাজ যেমন কনভেনিয়েন্স স্টোর দিয়ে শুরু করুন",
  "ভাষা শিখলে ভালো বেতনের কাজ পাবেন",
  "নাইট শিফটে বেতন ২৫-৫০% বেশি",
  "একাধিক কাজ করতে পারেন, কিন্তু মোট ঘণ্টা ২৮ এর মধ্যে রাখুন",
  "পড়াশোনার সাথে ব্যালেন্স রাখুন - এটাই মূল উদ্দেশ্য",
];

const afterGraduation = [
  {
    visa: "特定活動 (Job Seeking)",
    duration: "৬ মাস - ১ বছর",
    description: "পড়াশোনা শেষে চাকরি খোঁজার জন্য",
  },
  {
    visa: "技術・人文知識・国際業務",
    duration: "১-৫ বছর",
    description: "সাধারণ অফিস চাকরির জন্য",
  },
  {
    visa: "特定技能",
    duration: "৫ বছর (নবায়নযোগ্য)",
    description: "নির্দিষ্ট স্কিল্ড কাজের জন্য",
  },
];

export default function JobsPage() {
  return (
    <>
      <PageHeader
          title="Part-time Job in Japan"
          titleEn="জাপানে পার্ট-টাইম জব"
          description="পড়াশোনার পাশাপাশি আয়ের সুযোগ এবং কাজের নিয়মকানুন সম্পর্কে জানুন"
        />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Earning Summary */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">২৮ ঘণ্টা</p>
                <p className="text-muted-foreground">সাপ্তাহিক কাজের সময়</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">¥১,০০০-১,৫০০</p>
                <p className="text-muted-foreground">ঘণ্টা প্রতি বেতন</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <Briefcase className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">¥৮০,০০০-১,২০,০০০</p>
                <p className="text-muted-foreground">মাসিক আয় (আনুমানিক)</p>
              </div>
            </div>

            {/* Job Types */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                জনপ্রিয় কাজের ধরন
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobTypes.map((job) => (
                  <div key={job.title} className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all">
                    {job.popular && (
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full mb-3">
                        জনপ্রিয়
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-foreground mb-1">{job.titleBn}</h3>
                    <p className="text-sm text-primary mb-3">{job.title}</p>
                    <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">বেতন: <span className="font-semibold text-foreground">{job.hourlyRate}</span>/ঘণ্টা</span>
                      <span className="text-xs bg-secondary px-2 py-1 rounded">{job.japaneseRequired}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                নিয়মকানুন
              </h2>
              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <p className="text-yellow-800 font-medium">এই নিয়মগুলো অবশ্যই মানতে হবে। না মানলে ভিসা সমস্যা হতে পারে।</p>
                </div>
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-yellow-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tips */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                সফল হওয়ার টিপস
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After Graduation */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                <GraduationCap className="w-6 h-6" />
                পড়াশোনা শেষে কাজের সুযোগ
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {afterGraduation.map((item) => (
                  <div key={item.visa} className="bg-card rounded-xl p-6 border border-border">
                    <Building className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">{item.visa}</h3>
                    <p className="text-sm text-primary mb-2">মেয়াদ: {item.duration}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">জাপানে পড়াশোনা ও কাজ করতে চান?</h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                আমাদের বিশেষজ্ঞরা আপনাকে সঠিক গাইডলাইন দেবেন। ফ্রি কাউন্সেলিং এ বিস্তারিত জানুন।
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold"
              >
                ফ্রি কাউন্সেলিং বুক করুন
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}
