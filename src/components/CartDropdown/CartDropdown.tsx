import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import { selectCartItems } from "../../features/cart/cart-selectors";
import {
  CartItem as CartItemType,
  cartDropdownToggled,
} from "../../features/cart/cart-slice";
import { useDarkMode } from "../../hooks/useDarkMode";
import { CartItem } from "../CartItem/CartItem";
import { CustomButton } from "../CustomButton/CustomButton";

interface Props {
  items: CartItemType[];
  cartDropdownToggled: ActionCreatorWithoutPayload;
}

const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  @media (prefers-color-scheme: dark) {
    background-color: #333;
    border-color: #ccc;
  }

  button {
    margin-top: auto;
  }
`;

const CartItems = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartDropdownInner: FC<Props & RouteComponentProps> = ({
  items,
  history,
  cartDropdownToggled,
}) => {
  const isDarkMode = useDarkMode();
  return (
    <Container>
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
    </Container>
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
