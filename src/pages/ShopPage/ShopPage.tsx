import { FC } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import { CollectionPage } from "./pages/CollectionPage/CollectionPage";
import { CollectionsOverview } from "./pages/CollectionsOverview/CollectionsOverview";

export const ShopPage: FC<RouteComponentProps> = ({ match }) => {
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
