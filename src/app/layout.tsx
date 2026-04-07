import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/header/header";
import Footer from "@/sections/footer/footer";
import { ThemeProvider } from "next-themes";
import BlurBackground from "@/components/blur-background";
import BackToTopButton from "@/components/back-to-top-button";
import { LangProvider } from "@/hooks/lang-context";
import { Manrope, Montserrat } from "next/font/google";
import { Playwrite_VN } from "next/font/google";
import { AutoScrollProvider } from "@/hooks/auto-scroll-provider";

const playwrite = Playwrite_VN({
  variable: '--font-playwrite',
  weight: ['400'],
});
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: "../fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "DUDI SOFTWARE",
  description: "DUDI Software - Professional software development services in Vietnam. We deliver high-quality web, mobile, and enterprise solutions.",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playwrite.variable} ${manrope.variable} ${clashDisplay.variable} ${montserrat.variable} antialiased relative overflow-x-hidden font-[Manrope]`}
      >
        <AutoScrollProvider>
        <ThemeProvider enableSystem attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <LangProvider>
        <BlurBackground />

        <Header />
        {children}

        <Footer />
        <BackToTopButton />
        </LangProvider>
        </ThemeProvider>
        </AutoScrollProvider>
      </body>
    </html>
  );
}
