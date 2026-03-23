import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/study-in-japan", label: "Study in Japan" },
    { href: "/visa", label: "Visa Processing" },
    { href: "/courses", label: "Language Course" },
  ],
  info: [
    { href: "/cost", label: "Cost Analysis" },
    { href: "/jobs", label: "Part-time Job" },
    { href: "/#faq", label: "FAQ" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com/jejcbd", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com/jejcbd", icon: Youtube, label: "YouTube" },
  { href: "https://instagram.com/jejcbd", icon: Instagram, label: "Instagram" },
  { href: "https://wa.me/8801712345678", icon: MessageCircle, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
                JEJC
              </div>
              <span className="font-bold text-lg">Japan Education Center</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              বাংলাদেশের বিশ্বস্ত Japan Education Consultancy। Study in Japan from Bangladesh এর সম্পূর্ণ সহায়তা।
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base mb-5">সার্ভিস</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-base mb-5">তথ্য</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-5">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+8801712345678"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +880 1712-345678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jejcbd.com"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@jejcbd.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Narayanganj Shibu Market, 4th Floor, Ranima Plaza, 1420 Bus-stand
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Japan Education and Job Center. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              ১৫+ বছরের অভিজ্ঞতা | ১০০০+ সফল শিক্ষার্থী
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
