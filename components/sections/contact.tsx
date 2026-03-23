"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
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
    icon: MapPin,
    label: "ঠিকানা",
    value: "Narayanganj Shibu Market, 4th Floor, Ranima Plaza",
    href: "#",
  },
  {
    icon: Clock,
    label: "অফিস সময়",
    value: "শনি-বৃহস্পতি: সকাল ৯টা - রাত ৮টা",
    href: "#",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="py-24 bg-secondary/50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            আজই যোগাযোগ করুন
          </h2>
          <p className="text-muted-foreground text-lg">
            ফ্রি কাউন্সেলিং এর জন্য আমাদের সাথে যোগাযোগ করুন
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-foreground text-white rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">যোগাযোগের তথ্য</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/8801712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp এ মেসেজ করুন
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              ফ্রি কাউন্সেলিং বুক করুন
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="আপনার পুরো নাম লিখুন"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  ইমেইল (ঐচ্ছিক)
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  আপনার প্রশ্ন
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="জাপানে পড়াশোনা সম্পর্কে আপনার প্রশ্ন লিখুন..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Send className="w-5 h-5" />
                মেসেজ পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
