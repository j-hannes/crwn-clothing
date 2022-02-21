import { FC } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { Collection } from ":features/directory/types";

import { CollectionItem } from "../../../../components/CollectionItem/CollectionItem";
import { Main, Preview, Title } from "./CollectionPreview.styles";

type Props = Pick<Collection, "title" | "items" | "routeName">;

export const CollectionPreview: FC<Props> = ({ title, items, routeName }) => {
  const { push } = useHistory();
  const match = useRouteMatch();

  return (
    <Main>
      <Title onClick={() => push(`${match.path}/${routeName}`)}>{title}</Title>
      <Preview>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Preview>
    </Main>
  );
};
