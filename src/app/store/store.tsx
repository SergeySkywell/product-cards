import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    productsSlice: productReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const userProducts = state.productsSlice.products.filter(
    (product) => product.category === "user"
  );
  localStorage.setItem("userProducts", JSON.stringify(userProducts));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
