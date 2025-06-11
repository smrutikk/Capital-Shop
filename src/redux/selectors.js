import { createSelector } from "@reduxjs/toolkit";

// CHANGED: Use lowercase 'cart' and 'account' to match the store configuration
export const cartSelector = (state) => state.cart; 
export const loginSuccess = (state) => state.account;

export const quantityItem = createSelector(cartSelector, (cart) => {
  // Added a check to ensure 'cart' is not undefined before accessing .length
  if (!cart || cart.length === 0) {
    return 0;
  } else {
    // This logic is fine, but can be simplified with .reduce
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
});

export const getAllItemFromCart = createSelector(cartSelector, (cart) => {
  // Also provide a fallback here for safety
  return cart || [];
});

export const getLoginSuccess = createSelector(loginSuccess, (account) => {
  // It's good practice to handle the case where the account state might not be initialized
  return account || { loginSuccess: 'false' }; // Or whatever your initial state is
});