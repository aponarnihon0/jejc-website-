"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Youtube, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "অফিস ঠিকানা",
    value: "Narayanganj Shibu Market, 4th Floor, Ranima Plaza, 1420 Bus-stand",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "ফোন",
    value: "+880 1712-345678",
    href: "tel:+8801712345678",
  },
  {
    icon: Mail,
    label: "ইমেইল",
    value: "info@jejcbd.com",
    href: "mailto:info@jejcbd.com",
  },
  {
    icon: Clock,
    label: "অফিস সময়",
    value: "শনি - বৃহস্পতি: সকাল ৯টা - রাত ৮টা",
    href: "#",
  },
]

const socialLinks = [
  { href: "https://facebook.com/jejcbd", icon: Facebook, label: "Facebook", color: "hover:bg-[#1877f2]" },
  { href: "https://youtube.com/jejcbd", icon: Youtube, label: "YouTube", color: "hover:bg-[#ff0000]" },
  { href: "https://instagram.com/jejcbd", icon: Instagram, label: "Instagram", color: "hover:bg-[#e4405f]" },
  { href: "https://wa.me/8801712345678", icon: MessageCircle, label: "WhatsApp", color: "hover:bg-[#25d366]" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    education: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।")
    setFormData({ name: "", phone: "", education: "", message: "" })
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag mx-auto">
            <Phone className="w-4 h-4" />
            যোগাযোগ
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 tracking-tight text-balance">
            আজই <span className="text-primary">যোগাযোগ করুন</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            জাপানে পড়াশোনার স্বপ্ন পূরণে আমরা আপনার পাশে। ফ্রি কাউন্সেলিং এর জন্য আজই যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <div>
            <div className="bg-gradient-to-br from-foreground to-foreground/90 text-white rounded-3xl p-8 mb-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 border border-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border border-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">যোগাযোগের তথ্য</h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 group"
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-1">{info.label}</p>
                        <p className="font-semibold leading-relaxed">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/60 text-sm mb-4">সোশ্যাল মিডিয়ায় ফলো করুন</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25d366] text-white rounded-xl font-bold text-lg shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(37,211,102,0.4)] transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp এ মেসেজ করুন
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border border-border shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)]">
            <h3 className="text-2xl font-bold text-foreground mb-2">ফ্রি কাউন্সেলিং বুক করুন</h3>
            <p className="text-muted-foreground mb-8">ফর্মটি পূরণ করুন, আমরা শীঘ্রই যোগাযোগ করব।</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  placeholder="আপনার পুরো নাম"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-semibold text-foreground mb-2">
                  শিক্ষাগত যোগ্যতা *
                </label>
                <select
                  id="education"
                  required
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground appearance-none"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="ssc">এসএসসি পাস</option>
                  <option value="hsc">এইচএসসি পাস</option>
                  <option value="diploma">ডিপ্লোমা</option>
                  <option value="bachelor">স্নাতক</option>
                  <option value="masters">স্নাতকোত্তর</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  আপনার প্রশ্ন (ঐচ্ছিক)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                  placeholder="জাপানে পড়াশোনা সম্পর্কে আপনার প্রশ্ন লিখুন..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl font-bold text-lg shadow-[0_10px_25px_rgba(215,21,24,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(215,21,24,0.3)] transition-all"
              >
                <Send className="w-5 h-5" />
                ফ্রি কাউন্সেলিং বুক করুন
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2974!2d90.5044!3d23.6223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNarayanganj!5e0!3m2!1sen!2sbd!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JEJC Office Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
