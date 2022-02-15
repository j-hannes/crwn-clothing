import { FC } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import { CollectionsOverview } from "../../components/CollectionsOverview/CollectionsOverview";
import { CollectionPage } from "../CollectionPage/CollectionPage";

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
