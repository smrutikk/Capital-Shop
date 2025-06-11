import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import CartSlice from "../components/Cart/CartSlice";
import AccountSlice from "../pages/Login/AccountSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers with lowercase keys
const rootReducer = combineReducers({
  cart: CartSlice.reducer,      // CHANGED: 'Cart' to 'cart'
  account: AccountSlice.reducer,  // CHANGED: 'Account' to 'account'
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;