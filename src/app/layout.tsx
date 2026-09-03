import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.about.heading,
  openGraph: {
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.about.heading,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.about.heading,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1E1E1E",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaCode.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        {children}
      </body>
    </html>
  );
}
