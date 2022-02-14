import { createSlice } from "@reduxjs/toolkit";

import { Collection } from "../directory/types";
import { SHOP_DATA } from "./shop.data";

interface ShopState {
  collections: Record<string, Collection>;
}

const initialState: ShopState = {
  collections: SHOP_DATA,
};

const shopSlice = createSlice({
  name: "Shop",
  initialState,
  reducers: {
    // no reducers at this point
  },
});

// export const { } = shopSlice.actions;
export default shopSlice.reducer;
