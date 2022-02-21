import { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from ":features/shop/shop-selectors";

import { CollectionPreview } from "../Collection/components/CollectionPreview/CollectionPreview";
import { Main } from "./CollectionsOverview.styles";

const mapState = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export type Props = ReturnType<typeof mapState> & RouteComponentProps;

const CollectionsOverviewInner: FC<Props> = ({ collections }) => {
  return (
    <Main>
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </Main>
  );
};

export const CollectionsOverview = connect(mapState)(CollectionsOverviewInner);
