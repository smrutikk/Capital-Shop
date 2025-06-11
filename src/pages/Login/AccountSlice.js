// src/pages/Login/AccountSlice.js (Corrected)

import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem("loginSuccess") || "false";

export const AccountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        LogginSuccess: (state) => "true",
        Logout: (state) => "false",
    }
});

export const { LogginSuccess, Logout } = AccountSlice.actions;
export default AccountSlice;