import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chops by Nefo | Premium Pastries & Catering Services",
  description: "Delicious pastries, cakes, banana bread, zobo drinks, and professional indoor & outdoor catering services. The Delight is in the Taste!",
  keywords: ["pastries", "cakes", "catering", "banana bread", "zobo", "small chops", "Lagos", "Nigeria"],
  openGraph: {
    title: "Chops by Nefo | Premium Pastries & Catering Services",
    description: "Delicious pastries, cakes, banana bread, zobo drinks, and professional catering services.",
    type: "website",
  },
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
        <CartProvider>
          <Header />
          <main className="pt-0">{children}</main>
          <Footer />
          <ClientLayout />
        </CartProvider>
      </body>
    </html>
  );
}
