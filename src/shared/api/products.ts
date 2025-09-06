import type { ProductType } from "../types/product";

export function getProducts(): Promise<ProductType[]> {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((data: ProductType[]) => {
      return data;
    });
}
