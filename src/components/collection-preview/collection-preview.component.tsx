import { FC } from "react";

import { CollectionItem } from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

interface Item {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface Props {
  title: string;
  items: Item[];
}

export const CollectionPreview: FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...item }) => (
          <CollectionItem key={id} {...item} />
        ))}
    </div>
  </div>
);
