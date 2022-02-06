import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../features/cart/cart-selectors";
import { CartItem } from "../../features/cart/cart-slice";
import "./checkout.styles.scss";

interface Props {
  items: CartItem[];
  total: number;
}

const CheckoutPageInner: FC<Props> = ({ items, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckoutItem item={item} />
      ))}
      <div className="total">TOTAL: {total} €</div>
    </div>
  );
};

const mapState = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export const CheckoutPage = connect(mapState)(CheckoutPageInner);
