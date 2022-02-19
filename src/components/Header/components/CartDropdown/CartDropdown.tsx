import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { CustomButton } from ":components/CustomButton/CustomButton";
import { selectCartItems } from ":features/cart/cart-selectors";
import {
  CartItem as CartItemType,
  cartDropdownToggled,
} from ":features/cart/cart-slice";
import { useDarkMode } from ":hooks/useDarkMode";

import { CartItems, EmptyMessage, Main } from "./CartDropdown.styles";
import { CartItem } from "./components/CartItem/CartItem";

interface Props {
  items: CartItemType[];
  cartDropdownToggled: ActionCreatorWithoutPayload;
}

const CartDropdownInner: FC<Props & RouteComponentProps> = ({
  items,
  history,
  cartDropdownToggled,
}) => {
  const isDarkMode = useDarkMode();
  return (
    <Main>
      <CartItems>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton
        inverted={isDarkMode}
        onClick={() => {
          cartDropdownToggled();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </Main>
  );
};

const mapState = createStructuredSelector({
  items: selectCartItems,
});

const mapDispatch = {
  cartDropdownToggled,
};

export const CartDropdown = withRouter(
  connect(mapState, mapDispatch)(CartDropdownInner)
);
