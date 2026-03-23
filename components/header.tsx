"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/study-in-japan", label: "Study in Japan" },
  { href: "/visa", label: "Visa" },
  { href: "/courses", label: "Course" },
  { href: "/cost", label: "Cost" },
  { href: "/jobs", label: "Job" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-105">
              JEJC
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-primary leading-tight">
                Japan Education Center
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Since 2009
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-primary text-white rounded-full font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              যোগাযোগ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-secondary text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed top-20 left-4 right-4 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-border p-6 transition-all duration-300",
          mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-4 px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-all mb-1"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-primary text-white rounded-xl font-semibold"
        >
          <Phone className="w-4 h-4" />
          যোগাযোগ করুন
        </Link>
      </div>
    </header>
  );
}
