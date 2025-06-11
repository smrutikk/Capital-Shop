import { createSlice } from '@reduxjs/toolkit';

export const dummySlice = createSlice({
  name: 'dummy',
  initialState: { value: 'Redux is working!' },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = dummySlice.actions;
export default dummySlice.reducer;