import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
      // 5 -> index 2, items.splice(2, 1)
    },
    clearCart: (state, action) => {
      state.items.length = 0; // This alone will work
      // state.items = []; // will not work
    },
  },
});

// CartSlice: {
//   reducer: null,
//   action: null
// }

// export default CartSlice;

export default CartSlice.reducer;
export const { addItem, removeItem, clearCart } = CartSlice.actions;
