import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store/hooks/hooks";
import { addProduct } from "../../app/store/slices/productSlice";

export function CreateProductPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка на заполнение всех полей

    if (!title.trim() || !description.trim() || !image.trim() || !price) {
      alert("Заполни все поля");
      return;
    }

    // Создание нового продукта

    const newProduct = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      image: image.trim(),
      price: parseFloat(price),
      category: "user",
    };

    dispatch(addProduct(newProduct));
    navigate("/products");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Create Product
      </h1>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        {/* Название */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Title *
          </label>
          <input
            type="text"
            placeholder="Product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Описание */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description *
          </label>
          <textarea
            rows={5}
            placeholder="Short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Изображение */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Image URL *
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Цена */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Price *
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Действия */}
        <div className="pt-2 flex items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white text-sm font-semibold shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save
          </button>

          <a
            href="#/products"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 bg-white shadow-sm transition hover:bg-gray-50"
          >
            Back to list
          </a>
        </div>
      </form>
    </div>
  );
}

export default CreateProductPage;
