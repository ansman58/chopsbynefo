"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import CartSidebar from "./CartSidebar";
import FloatingCartButton from "./FloatingCartButton";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();
  
  // Don't show Header/Footer on studio routes
  const isStudioRoute = pathname?.startsWith("/studio");

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="pt-0">{children}</main>
      <Footer />
      <FloatingCartButton onClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
