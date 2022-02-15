import { FC } from "react";

import { CollectionItem as CollectionItemType } from "../../features/cart/types";
import { CollectionItem } from "../CollectionItem/CollectionItem";
import "./styles.scss";

interface Props {
  title: string;
  items: CollectionItemType[];
}

export const CollectionPreview: FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);
