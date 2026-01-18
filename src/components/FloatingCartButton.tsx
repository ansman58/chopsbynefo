"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface FloatingCartButtonProps {
  onClick: () => void;
}

export default function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
  const { getCartCount } = useCart();
  const count = getCartCount();

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-30"
      aria-label="Open cart"
    >
      <ShoppingCart className="w-6 h-6" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
          {count}
        </span>
      )}
    </button>
  );
}
