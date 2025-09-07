import { useEffect, useState, MouseEvent } from "react";
import { getProducts } from "../../shared/api/products";
import type { ProductType } from "../../shared/types/product";
import type { ViewFilter } from "../../shared/types/filter";

export function ProductsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [favs, setFavs] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<ViewFilter>("all");

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("API ERROR:", err));
  }, []);

  /* Переключение избранного */

  const toggleFav = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    setFavs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  /* Удаление карточки */

  const removeCard = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    setProducts((prev) => prev.filter((p) => String(p.id) !== String(id)));
  };

  /* Фильтрация карточек */

  const visible = products.filter((p) =>
    filter === "fav" ? !!favs[String(p.id)] : true
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h1>

        {/* Фильтрация карточек */}

        <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setFilter("all")}
            className={`px-3.5 py-2 text-sm rounded-lg transition ${
              filter === "all"
                ? "font-semibold text-gray-900 bg-gray-100 shadow-inner"
                : "font-medium text-gray-600 hover:text-gray-900"
            }`}
          >
            Все
          </button>
          <button
            onClick={() => setFilter("fav")}
            className={`px-3.5 py-2 text-sm rounded-lg transition ${
              filter === "fav"
                ? "font-semibold text-gray-900 bg-gray-100 shadow-inner"
                : "font-medium text-gray-600 hover:text-gray-900"
            }`}
          >
            Избранное
          </button>
        </div>
      </div>

      {/* Сетка карточек */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visible.map((product) => {
          const liked = !!favs[String(product.id)];
          return (
            <div
              key={product.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              onClick={() => {
                // navigate(`/products/${product.id}`)
              }}
            >
              <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
                <button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-gray-200 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={(e) => toggleFav(e, String(product.id))}
                  aria-label={liked ? "Убрать из избранного" : "В избранное"}
                >
                  <svg
                    className={`h-5 w-5 ${liked ? "text-rose-500" : "text-gray-500"} fill-current`}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a21.6 21.6 0 01-.383-.218 24.834 24.834 0 01-4.244-3.017C4.688 15.36 2.25 12.672 2.25 9.75 2.25 7.25 4.2 5.25 6.75 5.25c1.6 0 3.093.744 4.05 1.985A5.124 5.124 0 0114.85 5.25c2.55 0 4.5 2 4.5 4.5 0 2.922-2.438 5.61-4.739 7.91a24.834 24.834 0 01-4.244 3.017 21.6 21.6 0 01-.383.218l-.022.012-.007.003-.003.001-.003-.001z" />
                  </svg>
                </button>

                <button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-gray-200 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={(e) => removeCard(e, String(product.id))}
                  aria-label="Удалить карточку"
                >
                  <svg
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 6h18M9 6V4h6v2m-8 3l1 11a2 2 0 002 2h4a2 2 0 002-2l1-11" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h2 className="text-sm font-semibold text-gray-900 line-clamp-2">
                    {product.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-4 text-base font-bold text-gray-900">
                    ${product.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
