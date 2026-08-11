"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  Home,
  BookOpen,
  Target,
  User,
  Images,
  Settings,
  Route,
  GraduationCap,
  HelpCircle,
  Phone,
  UserPlus,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#home", label: "হোম" },
  { href: "#guide", label: "গাইড" },
  { href: "#chairman", label: "চেয়ারম্যান" },
  { href: "#gallery", label: "গ্যালারি" },
  { href: "#services", label: "সেবা" },
  { href: "#courses", label: "কোর্স" },
  { href: "#contact", label: "যোগাযোগ" },
]

const mobileNavLinks = [
  { href: "#home", label: "হোম", icon: Home },
  { href: "#guide", label: "সম্পূর্ণ গাইড", icon: BookOpen },
  { href: "#goal", label: "আমাদের লক্ষ্য", icon: Target },
  { href: "#chairman", label: "চেয়ারম্যান", icon: User },
  { href: "#gallery", label: "গ্যালারি", icon: Images },
  { href: "#services", label: "সেবাসমূহ", icon: Settings },
  { href: "#process", label: "প্রক্রিয়া", icon: Route },
  { href: "#courses", label: "কোর্স", icon: GraduationCap },
  { href: "#faq", label: "প্রশ্নাবলী", icon: HelpCircle },
  { href: "#contact", label: "যোগাযোগ", icon: Phone },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/85 backdrop-blur-[25px] backdrop-saturate-200 border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between h-20 px-6 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <Image
            src="https://kimi-web-img.moonshot.cn/img/jejcbd.com/73d05ecac40853abd1695e4c4ecdc7fd49f591d6.webp"
            alt="JEJC Logo"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-primary leading-none tracking-tight">Japan Education</span>
            <span className="text-xs text-muted-foreground font-semibold tracking-widest uppercase mt-0.5">
              and Job Center
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-foreground/70 relative py-2 transition-colors hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:rounded-full hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-muted transition-all ml-4",
            mobileMenuOpen && "bg-muted"
          )}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <span className="w-6 h-0.5 bg-foreground rounded-full transition-all" />
              <span className="w-6 h-0.5 bg-foreground rounded-full transition-all" />
              <span className="w-6 h-0.5 bg-foreground rounded-full transition-all" />
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed top-20 left-4 right-4 bg-white/[0.98] backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-border/5 z-[999] transition-all duration-300 max-h-[calc(100vh-100px)] overflow-y-auto",
          mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2.5"
        )}
      >
        {mobileNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMobileMenu}
            className="flex items-center gap-4 px-4 py-4 text-base font-semibold text-foreground/70 rounded-lg mb-2 transition-all hover:bg-muted hover:text-primary hover:translate-x-1"
          >
            <link.icon className="w-5 h-5 text-primary" />
            {link.label}
          </Link>
        ))}
        <Link
          href="#"
          onClick={closeMobileMenu}
          className="flex items-center justify-center gap-2 mt-4 px-6 py-4 bg-primary text-white rounded-lg font-semibold"
        >
          <UserPlus className="w-4 h-4" />
          ভর্তি হন
        </Link>
      </div>
    </header>
  )
}
