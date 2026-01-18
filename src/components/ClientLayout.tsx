"use client";

import { useState } from "react";
import CartSidebar from "./CartSidebar";
import FloatingCartButton from "./FloatingCartButton";
import Header from "./Header";
import Footer from "./Footer";
import QueryProvider from "./QueryProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <QueryProvider>
      <Header />
      <main className="pt-0">{children}</main>
      <Footer />
      <FloatingCartButton onClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </QueryProvider>
  );
}
