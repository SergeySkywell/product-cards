import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <Link to="/products">Products</Link> |{" "}
      <Link to="/create-product">Create Product</Link>
    </nav>
  );
}
