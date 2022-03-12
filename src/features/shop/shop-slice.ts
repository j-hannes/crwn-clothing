import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

import { convertCollectionsSnapshotToMap, db } from ":app/firebase.utils";

import { Collection, CollectionName } from "../directory/types";
// NOTE leave commented out import for offline use
// import { SHOP_DATA } from "./shop.data";

type Collections = Record<CollectionName, Collection>;

interface ShopState {
  collections: Collections | null;
  isFetching: boolean;
  errorMessage?: string;
}

const initialState: ShopState = {
  // collections: SHOP_DATA,
  collections: null,
  isFetching: false,
};

export const fetchCollections = createAsyncThunk<Collections>(
  "shop/fetchCollections",
  async () => {
    try {
      const snapshot = await getDocs(collection(db, "collections"));
      return convertCollectionsSnapshotToMap(snapshot);
    } catch (e: any) {
      return e.message;
    }
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    shopDataReceived(
      draft,
      action: PayloadAction<Record<CollectionName, Collection>>
    ) {
      draft.collections = action.payload;
    },
  },
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
      if (action.payload) {
        draft.errorMessage = action.payload as string;
      }
    });
  },
});

export const { shopDataReceived } = shopSlice.actions;
export default shopSlice.reducer;
