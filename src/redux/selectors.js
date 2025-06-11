// src/redux/selectors.js (Corrected)

import { createSelector } from "@reduxjs/toolkit";

// CHANGED: Use lowercase 'cart' and 'account' to match the store configuration
export const cartSelector = (state) => state.cart; 
export const loginSelector = (state) => state.account; // Renamed for clarity

export const quantityItem = createSelector(cartSelector, (cart = []) => {
  // Simplified logic and added a default value for safety
  return cart.reduce((total, item) => total + item.quantity, 0);
});

export const getAllItemFromCart = createSelector(cartSelector, (cart = []) => {
  return cart; // Return the cart, or an empty array if it's not initialized
});

// Correctly select the loginSuccess status from the account slice
export const getLoginSuccess = createSelector(loginSelector, (account) => {
  return account ? account.loginSuccess : 'false';
});