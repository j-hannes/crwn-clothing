import { createSlice } from "@reduxjs/toolkit";

import { SHOP_DATA } from "./shop.data";

const initialState = {
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
