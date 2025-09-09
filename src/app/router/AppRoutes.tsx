import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "../../pages/ProductsPage";
import { ProductPage } from "../../pages/ProductPage";
import { CreateProductPage } from "../../pages/CreateProductPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/create-product" element={<CreateProductPage />} />
      <Route path="*" element={<ProductsPage />} />
    </Routes>
  );
};
