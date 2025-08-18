import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Global/Header/Navbar";
import HomeCategories from "@/components/Home/HomeCategories";
import LabTests from "@/components/Home/LabTests";
import PromoSlider from "@/components/Home/PromoSlider";
import ProductCarousel from "@/components/Home/ProductCarousel";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import Image from "next/image";
import SearchBar from "@/components/Global/Header/Header2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediGlucks - Premium Health Products",
  description: "Your trusted source for premium health and pharmaceutical products",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header/>
        {/* <NavBar/> */}
        <SearchBar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
