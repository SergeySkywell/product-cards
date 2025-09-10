import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../../shared/types/product";

type initialStateType = {
  products: ProductType[];
  favorites: Record<string, true>;
};

const initialState: initialStateType = {
  products: [],
  favorites: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Добавление продукта

    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },

    // Установка продуктов (при загрузке с сервера)

    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },

    // Удаление продукта

    removeProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const resultProducts = state.products.filter(
        (p) => String(p.id) !== String(id)
      );
      state.products = resultProducts;
    },

    // Переключение избранного

    toggleFavorite: (state, action: PayloadAction<string | number>) => {
      const id = String(action.payload);
      if (state.favorites[id]) delete state.favorites[id];
      else state.favorites[id] = true;
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    // Установка избранного (при загрузке из localStorage)

    setFavorites: (state, action: PayloadAction<Record<string, true>>) => {
      state.favorites = action.payload || {};
    },
  },
});

export const {
  addProduct,
  setProducts,
  removeProduct,
  toggleFavorite,
  setFavorites,
} = productSlice.actions;

export default productSlice.reducer;
