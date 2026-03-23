import type { Metadata, Viewport } from "next";
import { Poppins, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  title: "Japan Education and Job Center (JEJC) - Study in Japan from Bangladesh",
  description:
    "বাংলাদেশ থেকে জাপানে পড়াশোনার সেরা প্রতিষ্ঠান। Japan student visa, JLPT N5 N4 N3 কোর্স, খরচ, পার্ট-টাইম জব এবং পড়াশোনা শেষে কাজের সুযোগ সম্পর্কে বিস্তারিত তথ্য পান। ১৫+ বছরের অভিজ্ঞতা, ১০০০+ সফল শিক্ষার্থী।",
  keywords: [
    "Study in Japan from Bangladesh",
    "Japan education consultancy Bangladesh",
    "Japan student visa requirements",
    "Japanese language course N5 N4 N3",
    "Cost of studying in Japan",
    "Part-time job in Japan for students",
    "জাপানে পড়াশোনা",
    "জাপান স্টুডেন্ট ভিসা",
  ],
  openGraph: {
    title: "Japan Education & Job Center (JEJC) - Study in Japan from Bangladesh",
    description:
      "বাংলাদেশ থেকে জাপানে পড়াশোনা, ভিসা প্রসেসিং এবং চাকরির সম্পূর্ণ সমাধান। ৯৮% ভিসা সাক্সেস রেট।",
    type: "website",
    url: "https://jejcbd.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D71518",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${poppins.variable} ${notoSansBengali.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
