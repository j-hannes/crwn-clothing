import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  CartItem,
  itemDecreasedInCart,
  itemIncreasedInCart,
  itemRemovedFromCart,
} from "../../features/cart/cart-slice";

interface Props {
  item: CartItem;
  itemIncreasedInCart: ActionCreatorWithPayload<CartItem["id"]>;
  itemDecreasedInCart: ActionCreatorWithPayload<CartItem["id"]>;
  itemRemovedFromCart: ActionCreatorWithPayload<CartItem["id"]>;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.span`
  width: 23%;
`;

const Quantity = styled.span`
  display: flex;
  width: 23%;
`;

const QuantityValue = styled.span`
  margin: 0 10px;
`;

const Arrow = styled.div<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: ${({ disabled }) => (disabled ? "#ccc" : "inherit")};
  user-select: none;
`;

const Price = styled.span`
  width: 23%;
`;

const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;

const CheckoutItemInner: FC<Props> = ({
  item: { id, name, imageUrl, price, quantity },
  itemIncreasedInCart,
  itemDecreasedInCart,
  itemRemovedFromCart,
}) => {
  return (
    <Container>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow
          disabled={quantity === 1}
          onClick={() => itemDecreasedInCart(id)}
        >
          &#10094;
        </Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={() => itemIncreasedInCart(id)}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => itemRemovedFromCart(id)}>
        &#10005;
      </RemoveButton>
    </Container>
  );
};

const mapDispatch = {
  itemIncreasedInCart,
  itemDecreasedInCart,
  itemRemovedFromCart,
};

export const CheckoutItem = connect(null, mapDispatch)(CheckoutItemInner);
