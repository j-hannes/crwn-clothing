import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CollectionItem } from "./types";

export type CartItem = CollectionItem & {
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
  name: "cart",
  initialState,
  reducers: {
    cartDropdownToggled(draft) {
      draft.hidden = !draft.hidden;
    },
    itemAddedToCart: (draft, action: PayloadAction<CollectionItem>) => {
      const itemToAdd = action.payload;
      const itemAlreadyAdded = draft.items.find(
        (item) => item.id === itemToAdd.id
      );
      if (itemAlreadyAdded) {
        itemAlreadyAdded.quantity++;
      } else {
        draft.items.push({
          ...itemToAdd,
          quantity: 1,
        });
      }
    },
    itemIncreasedInCart(draft, action: PayloadAction<CartItem["id"]>) {
      const item = draft.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    itemDecreasedInCart(draft, action: PayloadAction<CartItem["id"]>) {
      const item = draft.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    itemRemovedFromCart(draft, action: PayloadAction<CartItem["id"]>) {
      const index = draft.items.findIndex((item) => (item.id = action.payload));
      if (index !== -1) {
        draft.items.splice(index, 1);
      }
    },
    clearCart(draft) {
      draft.items = [];
    },
  },
});

export const {
  cartDropdownToggled,
  itemAddedToCart,
  itemIncreasedInCart,
  itemDecreasedInCart,
  itemRemovedFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
