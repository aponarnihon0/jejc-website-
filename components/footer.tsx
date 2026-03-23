import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ChevronRight, Facebook, Youtube, Instagram, MessageCircle } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "হোম" },
  { href: "#guide", label: "সম্পূর্ণ গাইড" },
  { href: "#goal", label: "আমাদের লক্ষ্য" },
  { href: "#chairman", label: "চেয়ারম্যান" },
  { href: "#gallery", label: "গ্যালারি" },
  { href: "#services", label: "সেবাসমূহ" },
]

const infoLinks = [
  { href: "/study-in-japan", label: "Study in Japan" },
  { href: "/visa", label: "Visa Requirements" },
  { href: "/courses", label: "Language Course" },
  { href: "/cost", label: "Cost Analysis" },
  { href: "/jobs", label: "Part-time Job" },
]

const socialLinks = [
  { href: "https://facebook.com/jejcbd", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com/jejcbd", icon: Youtube, label: "YouTube" },
  { href: "https://instagram.com/jejcbd", icon: Instagram, label: "Instagram" },
  { href: "https://wa.me/8801712345678", icon: MessageCircle, label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-8 relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Image
              src="https://kimi-web-img.moonshot.cn/img/jejcbd.com/73d05ecac40853abd1695e4c4ecdc7fd49f591d6.webp"
              alt="JEJC Logo"
              width={80}
              height={80}
              className="h-20 w-auto mb-6 bg-white p-4 rounded-xl"
            />
            <p className="text-white/60 leading-relaxed mb-6">
              Japan Education and Job Center - বাংলাদেশের শিক্ষার্থীদের জন্য জাপানে উচ্চশিক্ষা ও ক্যারিয়ার গঠনের বিশ্বস্ত
              সঙ্গী। Study in Japan from Bangladesh এর জন্য সর্বোত্তম প্রতিষ্ঠান।
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 text-lg hover:bg-primary hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(215,21,24,0.3)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary after:rounded-full">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 text-sm transition-all hover:text-white hover:translate-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary after:rounded-full">
              গুরুত্বপূর্ণ তথ্য
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 text-sm transition-all hover:text-white hover:translate-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary after:rounded-full">
              যোগাযোগ
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#contact"
                  className="flex items-center gap-3 text-white/60 text-sm transition-colors hover:text-white"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  Narayanganj Shibu Market
                </Link>
              </li>
              <li>
                <a
                  href="tel:+8801712345678"
                  className="flex items-center gap-3 text-white/60 text-sm transition-colors hover:text-white"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +880 1712-345678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jejcbd.com"
                  className="flex items-center gap-3 text-white/60 text-sm transition-colors hover:text-white"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@jejcbd.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                সকাল ৯টা - রাত ৮টা
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>
            &copy; ২০২৪ Japan Education and Job Center (JEJC). সর্বস্বত্ব সংরক্ষিত। | Study in Japan from Bangladesh
          </p>
        </div>
      </div>
    </footer>
  )
}
