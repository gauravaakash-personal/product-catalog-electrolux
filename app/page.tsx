import Link from "next/link";
import { ProductsResponse } from "@/types/product";

async function getProducts(): Promise<ProductsResponse> {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function HomePage() {
  let data: ProductsResponse;

  try {
    data = await getProducts();
  } catch (error) {
    return <p data-testid="error-state">Failed to load product catalog.</p>;
  }

  return (
    <section>
      <h1 className="page-title">Product Catalog</h1>

      <div className="product-grid" data-testid="product-grid">
        {data.products.map((product) => (
          <article key={product.id} className="product-card" data-testid={`product-card-${product.id}`}>
            <img src={product.thumbnail} alt={product.title} />

            <div className="product-info">
              <h2 className="product-title" title={product.title}>{product.title}</h2>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>

            <Link 
              href={`/products/${product.id}`} 
              className="btn"
              data-testid={`view-details-${product.id}`}
            >
              View Details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}