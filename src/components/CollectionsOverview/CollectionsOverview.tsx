import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../features/shop/shop-selectors";
import { CollectionPreview } from "../CollectionPreview/CollectionPreview";
import "./styles.scss";

const mapState = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const CollectionsOverviewInner: FC<ReturnType<typeof mapState>> = ({
  collections,
}) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

export const CollectionsOverview = connect(mapState)(CollectionsOverviewInner);
