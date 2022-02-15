import { FC } from "react";

import { CartItem as CartItemType } from "../../features/cart/cart-slice";
import "./styles.scss";

interface Props {
  item: CartItemType;
}

export const CartItem: FC<Props> = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price} €
        </span>
      </div>
    </div>
  );
};
