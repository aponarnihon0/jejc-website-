import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "৯৮% ভিসা সাক্সেস রেট",
  "১৫+ বছরের অভিজ্ঞতা",
  "১০০০+ সফল শিক্ষার্থী",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Trusted Since 2009
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              জাপানে আপনার
              <span className="text-primary"> স্বপ্নের </span>
              শিক্ষা জীবন শুরু করুন
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl text-pretty">
              বাংলাদেশ থেকে জাপানে পড়াশোনা, ভিসা প্রসেসিং এবং চাকরির সম্পূর্ণ সমাধান। JEJC এর হাত ধরে আপনার স্বপ্ন পূরণ হোক।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                ফ্রি কাউন্সেলিং বুক করুন
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/study-in-japan"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border rounded-full font-semibold text-base hover:border-primary hover:text-primary transition-all"
              >
                আরও জানুন
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                  <div className="text-8xl font-bold mb-4">日本</div>
                  <p className="text-xl font-medium opacity-90">Study in Japan</p>
                  <p className="text-sm opacity-70 mt-2">Your Gateway to Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 border border-border">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">ভিসা সাক্সেস রেট</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl p-5 border border-border">
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground">সফল শিক্ষার্থী</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
