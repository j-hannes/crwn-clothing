import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  hidden: boolean;
}
const initialState: CartState = {
  hidden: true,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    cartDropdownToggled: (state: CartState) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { cartDropdownToggled } = cartSlice.actions;
export default cartSlice.reducer;
