import { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { RootState } from "../../app/store";
import { CollectionName } from "../../features/directory/types";
import { selectCollection } from "../../features/shop/shop-selectors";
import { Item, Items, Main, Title } from "./CollectionPage.styles";

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
    <Main>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Items>
    </Main>
  );
};

export const CollectionPage = connect(mapState)(CollectionPageInner);
