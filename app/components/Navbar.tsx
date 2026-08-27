"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, clearCart } = useCart();

  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link href="/" className="brand-link" data-testid="nav-home-link">
          Product Store
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="cart-box" data-testid="cart-container">
            Cart Items: 
            <span className="cart-count-badge" data-testid="cart-count">
              {totalItems}
            </span>
          </div>

          {totalItems > 0 && (
            <button 
              onClick={clearCart} 
              className="btn" 
              style={{ padding: "0.4rem 0.8rem", backgroundColor: "#dc2626" }}
              data-testid="clear-cart-button"
            >
              Clear Cart
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}