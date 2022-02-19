import { FC } from "react";
import styled from "styled-components";

import { CartItem as CartItemType } from "../../features/cart/cart-slice";

interface Props {
  item: CartItemType;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const CartItem: FC<Props> = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <Container>
      <img src={imageUrl} alt="item" />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}€
        </span>
      </ItemDetails>
    </Container>
  );
};
