// src/components/Cart/CartSlice.js (Updated)

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export default createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const productInCart = state.find((item) => item.id === action.payload.id);
      if (productInCart) {
        // If it exists, just increase the quantity
        productInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    delCart: (state, action) => {
      const productInCart = state.find((item) => item.id === action.payload.id);
      if (productInCart && productInCart.quantity > 1) {
        productInCart.quantity--;
      }
    },
    // ===== NEW: Add this reducer to completely remove an item =====
    removeItemFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
      checkout: (state) => {
        // Reset the cart to an empty array
        return [];
    },
  },
});