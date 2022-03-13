import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";

import { fetchCollections } from ":features/shop/shop-slice";

import { CollectionContainer } from "./views/Collection/CollectionContainer";
import { CollectionsOverviewContainer } from "./views/CollectionsOverview/CollectionsOverviewContainer";

export const Shop: FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <div>
      <Route
        exact
        path={match.path}
        // @ts-ignore we'll remove the container shortly
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionName`}
        // @ts-ignore we'll remove the container shortly
        component={CollectionContainer}
      />
    </div>
  );
};
