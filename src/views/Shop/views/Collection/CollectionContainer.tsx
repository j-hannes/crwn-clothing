import { compose } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { RootState } from ":app/store";
import { CollectionName } from ":features/directory/types";
import {
  selectCollection,
  selectIsCollectionsLoaded,
} from ":features/shop/shop-selectors";
import { withSpinner } from ":hocs/withSpinner/withSpinner";

import { Collection } from "./Collection";

interface ShopRouteParams {
  collectionName: CollectionName;
}

type Props = RouteComponentProps<ShopRouteParams>;

const mapState = (state: RootState, props: Props) => ({
  isLoading: !selectIsCollectionsLoaded(state),
  collection: selectCollection(props.match.params.collectionName)(state),
});

export const CollectionContainer = compose(
  connect(mapState),
  withSpinner
)(Collection);
