import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks/hooks";

export function ProductPage() {
  const { id } = useParams<{ id: string }>(); // Получаем id из параметров URL
  const { products } = useAppSelector((s) => s.productsSlice); // Получаем продукты из редакса

  const product = products.find((p) => String(p.id) === String(id)); // Ищем продукт по id

  // Если продукт не найден, показываем сообщение об ошибке

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900">
            Продукт не найден
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Возможно, вы перешли по устаревшей ссылке или обновили страницу.
          </p>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 bg-white shadow-sm transition hover:bg-gray-50"
            >
              ← Назад к списку
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Если продукт найден, показываем его детали

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 rounded-xl">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {product.title}
          </h1>

          <div className="mt-4 text-3xl font-extrabold text-gray-900">
            ${product.price}
          </div>

          <div className="mt-6 prose prose-sm max-w-none text-gray-700">
            <p className="whitespace-pre-line">{product.description}</p>
          </div>

          <div className="flex-1" />

          <div className="mt-8 flex items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 bg-white shadow-sm transition hover:bg-gray-50"
            >
              ← К списку
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
