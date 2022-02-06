import { FC } from "react";

import { ShopItem } from "../../features/cart/types";
import { CollectionItem } from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

interface Props {
  title: string;
  items: ShopItem[];
}

export const CollectionPreview: FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
