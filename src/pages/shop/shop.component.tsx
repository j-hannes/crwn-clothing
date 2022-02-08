import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";
import { Collection } from "../../features/directory/types";
import { selectShopCollections } from "../../features/shop/shop-selectors";

interface Props {
  collections: Collection[];
}

const ShopPageInner: FC<Props> = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

const mapState = createStructuredSelector({
  collections: selectShopCollections,
});

export const ShopPage = connect(mapState)(ShopPageInner);
