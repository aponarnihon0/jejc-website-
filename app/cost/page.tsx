import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { 
  Calculator,
  Home,
  Utensils,
  Train,
  GraduationCap,
  ArrowRight,
  Lightbulb,
  TrendingDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cost of Studying in Japan | JEJC",
  description: "জাপানে পড়াশোনার খরচের বিস্তারিত হিসাব। টিউশন ফি, থাকা-খাওয়া, যাতায়াত এবং অন্যান্য খরচ।",
};

const initialCosts = [
  { item: "এজেন্সি ফি", amount: "৫০,০০০ - ১,০০,০০০", note: "সার্ভিস চার্জ" },
  { item: "Language School ফি (১ বছর)", amount: "৫,৫০,০০০ - ৭,০০,০০০", note: "স্কুল ভেদে ভিন্ন" },
  { item: "COE ও ভিসা ফি", amount: "১৫,০০০ - ২০,০০০", note: "" },
  { item: "এয়ার টিকেট", amount: "৫০,০০০ - ৮০,০০০", note: "One Way" },
  { item: "প্রাথমিক থাকা-খাওয়া (৩ মাস)", amount: "১,৫০,০০০ - ২,০০,০০০", note: "জরুরি ফান্ড" },
];

const monthlyCosts = [
  { icon: Home, item: "বাসা ভাড়া", tokyo: "৩০,০০০-৫০,০০০", other: "২০,০০০-৩৫,০০০", note: "শেয়ার রুম/ডরমিটরি" },
  { icon: Utensils, item: "খাবার খরচ", tokyo: "২৫,০০০-৩৫,০০০", other: "২০,০০০-৩০,০০০", note: "রান্না করলে কম" },
  { icon: Train, item: "যাতায়াত", tokyo: "৫,০০০-১০,০০০", other: "৩,০০০-৮,০০০", note: "সাইকেল ব্যবহার করলে সাশ্রয়" },
  { icon: GraduationCap, item: "পড়াশোনার খরচ", tokyo: "৫,০০০-১০,০০০", other: "৫,০০০-১০,০০০", note: "বই, প্রিন্ট ইত্যাদি" },
];

const savingTips = [
  "শেয়ার রুম বা ডরমিটরিতে থাকুন - মাসে ১৫,০০০-২০,০০০ ইয়েন সাশ্রয়",
  "নিজে রান্না করুন - মাসে ১০,০০০-১৫,০০০ ইয়েন সাশ্রয়",
  "সাইকেল ব্যবহার করুন - যাতায়াত খরচ প্রায় শূন্য",
  "সেকেন্ড-হ্যান্ড জিনিস কিনুন - ফার্নিচার, ইলেকট্রনিক্স",
  "ডিসকাউন্ট স্টোর থেকে কেনাকাটা করুন - Don Quijote, Daiso",
  "স্টুডেন্ট ডিসকাউন্ট ব্যবহার করুন - ট্রেন, সিনেমা, জাদুঘর",
];

export default function CostPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Cost of Studying in Japan"
          titleEn="জাপানে পড়াশোনার খরচ"
          description="টিউশন ফি, থাকা-খাওয়া, যাতায়াত এবং অন্যান্য খরচের বিস্তারিত হিসাব"
        />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Initial Costs */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                প্রাথমিক খরচ (বাংলাদেশ থেকে)
              </h2>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-foreground text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">খরচের খাত</th>
                        <th className="px-6 py-4 text-right font-semibold">পরিমাণ (BDT)</th>
                        <th className="px-6 py-4 text-left font-semibold hidden sm:table-cell">মন্তব্য</th>
                      </tr>
                    </thead>
                    <tbody>
                      {initialCosts.map((cost, index) => (
                        <tr key={cost.item} className={index % 2 === 0 ? "bg-secondary/30" : ""}>
                          <td className="px-6 py-4 font-medium">{cost.item}</td>
                          <td className="px-6 py-4 text-right text-primary font-semibold">৳ {cost.amount}</td>
                          <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{cost.note}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-primary text-white">
                      <tr>
                        <td className="px-6 py-4 font-bold">মোট (আনুমানিক)</td>
                        <td className="px-6 py-4 text-right font-bold">৳ ৮-১২ লাখ</td>
                        <td className="px-6 py-4 hidden sm:table-cell">প্রথম বছরের জন্য</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            {/* Monthly Costs */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                মাসিক খরচ (জাপানে)
              </h2>
              <p className="text-muted-foreground mb-6">
                সকল পরিমাণ জাপানি ইয়েন (¥) এ। ১ ইয়েন ≈ ০.৭৫ টাকা (আনুমানিক)
              </p>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-foreground text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">খরচের খাত</th>
                        <th className="px-6 py-4 text-center font-semibold">টোকিও (¥)</th>
                        <th className="px-6 py-4 text-center font-semibold">অন্যান্য শহর (¥)</th>
                        <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">টিপস</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyCosts.map((cost, index) => (
                        <tr key={cost.item} className={index % 2 === 0 ? "bg-secondary/30" : ""}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <cost.icon className="w-5 h-5 text-primary" />
                              <span className="font-medium">{cost.item}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center font-semibold">¥ {cost.tokyo}</td>
                          <td className="px-6 py-4 text-center font-semibold">¥ {cost.other}</td>
                          <td className="px-6 py-4 text-muted-foreground hidden md:table-cell text-sm">{cost.note}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-primary text-white">
                      <tr>
                        <td className="px-6 py-4 font-bold">মোট মাসিক</td>
                        <td className="px-6 py-4 text-center font-bold">¥ ৬৫,০০০-১,০৫,০০০</td>
                        <td className="px-6 py-4 text-center font-bold">¥ ৪৮,০০০-৮৩,০০০</td>
                        <td className="px-6 py-4 hidden md:table-cell"></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            {/* Part-time Earning */}
            <div className="mb-16 grid md:grid-cols-2 gap-8">
              <div className="bg-accent rounded-2xl p-8 border border-primary/20">
                <Calculator className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">পার্ট-টাইম আয়</h3>
                <p className="text-muted-foreground mb-4">
                  Student Visa তে সপ্তাহে ২৮ ঘণ্টা কাজ করা যায়। সাধারণত ঘণ্টায় ¥১,০০০-১,২০০ আয় হয়।
                </p>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">সাপ্তাহিক আয়:</span>
                    <span className="font-semibold text-primary">¥ ২৮,০০০ - ৩৩,৬০০</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">মাসিক আয় (আনুমানিক):</span>
                    <span className="font-semibold text-primary">¥ ৮০,০০০ - ১,২০,০০০</span>
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                <TrendingDown className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">সারসংক্ষেপ</h3>
                <p className="text-muted-foreground mb-4">
                  পার্ট-টাইম জব করলে মাসিক খরচ নিজেই চালানো সম্ভব। প্রথম ৩-৬ মাস জব পেতে একটু সময় লাগতে পারে।
                </p>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">প্রথম বছর পরিবার থেকে সাপোর্ট:</p>
                  <p className="text-2xl font-bold text-green-600">৳ ৮-১২ লাখ</p>
                  <p className="text-sm text-muted-foreground mt-2">পরবর্তী বছরগুলোতে নিজে চালানো সম্ভব</p>
                </div>
              </div>
            </div>

            {/* Saving Tips */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                খরচ কমানোর টিপস
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {savingTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">বিস্তারিত খরচের হিসাব চান?</h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                আপনার বাজেট অনুযায়ী সেরা প্ল্যান তৈরি করতে আমাদের সাথে যোগাযোগ করুন। ফ্রি কাউন্সেলিং এ বিস্তারিত জানুন।
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
      </main>
      <Footer />
    </>
  );
}
