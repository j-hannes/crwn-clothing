import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";

import { CartItem, itemRemovedFromCart } from "../../features/cart/cart-slice";
import "./checkout-item.styles.scss";

interface Props {
  item: CartItem;
  itemRemovedFromCart: ActionCreatorWithPayload<CartItem["id"]>;
}

const CheckoutItemInner: FC<Props> = ({
  item: { id, name, imageUrl, price, quantity },
  itemRemovedFromCart,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => itemRemovedFromCart(id)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatch = {
  itemRemovedFromCart,
};

export const CheckoutItem = connect(null, mapDispatch)(CheckoutItemInner);
