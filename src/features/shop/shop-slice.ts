import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Collection } from "../directory/types";

interface ShopState {
  collections: Record<string, Collection>;
}

const initialState: ShopState = {
  collections: {},
};

const shopSlice = createSlice({
  name: "Shop",
  initialState,
  reducers: {
    shopDataReceived(draft, action: PayloadAction<Record<string, Collection>>) {
      draft.collections = action.payload;
    },
  },
});

export const { shopDataReceived } = shopSlice.actions;
export default shopSlice.reducer;
