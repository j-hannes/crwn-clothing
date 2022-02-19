import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../features/cart/cart-selectors";
import { cartDropdownToggled } from "../../features/cart/cart-slice";

interface Props {
  itemCount: number;
  cartDropdownToggled: ActionCreatorWithoutPayload;
}

const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (prefers-color-scheme: dark) {
    path {
      fill: white !important;
    }
  }
`;

const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export const CartIconInner: FC<Props> = ({
  itemCount,
  cartDropdownToggled,
}) => {
  return (
    <Container onClick={cartDropdownToggled}>
      <StyledShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </Container>
  );
};

const mapState = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatch = {
  cartDropdownToggled,
};

export const CartIcon = connect(mapState, mapDispatch)(CartIconInner);
