import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (count, item) => count + item.quantity * item.price,
      0
    );
  }
);
