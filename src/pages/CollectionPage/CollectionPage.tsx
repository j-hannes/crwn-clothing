import { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../app/store";
import { CollectionItem } from "../../components/CollectionItem/CollectionItem";
import { CollectionName } from "../../features/directory/types";
import { selectCollection } from "../../features/shop/shop-selectors";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const Item = styled(CollectionItem)`
  margin-bottom: 30px;
`;

const CollectionPageInner: FC<ReturnType<typeof mapState>> = ({
  collection,
}) => {
  if (!collection) return null;
  const { title, items } = collection;
  return (
    <Container>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
};

export const CollectionPage = connect(mapState)(CollectionPageInner);
