import { compose } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCollectionsForPreview,
  selectIsShopFetching,
} from ":features/shop/shop-selectors";
import { withSpinner } from ":hocs/withSpinner/withSpinner";

import { CollectionsOverview } from "./CollectionsOverview";

const mapState = createStructuredSelector({
  isLoading: selectIsShopFetching,
  collections: selectCollectionsForPreview,
});

export const CollectionsOverviewContainer = compose(
  connect(mapState),
  withSpinner
)(CollectionsOverview);
