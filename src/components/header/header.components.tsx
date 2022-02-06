import { signOut } from "firebase/auth";
import { FC } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../app/store";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { User } from "../../features/user/types";
import { auth } from "../../firebase/firebase.utils";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";
import { CartIcon } from "../cart-icon/cart-icon.component";
import "./header.styles.scss";

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

const mapState = ({ user: { currentUser }, cart: { hidden } }: RootState) => ({
  currentUser,
  hidden,
});

export const Header = connect(mapState)(HeaderInner);
