import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from ":features/cart/cart-selectors";
import { cartDropdownToggled } from ":features/cart/cart-slice";

import { ItemCount, Main, ShoppingIcon } from "./CartIcon.styles";

interface Props {
  itemCount: number;
  cartDropdownToggled: ActionCreatorWithoutPayload;
}

export const CartIconInner: FC<Props> = ({
  itemCount,
  cartDropdownToggled,
}) => {
  return (
    <Main onClick={cartDropdownToggled}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </Main>
  );
};

const mapState = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatch = {
  cartDropdownToggled,
};

export const CartIcon = connect(mapState, mapDispatch)(CartIconInner);
