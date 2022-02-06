import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../features/cart/cart-selectors";
import {
  CartItem as CartItemType,
  cartDropdownToggled,
} from "../../features/cart/cart-slice";
import { CartItem } from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

interface Props {
  items: CartItemType[];
  cartDropdownToggled: ActionCreatorWithoutPayload;
}

const CartDropdownInner: FC<Props & RouteComponentProps> = ({
  items,
  history,
  cartDropdownToggled,
}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        cartDropdownToggled();
        history.push("/checkout");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapState = createStructuredSelector({
  items: selectCartItems,
});

const mapDispatch = {
  cartDropdownToggled,
};

export const CartDropdown = withRouter(
  connect(mapState, mapDispatch)(CartDropdownInner)
);
