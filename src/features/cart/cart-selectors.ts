import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }
);
