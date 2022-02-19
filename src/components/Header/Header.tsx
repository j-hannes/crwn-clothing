import { signOut } from "firebase/auth";
import { FC } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCartHidden } from "../../features/cart/cart-selectors";
import { User } from "../../features/user/types";
import { selectCurrentUser } from "../../features/user/user-selectors";
import { auth } from "../../firebase/firebase.utils";
import { CartDropdown } from "../CartDropdown/CartDropdown";
import { CartIcon } from "../CartIcon/CartIcon";
import { LogoContainer, Main, Option, Options } from "./Header.styles";

interface Props {
  currentUser: User | null;
  hidden: boolean;
}

const HeaderInner: FC<Props> = ({ currentUser, hidden }) => (
  <Main>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <Options>
      <Option as={Link} to="/shop">
        SHOP
      </Option>
      <Option as={Link} to="/contact">
        CONTACT
      </Option>
      {currentUser ? (
        <Option onClick={() => signOut(auth)}>SIGN OUT</Option>
      ) : (
        <Option as={Link} to="/auth">
          SIGN IN
        </Option>
      )}
      <CartIcon />
    </Options>
    {!hidden && <CartDropdown />}
  </Main>
);

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export const Header = connect(mapState)(HeaderInner);
