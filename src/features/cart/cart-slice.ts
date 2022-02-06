import { createSlice } from "@reduxjs/toolkit";

import { ShopItem } from "./types";

export type CartItem = ShopItem & {
  quantity: number;
};

interface CartState {
  hidden: boolean;
  items: CartItem[];
}
const initialState: CartState = {
  hidden: true,
  items: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    cartDropdownToggled(state) {
      state.hidden = !state.hidden;
    },
    itemAddedToCart(state, action) {
      const itemToAdd = action.payload;
      const itemAlreadyAdded = state.items.find(
        (item) => item.id === itemToAdd.id
      );
      if (itemAlreadyAdded) {
        itemAlreadyAdded.quantity++;
      } else {
        itemToAdd.quantity = 1;
        state.items.push(itemToAdd);
      }
    },
  },
});

export const { cartDropdownToggled, itemAddedToCart } = cartSlice.actions;
export default cartSlice.reducer;
