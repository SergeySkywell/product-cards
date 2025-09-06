import { useEffect, useState } from "react";
import { getProducts } from "../../shared/api/products";
import type { ProductType } from "../../shared/types/product";

export function ProductsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
      });
  }, []);
  return (
    <>
      <h1>Products Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </>
  );
}
