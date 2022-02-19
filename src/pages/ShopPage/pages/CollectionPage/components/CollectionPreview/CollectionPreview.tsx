import { FC } from "react";

import { CollectionItem as CollectionItemType } from ":features/cart/types";
import { CollectionItem } from ":pages/ShopPage/components/CollectionItem/CollectionItem";

import { Main, Preview, Title } from "./CollectionPreview.styles";

interface Props {
  title: string;
  items: CollectionItemType[];
}

export const CollectionPreview: FC<Props> = ({ title, items }) => (
  <Main>
    <Title>{title}</Title>
    <Preview>
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </Preview>
  </Main>
);
