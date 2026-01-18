import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Services | Chops by Nefo",
  description: "Professional indoor and outdoor catering services for weddings, birthdays, corporate events, and celebrations. Customized menus and packages available.",
  openGraph: {
    title: "Catering Services | Chops by Nefo",
    description: "Professional indoor and outdoor catering services for weddings, birthdays, corporate events, and celebrations.",
    images: ["/logo.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
