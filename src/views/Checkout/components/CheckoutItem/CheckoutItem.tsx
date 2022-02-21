import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";

import {
  CartItem,
  itemDecreasedInCart,
  itemIncreasedInCart,
  itemRemovedFromCart,
} from ":features/cart/cart-slice";

import {
  Decrease,
  ImageContainer,
  Increase,
  Main,
  Name,
  Price,
  Quantity,
  QuantityValue,
  RemoveButton,
} from "./CheckoutItem.styles";

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
    <Main>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Decrease
          disabled={quantity === 1}
          onClick={() => itemDecreasedInCart(id)}
        >
          &#10094;
        </Decrease>
        <QuantityValue>{quantity}</QuantityValue>
        <Increase onClick={() => itemIncreasedInCart(id)}>&#10095;</Increase>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => itemRemovedFromCart(id)}>
        &#10005;
      </RemoveButton>
    </Main>
  );
};

const mapDispatch = {
  itemIncreasedInCart,
  itemDecreasedInCart,
  itemRemovedFromCart,
};

export const CheckoutItem = connect(null, mapDispatch)(CheckoutItemInner);
