import Image from "next/image"
import { User, Award, GraduationCap, Calendar, Quote, Star, CheckCircle } from "lucide-react"

const achievements = [
  "১৫+ বছর জাপান শিক্ষা সেক্টরে অভিজ্ঞতা",
  "১০০০+ শিক্ষার্থীকে জাপানে পাঠানোর সফলতা",
  "জাপানি ভাষায় উচ্চতর দক্ষতা (JLPT N1)",
  "জাপান-বাংলাদেশ শিক্ষা সম্পর্ক উন্নয়নে অবদান",
]

export function Chairman() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="chairman">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-gold/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag mx-auto">
            <User className="w-4 h-4" />
            প্রতিষ্ঠাতা
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            চেয়ারম্যানের <span className="text-primary">বার্তা</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.postimg.cc/NFVPjDxL/chairman-jejc.jpg"
                alt="Nagamatsu Faruk Sir - Chairman of JEJC"
                width={500}
                height={600}
                className="w-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />

              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-1">Nagamatsu Faruk Sir</h3>
                <p className="text-white/80 text-sm">প্রতিষ্ঠাতা ও চেয়ারম্যান, JEJC</p>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gold to-yellow-500 text-foreground px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">Since 2009</span>
              </div>
            </div>

            {/* Achievement badge */}
            <div className="absolute -bottom-4 -left-4 bg-white px-6 py-4 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">১০০০+</div>
                  <div className="text-sm text-muted-foreground">সফল শিক্ষার্থী</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="relative bg-muted rounded-3xl p-8 mb-8">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
              <blockquote className="relative z-10 text-xl text-foreground leading-relaxed italic pl-8">
                &ldquo;আমি বিশ্বাস করি প্রতিটি বাংলাদেশি শিক্ষার্থীর মধ্যে অসীম সম্ভাবনা আছে। আমার লক্ষ্য হলো সেই
                সম্ভাবনাকে জাপানের উন্নত শিক্ষা ও প্রযুক্তির মাধ্যমে বিকশিত করা। JEJC শুধু একটি কনসালটেন্সি নয়, এটি
                আপনার স্বপ্ন পূরণের সঙ্গী।&rdquo;
              </blockquote>
              <div className="flex items-center gap-1 mt-6 pl-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                মূল অর্জনসমূহ
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
