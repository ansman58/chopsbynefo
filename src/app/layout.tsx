import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chops by Nefo | Premium Pastries & Catering Services",
  description: "Delicious pastries, cakes, banana bread, zobo drinks, and professional indoor & outdoor catering services. The Delight is in the Taste!",
  keywords: ["pastries", "cakes", "catering", "banana bread", "zobo", "small chops", "Lagos", "Nigeria"],
  metadataBase: new URL("https://chopsbynefo.javanslem.workers.dev"),
  openGraph: {
    title: "Chops by Nefo | Premium Pastries & Catering Services",
    description: "Delicious pastries, cakes, banana bread, zobo drinks, and professional catering services.",
    type: "website",
    url: "https://chopsbynefo.javanslem.workers.dev",
    siteName: "Chops by Nefo",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chops by Nefo - The Delight is in the Taste",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chops by Nefo | Premium Pastries & Catering Services",
    description: "Delicious pastries, cakes, banana bread, zobo drinks, and professional catering services.",
    images: ["/logo.jpg"],
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
        className={`${inter.variable} antialiased font-sans`}
      >
        <CartProvider>
          <ClientLayout>{children}</ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
