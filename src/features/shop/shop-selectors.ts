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

// TODO use lodash.memoize? or remove createSelector completely
export const selectCollection = (collectionName: CollectionName) =>
  createSelector([selectCollections], (collections) =>
    collections && collectionName in collections
      ? collections[collectionName]
      : null
  );

// TODO clarify usefulness of such a selector
export const selectIsShopFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

// TODO clarify usefulness of such a selector
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
