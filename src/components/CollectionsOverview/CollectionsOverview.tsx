import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../features/shop/shop-selectors";
import { CollectionPreview } from "../CollectionPreview/CollectionPreview";
import { Main } from "./CollectionsOverview.styles";

const mapState = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const CollectionsOverviewInner: FC<ReturnType<typeof mapState>> = ({
  collections,
}) => {
  return (
    <Main>
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </Main>
  );
};

export const CollectionsOverview = connect(mapState)(CollectionsOverviewInner);
