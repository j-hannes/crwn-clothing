import { collection, onSnapshot } from "firebase/firestore";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";

import { convertCollectionsSnapshotToMap, db } from ":app/firebase.utils";
import { shopDataReceived } from ":features/shop/shop-slice";

import { Collection } from "./views/Collection/Collection";
import { CollectionsOverview } from "./views/CollectionsOverview/CollectionsOverview";

export const Shop: FC<RouteComponentProps> = ({ match }) => {
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
      <Route path={`${match.path}/:collectionName`} component={Collection} />
    </div>
  );
};
