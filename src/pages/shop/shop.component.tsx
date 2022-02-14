import { FC } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import { CollectionsOverview } from "../../components/collections-overview/collections-overview.component";
import { CollectionPage } from "../collection/collection.component";

export const ShopPage: FC<RouteComponentProps> = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionName`}
        component={CollectionPage}
      />
    </div>
  );
};
