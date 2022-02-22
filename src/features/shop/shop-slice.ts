import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Collection, CollectionName } from "../directory/types";
import { SHOP_DATA } from "./shop.data";

interface ShopState {
  collections: Record<CollectionName, Collection> | null;
}

const initialState: ShopState = {
  collections: SHOP_DATA,
};

const shopSlice = createSlice({
  name: "Shop",
  initialState,
  reducers: {
    shopDataReceived(
      draft,
      action: PayloadAction<Record<CollectionName, Collection>>
    ) {
      draft.collections = action.payload;
    },
  },
});

export const { shopDataReceived } = shopSlice.actions;
export default shopSlice.reducer;
