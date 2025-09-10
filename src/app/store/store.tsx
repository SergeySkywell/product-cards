import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    productsSlice: productReducer,
  },
});

store.subscribe(() => {
  const state = store.getState(); // Получаю текущее состояние редакса
  const userProducts = state.productsSlice.products.filter(
    (product) => product.category === "user"
  ); // Фильтрую только продукты, добавленные пользователем
  localStorage.setItem("userProducts", JSON.stringify(userProducts)); // Сохраняю в localStorage только продукты, добавленные пользователем (у которых категория "user")
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
