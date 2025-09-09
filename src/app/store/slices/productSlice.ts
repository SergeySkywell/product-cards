import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../../shared/types/product";

type initialStateType = {
  products: ProductType[];
};

const initialState: initialStateType = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const resultProducts = state.products.filter(
        (p) => String(p.id) !== String(id)
      );
      state.products = resultProducts;
    },
  },
});

export const { addProduct, setProducts, removeProduct } = productSlice.actions;

export default productSlice.reducer;
