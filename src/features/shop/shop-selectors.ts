import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
