import { Target, CheckCircle, Star, Award, Shield, Users } from "lucide-react"

const goals = [
  {
    icon: Star,
    title: "বিশ্বমানের শিক্ষা",
    description: "জাপানের টপ ইউনিভার্সিটিতে পড়াশোনার সুযোগ করে দেওয়া",
  },
  {
    icon: Award,
    title: "১০০% ভিসা সাপোর্ট",
    description: "সম্পূর্ণ ডকুমেন্টেশন ও ভিসা প্রসেসিং সহায়তা",
  },
  {
    icon: Shield,
    title: "বিশ্বস্ত সেবা",
    description: "১৫+ বছরের অভিজ্ঞতা ও সফলতার ইতিহাস",
  },
  {
    icon: Users,
    title: "সার্বক্ষণিক সাপোর্ট",
    description: "জাপানে যাওয়ার আগে ও পরে সম্পূর্ণ সহায়তা",
  },
]

export function Goal() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="goal">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="section-tag">
              <Target className="w-4 h-4" />
              আমাদের লক্ষ্য
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
              আমাদের লক্ষ্য ও <span className="text-primary">প্রতিশ্রুতি</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Japan Education and Job Center (JEJC) প্রতিষ্ঠিত হয়েছে বাংলাদেশের শিক্ষার্থীদের জাপানে উচ্চশিক্ষা ও
              ক্যারিয়ার গঠনে সহায়তা করার লক্ষ্যে। আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থী তাদের স্বপ্ন পূরণের যোগ্য।
            </p>

            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted rounded-xl transition-all hover:bg-primary/5 hover:translate-x-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <goal.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{goal.title}</h4>
                    <p className="text-muted-foreground text-sm">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-2">আমাদের অর্জন</h3>
                  <p className="text-white/70">১৫ বছরের সফলতার ইতিহাস</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-5xl font-extrabold mb-2">১৫+</div>
                    <div className="text-white/80 text-sm">বছরের অভিজ্ঞতা</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-5xl font-extrabold mb-2">১০০০+</div>
                    <div className="text-white/80 text-sm">সফল শিক্ষার্থী</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-5xl font-extrabold mb-2">৯৮%</div>
                    <div className="text-white/80 text-sm">ভিসা সাফল্য</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-5xl font-extrabold mb-2">৫০+</div>
                    <div className="text-white/80 text-sm">পার্টনার স্কুল</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
