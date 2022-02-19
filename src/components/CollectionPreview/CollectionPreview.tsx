import { FC } from "react";
import styled from "styled-components";

import { CollectionItem as CollectionItemType } from "../../features/cart/types";
import { CollectionItem } from "../CollectionItem/CollectionItem";

interface Props {
  title: string;
  items: CollectionItemType[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CollectionPreview: FC<Props> = ({ title, items }) => (
  <Container>
    <Title>{title}</Title>
    <Preview>
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </Preview>
  </Container>
);
