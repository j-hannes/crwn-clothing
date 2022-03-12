import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";

import { selectIsShopFetching } from ":features/shop/shop-selectors";
import { withSpinner } from ":hocs/withSpinner/withSpinner";

import {
  Collection,
  Props as CollectionProps,
} from "./views/Collection/Collection";
import {
  CollectionsOverview,
  Props as CollectionsOverviewProps,
} from "./views/CollectionsOverview/CollectionsOverview";
import { fetchCollections } from ":features/shop/shop-slice";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionWithSpinner = withSpinner(Collection);

export const Shop: FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();

  const isFetching = useSelector(selectIsShopFetching);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <div>
      <Route
        exact
        path={match.path}
        component={(props: CollectionsOverviewProps) => (
          <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionName`}
        component={(props: CollectionProps) => (
          <CollectionWithSpinner isLoading={isFetching} {...props} />
        )}
      />
    </div>
  );
};
