import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/conponents/home/Navbar";
import Footer from "@/conponents/home/Footer";
import BannerTopbar from "@/conponents/home/BannerTopbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BannerTopbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
