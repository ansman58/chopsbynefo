import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Chops by Nefo",
  description: "Complete your order and arrange delivery. Fast and secure checkout for your favorite pastries and cakes.",
  openGraph: {
    title: "Checkout | Chops by Nefo",
    description: "Complete your order and arrange delivery for your favorite pastries and cakes.",
    images: ["/logo.jpg"],
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
