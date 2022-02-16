import { signOut } from "firebase/auth";
import { FC } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCartHidden } from "../../features/cart/cart-selectors";
import { User } from "../../features/user/types";
import { selectCurrentUser } from "../../features/user/user-selectors";
import { auth } from "../../firebase/firebase.utils";
import { CartDropdown } from "../CartDropdown/CartDropdown";
import { CartIcon } from "../CartIcon/CartIcon";

interface Props {
  currentUser: User | null;
  hidden: boolean;
}

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const option = css`
  padding: 10px 15px;
  cursor: pointer;
`;

const Option = styled.div`
  ${option}
`;

const OptionLink = styled(Link)`
  ${option}
`;

const HeaderInner: FC<Props> = ({ currentUser, hidden }) => (
  <Container>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <Options>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <Option onClick={() => signOut(auth)}>SIGN OUT</Option>
      ) : (
        <OptionLink to="/signin"> SIGN IN</OptionLink>
      )}
      <CartIcon />
    </Options>
    {!hidden && <CartDropdown />}
  </Container>
);

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export const Header = connect(mapState)(HeaderInner);
