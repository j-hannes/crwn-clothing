import { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { RootState } from "../../app/store";
import { CollectionItem } from "../../components/CollectionItem/CollectionItem";
import { CollectionName } from "../../features/directory/types";
import { selectCollection } from "../../features/shop/shop-selectors";
import "./styles.scss";

interface ShopRouteParams {
  collectionName: CollectionName;
}

const mapState = (
  state: RootState,
  props: RouteComponentProps<ShopRouteParams>
) => {
  return {
    collection: selectCollection(props.match.params.collectionName)(state),
  };
};

const CollectionPageInner: FC<ReturnType<typeof mapState>> = ({
  collection,
}) => {
  if (!collection) return null;
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export const CollectionPage = connect(mapState)(CollectionPageInner);
