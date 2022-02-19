import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import { CheckoutItem } from "../../components/CheckoutItem/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../features/cart/cart-selectors";
import { CartItem } from "../../features/cart/cart-slice";
import { StripeCheckoutButton } from "../../features/stripe/StripeCheckoutButton";

interface Props {
  items: CartItem[];
  total: number;
}

const Container = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-top: 50px;
    margin-left: auto;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const CheckoutPageInner: FC<Props> = ({ items, total }) => {
  return (
    <Container>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>TOTAL: {total}€</Total>
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp. 01/24 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton price={total} />
    </Container>
  );
};

const mapState = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export const CheckoutPage = connect(mapState)(CheckoutPageInner);
