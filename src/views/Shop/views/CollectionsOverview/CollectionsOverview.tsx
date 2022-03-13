import { FC } from "react";

import { Collection } from ":features/directory/types";

import { CollectionPreview } from "../Collection/components/CollectionPreview/CollectionPreview";
import { Main } from "./CollectionsOverview.styles";

type Props = {
  collections: Collection[];
};

export const CollectionsOverview: FC<Props> = ({ collections }) => {
  return (
    <Main>
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </Main>
  );
};
