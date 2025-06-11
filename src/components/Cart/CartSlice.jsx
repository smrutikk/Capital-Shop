// src/components/Cart/CartSlice.js (Updated)

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export default createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const temp = state.find((item) => item.id === action.payload.id);
      if (!temp) {
        state.push(action.payload);
      } else {
        let index = state.findIndex((item) => item.id === action.payload.id);
        state[index].quantity += action.payload.quantity;
      }
    },
    delCart: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity -= 1;
      }
    },
    // ===== NEW: Add this reducer to completely remove an item =====
    removeItemFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    checkout: (state) => [],
  },
});