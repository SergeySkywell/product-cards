import { Link, useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();

  const linkBase = "px-3 py-2 text-sm font-medium rounded-lg transition";
  const linkActive = "bg-gray-100 text-gray-900 shadow-inner";
  const linkInactive = "text-gray-600 hover:text-gray-900";

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="text-base font-bold tracking-tight text-gray-900">
            Products App
          </div>

          {/* Навигация */}
          <nav className="flex items-center gap-2">
            <Link
              to="/products"
              className={`${linkBase} ${
                pathname === "/products" ? linkActive : linkInactive
              }`}
            >
              Products
            </Link>

            <Link
              to="/create-product"
              className={`${linkBase} ${
                pathname === "/create-product" ? linkActive : linkInactive
              }`}
            >
              Create Product
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
