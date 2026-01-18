import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Place Your Order | Chops by Nefo",
  description: "Order delicious pastries, cakes, banana bread, zobo drinks, and small chops for delivery. Add items to cart and checkout easily.",
  openGraph: {
    title: "Place Your Order | Chops by Nefo",
    description: "Order delicious pastries, cakes, banana bread, zobo drinks, and small chops for delivery.",
    images: ["/logo.jpg"],
  },
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
