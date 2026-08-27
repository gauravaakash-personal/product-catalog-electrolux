import { Product } from "@/types/product";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

interface PageProps {
  params: Promise<{ productId: string }>;
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Product details unavailable");
  return res.json();
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { productId } = await params;

  let product: Product;
  try {
    product = await getProduct(productId);
  } catch (error) {
    return <p data-testid="error-state">Failed to load product details.</p>;
  }

  return (
    <section>
      <Link href="/" className="back-link" data-testid="back-button">
        ← Back to Catalog
      </Link>

      <article className="detail-card">
        <img src={product.thumbnail} alt={product.title} data-testid="product-image" />

        <div className="detail-info">
          <h1 data-testid="product-title">{product.title}</h1>
          <p className="product-price" data-testid="product-price">${product.price.toFixed(2)}</p>
          <p data-testid="product-description">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </article>
    </section>
  );
}