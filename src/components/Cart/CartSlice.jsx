// src/components/Cart/CartSlice.js (Updated)

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export default createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      // action.payload is now the full product object
      const productInCart = state.find((item) => item.id === action.payload.id);
      if (productInCart) {
        // If it exists, just increase the quantity
        productInCart.quantity++;
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    delCart: (state, action) => {
      // action.payload is just the product ID here
      const productInCart = state.find((item) => item.id === action.payload.id);
      if (productInCart && productInCart.quantity > 1) {
        productInCart.quantity--;
      }
    },
    removeItemFromCart: (state, action) => {
      // action.payload is the product ID
      return state.filter((item) => item.id !== action.payload.id);
    },
    checkout: (state) => {
        // Reset the cart to an empty array
        return [];
    },
  },
    
});