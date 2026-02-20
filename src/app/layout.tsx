import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://labs.scaleopal.com"),
  title: "Scaleopal Labs | AI & Robotics Summer Camp Pune",
  description:
    "Join Scaleopal Labs, the only AI training institute run by industry engineers. Hands-on robotics and coding bootcamps for Class 8-12.",
  keywords: [
    "robotics summer camp",
    "AI camp Pune",
    "coding bootcamp India",
    "ATL lab setup",
    "Atal Tinkering Lab",
    "robotics for kids",
    "AI education",
  ],
  authors: [{ name: "Scaleopal Labs" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://labs.scaleopal.com",
    siteName: "Scaleopal Labs",
    title: "Scaleopal Labs | AI & Robotics Summer Camp Pune",
    description:
      "India's first Robotics Curriculum built by active AI Engineers. Join the Summer Bootcamp 2026.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scaleopal Labs - AI & Robotics Summer Camp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaleopal Labs | AI & Robotics Summer Camp Pune",
    description:
      "India's first Robotics Curriculum built by active AI Engineers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Scaleopal Labs",
  url: "https://labs.scaleopal.com",
  logo: "https://labs.scaleopal.com/logo.png",
  description:
    "India's first Robotics Curriculum built by active AI Engineers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bavdhan",
    addressLocality: "Pune",
    postalCode: "411021",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9322086245",
    contactType: "customer service",
    email: "hello@scaleopal.com",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Scaleopal Pvt. Ltd.",
    url: "https://scaleopal.com",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
