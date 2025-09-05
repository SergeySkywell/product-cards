import type { ProductType } from "../types/Product";

export function getProducts(): Promise<ProductType[]> {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((data: ProductType[]) => {
      console.log(data);
      return data;
    });
}
