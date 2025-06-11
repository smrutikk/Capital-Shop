import { configureStore } from "@reduxjs/toolkit";
//import dummyReducer from './dummySlice';
//import CartSlice from "../components/Cart/CartSlice";
//import AccountSlice from "../pages/Login/AccountSlice";

export const store = configureStore({
 reducer: {
    //Cart: CartSlice.reducer,
    //Account: AccountSlice.reducer,

    //dummy: dummyReducer
  },
});

export default store;
