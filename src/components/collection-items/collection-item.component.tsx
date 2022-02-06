import { FC } from "react";

import "./collection-item.styles.scss";

interface Props {
  name: string;
  price: number;
  imageUrl: string;
}

export const CollectionItem: FC<Props> = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);
