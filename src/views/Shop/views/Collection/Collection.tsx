import { FC } from "react";

import { Collection as CollectionType } from ":features/directory/types";

import { Item, Items, Main, Title } from "./Collection.styles";

export type Props = {
  collection: CollectionType;
};

export const Collection: FC<Props> = ({ collection }) => {
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
