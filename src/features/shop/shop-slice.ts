import { createAction, createSlice } from "@reduxjs/toolkit";

import { Collection, CollectionName } from "../directory/types";

// NOTE leave commented out import, for offline use
// import { SHOP_DATA } from "./shop.data";

type Collections = Record<CollectionName, Collection>;

// export const fetchCollections = createAsyncThunk<Collections>(
//   "shop/fetchCollections",
//   async () => {
//     try {
//       const snapshot = await getDocs(collection(db, "collections"));
//       return convertCollectionsSnapshotToMap(snapshot);
//     } catch (e: any) {
//       return e.message;
//     }
//   }
// );
export const fetchCollections = {
  pending: createAction("shop/fetchCollections.pending"),
  fulfilled: createAction<Collections>("shop/fetchCollections.fulfilled"),
  rejected: createAction<string>("shop/fetchCollections.rejected"),
};

interface ShopState {
  collections: Collections | null;
  isFetching: boolean;
  errorMessage?: string;
}

const initialState: ShopState = {
  // NOTE leave commented out, for offline use
  // collections: SHOP_DATA,
  collections: null,
  isFetching: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.pending, (draft) => {
      draft.isFetching = true;
    });
    builder.addCase(fetchCollections.fulfilled, (draft, action) => {
      draft.isFetching = false;
      draft.collections = action.payload;
    });
    builder.addCase(fetchCollections.rejected, (draft, action) => {
      draft.isFetching = false;
      draft.errorMessage = action.payload;
    });
  },
});

export default shopSlice.reducer;
