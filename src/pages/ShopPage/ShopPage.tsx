import { collection, onSnapshot } from "firebase/firestore";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";

import { convertCollectionsSnapshotToMap, db } from ":app/firebase.utils";
import { shopDataReceived } from ":features/shop/shop-slice";

import { CollectionPage } from "./pages/CollectionPage/CollectionPage";
import { CollectionsOverview } from "./pages/CollectionsOverview/CollectionsOverview";

export const ShopPage: FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(
    () =>
      onSnapshot(collection(db, "collections"), async (snapshot) => {
        const collectionsByRouteName =
          convertCollectionsSnapshotToMap(snapshot);
        dispatch(shopDataReceived(collectionsByRouteName));
      }),
    [dispatch]
  );

  return (
    <div>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionName`}
        component={CollectionPage}
      />
    </div>
  );
};
