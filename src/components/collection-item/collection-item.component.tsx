import { FC } from "react";

import { CustomButton } from "../custom-button/custom-button.component";
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
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);
