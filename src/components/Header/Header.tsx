import { FC } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { useAppDispatch } from ":app/hooks";
import { selectCartHidden } from ":features/cart/cart-selectors";
import { User } from ":features/user/types";
import { selectCurrentUser } from ":features/user/user-selectors";
import { signOut } from ":features/user/user-slice";

import { ReactComponent as Logo } from "./assets/crown.svg";
import { CartDropdown } from "./components/CartDropdown/CartDropdown";
import { CartIcon } from "./components/CartIcon/CartIcon";
import { LogoContainer, Main, Option, Options } from "./Header.styles";

interface Props {
  currentUser: User | null;
  hidden: boolean;
}

const HeaderInner: FC<Props> = ({ currentUser, hidden }) => {
  const dispatch = useAppDispatch();

  return (
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
          <Option onClick={() => dispatch(signOut())}>SIGN OUT</Option>
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
};

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export const Header = connect(mapState)(HeaderInner);
