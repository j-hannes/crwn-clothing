import { collection, onSnapshot } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";

import { convertCollectionsSnapshotToMap, db } from ":app/firebase.utils";
import { shopDataReceived } from ":features/shop/shop-slice";
import { withSpinner } from ":hocs/withSpinner/withSpinner";

import {
  Collection,
  Props as CollectionProps,
} from "./views/Collection/Collection";
import {
  CollectionsOverview,
  Props as CollectionsOverviewProps,
} from "./views/CollectionsOverview/CollectionsOverview";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionWithSpinner = withSpinner(Collection);

export const Shop: FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    return onSnapshot(collection(db, "collections"), async (snapshot) => {
      const collectionsByRouteName = convertCollectionsSnapshotToMap(snapshot);
      dispatch(shopDataReceived(collectionsByRouteName));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <div>
      <Route
        exact
        path={match.path}
        component={(props: CollectionsOverviewProps) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionName`}
        component={(props: CollectionProps) => (
          <CollectionWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};
