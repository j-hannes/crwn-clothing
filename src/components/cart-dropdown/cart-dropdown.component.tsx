import { FC } from "react";
import { connect } from "react-redux";

import { RootState } from "../../app/store";
import { CartItem as CartItemType } from "../../features/cart/cart-slice";
import { CartItem } from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

interface Props {
  items: CartItemType[];
}

const CartDropdownInner: FC<Props> = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapState = ({ cart: { items } }: RootState) => ({
  items,
});

export const CartDropdown = connect(mapState)(CartDropdownInner);
