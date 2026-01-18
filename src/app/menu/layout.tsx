import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Chops by Nefo",
  description: "Browse our full menu of pastries, cakes, banana bread, zobo drinks, small chops, and more. Fresh, delicious treats delivered to you.",
  openGraph: {
    title: "Menu | Chops by Nefo",
    description: "Browse our full menu of pastries, cakes, banana bread, zobo drinks, and small chops.",
    images: ["/logo.jpg"],
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
