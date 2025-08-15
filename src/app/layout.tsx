import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech-hike",
  description: "We deliver trusted software solutions in cybersecurity, networking, cloud computing, data analysis and machine learning, helping businesses grow with innovation and reliability",

icons: {

  icon: "/tech.ico",
  apple:[{url: "/tech.ico", sizes: "180x180"}],
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
