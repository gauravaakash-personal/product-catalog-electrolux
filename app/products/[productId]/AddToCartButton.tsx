"use client";

import { useCart } from "../../../context/CartContext";
import { Product } from "../../../types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="btn"
      data-testid="add-to-cart-button"
    >
      Add to Cart
    </button>
  );
}