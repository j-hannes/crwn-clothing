import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import clsx from "clsx";
import { FC } from "react";
import { connect } from "react-redux";

import {
  CartItem,
  itemDecreasedInCart,
  itemIncreasedInCart,
  itemRemovedFromCart,
} from "../../features/cart/cart-slice";
import "./checkout-item.styles.scss";

interface Props {
  item: CartItem;
  itemIncreasedInCart: ActionCreatorWithPayload<CartItem["id"]>;
  itemDecreasedInCart: ActionCreatorWithPayload<CartItem["id"]>;
  itemRemovedFromCart: ActionCreatorWithPayload<CartItem["id"]>;
}

const CheckoutItemInner: FC<Props> = ({
  item: { id, name, imageUrl, price, quantity },
  itemIncreasedInCart,
  itemDecreasedInCart,
  itemRemovedFromCart,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className={clsx("arrow", {
            disabled: quantity === 1,
          })}
          onClick={() => itemDecreasedInCart(id)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => itemIncreasedInCart(id)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => itemRemovedFromCart(id)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatch = {
  itemIncreasedInCart,
  itemDecreasedInCart,
  itemRemovedFromCart,
};

export const CheckoutItem = connect(null, mapDispatch)(CheckoutItemInner);
