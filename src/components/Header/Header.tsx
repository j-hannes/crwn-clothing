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
import "./styles.scss";

interface Props {
  currentUser: User | null;
  hidden: boolean;
}

const HeaderInner: FC<Props> = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => signOut(auth)}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          {" "}
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export const Header = connect(mapState)(HeaderInner);
