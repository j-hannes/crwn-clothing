import { createSelector } from "@reduxjs/toolkit";

import { RootState } from ":app/store";

import { CollectionName } from "../directory/types";

const selectShop = (state: RootState) => state.shop;

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

export const selectCollection = (collectionName: CollectionName) =>
  createSelector([selectCollections], (collections) =>
    collections && collectionName in collections
      ? collections[collectionName]
      : null
  );
