import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../features/cart/cart-selectors";
import { CartItem } from "../../features/cart/cart-slice";
import { StripeCheckoutButton } from "../../features/stripe/StripeCheckoutButton";
import { Block, Header, Main, Total, Warning } from "./CheckoutPage.styles";
import { CheckoutItem } from "./components/CheckoutItem/CheckoutItem";

interface Props {
  items: CartItem[];
  total: number;
}

const CheckoutPageInner: FC<Props> = ({ items, total }) => {
  return (
    <Main>
      <Header>
        <Block>Product</Block>
        <Block>Description</Block>
        <Block>Quantity</Block>
        <Block>Price</Block>
        <Block>Remove</Block>
      </Header>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>TOTAL: {total}€</Total>
      <Warning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp. 01/24 - CVV: 123
      </Warning>
      <StripeCheckoutButton price={total} />
    </Main>
  );
};

const mapState = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export const CheckoutPage = connect(mapState)(CheckoutPageInner);
