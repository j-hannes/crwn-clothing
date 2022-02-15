import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { CollectionName } from "../directory/types";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

export const selectCollection = (collectionName: CollectionName) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionName]
  );
