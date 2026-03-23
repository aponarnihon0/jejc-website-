import type { Metadata, Viewport } from "next"
import { Poppins, Noto_Sans_Bengali } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bengali",
})

export const metadata: Metadata = {
  title: "Japan Education and Job Center (JEJC) - জাপানে শিক্ষা ও চাকরি | Study in Japan from Bangladesh",
  description:
    "বাংলাদেশ থেকে জাপানে পড়াশোনার সেরা প্রতিষ্ঠান। Japan student visa, JLPT N5 N4 N3 কোর্স, খরচ, পার্ট-টাইম জব এবং পড়াশোনা শেষে কাজের সুযোগ সম্পর্কে বিস্তারিত তথ্য পান। ১৫+ বছরের অভিজ্ঞতা, ১০০০+ সফল শিক্ষার্থী।",
  keywords: [
    "Study in Japan from Bangladesh",
    "Japan education consultancy Bangladesh",
    "Japan student visa requirements",
    "Japanese language course N5 N4 N3",
    "Cost of studying in Japan",
    "Part-time job in Japan for students",
    "Work in Japan after study",
    "জাপানে পড়াশোনা",
    "জাপান স্টুডেন্ট ভিসা",
  ],
  openGraph: {
    title: "Japan Education & Job Center (JEJC) - Study in Japan from Bangladesh",
    description: "বাংলাদেশ থেকে জাপানে পড়াশোনা, ভিসা প্রসেসিং এবং চাকরির সম্পূর্ণ সমাধান। ৯৮% ভিসা সাক্সেস রেট।",
    type: "website",
    url: "https://sammir03-bot.github.io/jejc-website-/",
    images: [
      {
        url: "https://kimi-web-img.moonshot.cn/img/jejcbd.com/73d05ecac40853abd1695e4c4ecdc7fd49f591d6.webp",
        width: 1200,
        height: 630,
        alt: "JEJC - Japan Education and Job Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Education & Job Center (JEJC)",
    description: "বাংলাদেশ থেকে জাপানে পড়াশোনার সেরা গাইডলাইন",
    images: ["https://kimi-web-img.moonshot.cn/img/jejcbd.com/73d05ecac40853abd1695e4c4ecdc7fd49f591d6.webp"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://sammir03-bot.github.io/jejc-website-/",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D71518",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Japan Education and Job Center (JEJC)",
              alternateName: "জাপান এডুকেশন অ্যান্ড জব সেন্টার",
              url: "https://sammir03-bot.github.io/jejc-website-/",
              logo: "https://sammir03-bot.github.io/jejc-website-/favicon.png",
              image: "https://sammir03-bot.github.io/jejc-website-/favicon.png",
              description:
                "বাংলাদেশের বিশ্বস্ত জাপান শিক্ষা প্রতিষ্ঠান। জাপানে স্টুডেন্ট ভিসা, ভাষা কোর্স ও চাকরির নির্ভরযোগ্য প্রতিষ্ঠান।",
              founder: {
                "@type": "Person",
                name: "Nagamatsu Faruk Sir",
              },
              foundingDate: "2009",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+880-1712-345678",
                  contactType: "customer service",
                  availableLanguage: ["Bengali", "English", "Japanese"],
                  areaServed: "BD",
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                    opens: "09:00",
                    closes: "20:00",
                  },
                },
              ],
              sameAs: [
                "https://facebook.com/jejcbd",
                "https://youtube.com/jejcbd",
                "https://instagram.com/jejcbd",
                "https://wa.me/8801712345678",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Narayanganj Shibu Market, 4th Floor, Ranima Plaza, 1420 Bus-stand",
                addressLocality: "Narayanganj",
                addressRegion: "Dhaka",
                postalCode: "1420",
                addressCountry: "BD",
              },
              email: "info@jejcbd.com",
              telephone: "+8801712345678",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${notoSansBengali.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
