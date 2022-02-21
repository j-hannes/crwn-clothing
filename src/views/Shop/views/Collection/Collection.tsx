import { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { RootState } from ":app/store";
import { CollectionName } from ":features/directory/types";
import { selectCollection } from ":features/shop/shop-selectors";

import { Item, Items, Main, Title } from "./Collection.styles";

interface ShopRouteParams {
  collectionName: CollectionName;
}

type OwnProps = RouteComponentProps<ShopRouteParams>;

const mapState = (state: RootState, props: OwnProps) => {
  return {
    collection: selectCollection(props.match.params.collectionName)(state),
  };
};

export type Props = ReturnType<typeof mapState> & OwnProps;

const CollectionInner: FC<Props> = ({ collection }) => {
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

export const Collection = connect(mapState)(CollectionInner);
