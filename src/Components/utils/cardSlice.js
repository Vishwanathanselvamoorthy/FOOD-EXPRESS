import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "Vishwa",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeitem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeitem, clearCart } = cardSlice.actions;

export default cardSlice.reducer;
