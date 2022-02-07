import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
