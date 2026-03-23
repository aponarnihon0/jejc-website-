import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "রহিম আহমেদ",
    location: "Tokyo, Japan",
    course: "Language School Student",
    text: "JEJC এর মাধ্যমে আমি সহজেই জাপানে আসতে পেরেছি। তাদের গাইডলাইন অনুযায়ী সব কাজ করেছি এবং মাত্র ৩ মাসে ভিসা পেয়েছি।",
  },
  {
    name: "ফাতেমা বেগম",
    location: "Osaka, Japan",
    course: "University Student",
    text: "জাপানে আসার আগে অনেক দুশ্চিন্তা ছিল। কিন্তু JEJC এর টিম প্রতিটি ধাপে সাহায্য করেছে। এখন আমি ওসাকা বিশ্ববিদ্যালয়ে পড়ছি।",
  },
  {
    name: "করিম উদ্দিন",
    location: "Fukuoka, Japan",
    course: "Working Professional",
    text: "ল্যাংগুয়েজ স্কুল শেষে এখন আমি জাপানের একটি IT কোম্পানিতে কাজ করছি। JEJC এর কাছে আমি চিরকৃতজ্ঞ।",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            সফল শিক্ষার্থীদের কথা
          </h2>
          <p className="text-muted-foreground text-lg">
            যারা JEJC এর মাধ্যমে তাদের স্বপ্ন পূরণ করেছেন
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.course}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
