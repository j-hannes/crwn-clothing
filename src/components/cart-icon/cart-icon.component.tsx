import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { cartDropdownToggled } from "../../features/cart/cart-slice";
import "./cart-icon.styles.scss";

interface Props {
  cartDropdownToggled: ActionCreatorWithoutPayload;
}

export const CartIconInner: FC<Props> = ({ cartDropdownToggled }) => {
  return (
    <div className="cart-icon" onClick={cartDropdownToggled}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatch = {
  cartDropdownToggled,
};

export const CartIcon = connect(null, mapDispatch)(CartIconInner);
