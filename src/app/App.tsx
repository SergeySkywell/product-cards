import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "../widgets/Header";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductPage } from "../pages/ProductPage";
import { CreateProductPage } from "../pages/CreateProductPage";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
