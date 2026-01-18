"use client";

import { useState } from "react";
import CartSidebar from "./CartSidebar";
import FloatingCartButton from "./FloatingCartButton";

export default function ClientLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <FloatingCartButton onClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
