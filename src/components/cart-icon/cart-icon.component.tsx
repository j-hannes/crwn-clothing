import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";

import { RootState } from "../../app/store";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../features/cart/cart-selectors";
import { cartDropdownToggled } from "../../features/cart/cart-slice";
import "./cart-icon.styles.scss";

interface Props {
  itemCount: number;
  cartDropdownToggled: ActionCreatorWithoutPayload;
}

export const CartIconInner: FC<Props> = ({
  itemCount,
  cartDropdownToggled,
}) => {
  return (
    <div className="cart-icon" onClick={cartDropdownToggled}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapState = (state: RootState) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatch = {
  cartDropdownToggled,
};

export const CartIcon = connect(mapState, mapDispatch)(CartIconInner);
