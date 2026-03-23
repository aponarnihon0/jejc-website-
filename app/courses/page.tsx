import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { 
  BookOpen, 
  Clock, 
  Target, 
  CheckCircle2,
  ArrowRight,
  Users,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Japanese Language Course | JLPT N5 to N1 | JEJC",
  description: "জাপানি ভাষা কোর্স - JLPT N5 থেকে N1 পর্যন্ত। অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে বাংলায় জাপানি ভাষা শিখুন।",
};

const courses = [
  {
    level: "N5",
    title: "Basic Level",
    titleBn: "প্রাথমিক স্তর",
    duration: "৩-৪ মাস",
    vocabulary: "800+",
    kanji: "100+",
    description: "জাপানি ভাষার মৌলিক পরিচিতি। Hiragana, Katakana এবং সাধারণ কথোপকথন শেখা।",
    suitable: "যারা একদম নতুন",
    topics: ["Hiragana ও Katakana", "মৌলিক ব্যাকরণ", "দৈনন্দিন কথোপকথন", "সংখ্যা ও সময়"],
  },
  {
    level: "N4",
    title: "Elementary Level",
    titleBn: "মাধ্যমিক স্তর",
    duration: "৪-৫ মাস",
    vocabulary: "1,500+",
    kanji: "300+",
    description: "দৈনন্দিন জীবনে ব্যবহৃত জাপানি ভাষায় দক্ষতা অর্জন।",
    suitable: "N5 পাস করা শিক্ষার্থী",
    topics: ["জটিল ব্যাকরণ", "পড়া ও লেখা", "শোনা ও বলা", "Kanji অনুশীলন"],
  },
  {
    level: "N3",
    title: "Intermediate Level",
    titleBn: "মধ্যম স্তর",
    duration: "৫-৬ মাস",
    vocabulary: "3,750+",
    kanji: "650+",
    description: "জাপানে দৈনন্দিন জীবনযাপনে প্রয়োজনীয় ভাষা দক্ষতা।",
    suitable: "N4 পাস করা শিক্ষার্থী",
    topics: ["উন্নত ব্যাকরণ", "সংবাদপত্র পড়া", "আনুষ্ঠানিক ভাষা", "জব ইন্টারভিউ প্রস্তুতি"],
  },
  {
    level: "N2",
    title: "Upper Intermediate",
    titleBn: "উচ্চ-মধ্যম স্তর",
    duration: "৬-৮ মাস",
    vocabulary: "6,000+",
    kanji: "1,000+",
    description: "বিশ্ববিদ্যালয়ে ভর্তি এবং অফিসে কাজের জন্য প্রয়োজনীয় স্তর।",
    suitable: "N3 পাস করা শিক্ষার্থী",
    topics: ["একাডেমিক জাপানি", "ব্যবসায়িক ভাষা", "জটিল পড়া", "রচনা লেখা"],
  },
  {
    level: "N1",
    title: "Advanced Level",
    titleBn: "উন্নত স্তর",
    duration: "৮-১২ মাস",
    vocabulary: "10,000+",
    kanji: "2,000+",
    description: "জাপানি ভাষায় সর্বোচ্চ দক্ষতা। বিশেষজ্ঞ স্তরের যোগাযোগ ক্ষমতা।",
    suitable: "N2 পাস করা শিক্ষার্থী",
    topics: ["সাহিত্য ও সংস্কৃতি", "বিশেষজ্ঞ ভাষা", "অনুবাদ দক্ষতা", "প্রফেশনাল কমিউনিকেশন"],
  },
];

const features = [
  { icon: Users, title: "অভিজ্ঞ শিক্ষক", desc: "জাপান ফেরত শিক্ষকদের তত্ত্বাবধানে" },
  { icon: BookOpen, title: "মানসম্মত পাঠ্যক্রম", desc: "JLPT অনুযায়ী সিলেবাস" },
  { icon: Award, title: "সার্টিফিকেট", desc: "কোর্স শেষে সার্টিফিকেট প্রদান" },
  { icon: Target, title: "ছোট ব্যাচ", desc: "ব্যক্তিগত মনোযোগ প্রদান" },
];

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Japanese Language Course"
          titleEn="জাপানি ভাষা কোর্স"
          description="JLPT N5 থেকে N1 পর্যন্ত সকল লেভেলের কোর্স। অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে শিখুন।"
        />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <feature.icon className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Courses */}
            <div className="space-y-6">
              {courses.map((course) => (
                <div key={course.level} className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="grid lg:grid-cols-4">
                    {/* Level Badge */}
                    <div className="lg:col-span-1 bg-primary p-6 text-white flex flex-col items-center justify-center">
                      <p className="text-5xl font-bold mb-2">{course.level}</p>
                      <p className="text-lg font-medium">{course.title}</p>
                      <p className="text-white/80">{course.titleBn}</p>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-6">
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="flex items-center gap-2 text-sm bg-secondary px-3 py-1.5 rounded-full">
                          <Clock className="w-4 h-4 text-primary" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-2 text-sm bg-secondary px-3 py-1.5 rounded-full">
                          <BookOpen className="w-4 h-4 text-primary" />
                          {course.vocabulary} শব্দ
                        </span>
                        <span className="flex items-center gap-2 text-sm bg-secondary px-3 py-1.5 rounded-full">
                          漢字 {course.kanji}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4">{course.description}</p>
                      
                      <p className="text-sm text-primary font-medium mb-4">
                        উপযুক্ত: {course.suitable}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic) => (
                          <span key={topic} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* JLPT Info */}
            <div className="mt-16 bg-secondary/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                JLPT কী?
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                Japanese Language Proficiency Test (JLPT) হলো জাপানি ভাষার আন্তর্জাতিক স্বীকৃত পরীক্ষা। জাপানে পড়াশোনা বা কাজের জন্য JLPT সার্টিফিকেট অত্যন্ত গুরুত্বপূর্ণ। পরীক্ষা বছরে দুইবার জুলাই ও ডিসেম্বরে অনুষ্ঠিত হয়।
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">N5-N4</p>
                  <p className="text-foreground font-medium">Language School</p>
                  <p className="text-sm text-muted-foreground">ভর্তির জন্য যথেষ্ট</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">N3-N2</p>
                  <p className="text-foreground font-medium">University</p>
                  <p className="text-sm text-muted-foreground">বিশ্ববিদ্যালয়ে ভর্তির জন্য</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">N2-N1</p>
                  <p className="text-foreground font-medium">Employment</p>
                  <p className="text-sm text-muted-foreground">চাকরির জন্য প্রয়োজনীয়</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                আজই ভর্তি হন!
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                নতুন ব্যাচ শুরু হচ্ছে। সীমিত আসন। এখনই যোগাযোগ করুন।
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                ভর্তির জন্য যোগাযোগ করুন
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
