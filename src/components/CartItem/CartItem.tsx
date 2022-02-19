import { FC } from "react";

import { CartItem as CartItemType } from "../../features/cart/cart-slice";
import { Details, Main } from "./CartItem.styles";

interface Props {
  item: CartItemType;
}

export const CartItem: FC<Props> = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <Main>
      <img src={imageUrl} alt="item" />
      <Details>
        <span>{name}</span>
        <span>
          {quantity} x {price}€
        </span>
      </Details>
    </Main>
  );
};
