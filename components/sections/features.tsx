import { Shield, Clock, HeartHandshake, Award, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "বিশ্বস্ত প্রতিষ্ঠান",
    description: "১৫ বছরের অভিজ্ঞতা এবং হাজারো সন্তুষ্ট শিক্ষার্থীর পরিবার।",
  },
  {
    icon: Clock,
    title: "দ্রুত প্রসেসিং",
    description: "সময়মতো ডকুমেন্ট প্রসেসিং এবং ভিসা আবেদন সম্পন্ন করা হয়।",
  },
  {
    icon: HeartHandshake,
    title: "সম্পূর্ণ সাপোর্ট",
    description: "আবেদন থেকে শুরু করে জাপানে পৌঁছানো পর্যন্ত সাপোর্ট।",
  },
  {
    icon: Award,
    title: "উচ্চ সাফল্যের হার",
    description: "৯৮% ভিসা সাক্সেস রেট আমাদের সেবার মান প্রমাণ করে।",
  },
  {
    icon: Globe,
    title: "বিস্তৃত নেটওয়ার্ক",
    description: "জাপানের ৫০+ স্বনামধন্য প্রতিষ্ঠানের সাথে পার্টনারশিপ।",
  },
  {
    icon: Headphones,
    title: "২৪/৭ সাপোর্ট",
    description: "যেকোনো প্রশ্নে আমাদের টিম সবসময় আপনার পাশে।",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            কেন JEJC বেছে নেবেন?
          </h2>
          <p className="text-muted-foreground text-lg">
            আমরা শুধু সেবা দিই না, আপনার স্বপ্ন পূরণে সাথী হই
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-5 p-6 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
