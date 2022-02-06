import { signOut } from "firebase/auth";
import { FC } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../app/store";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { User } from "../../features/user/types";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

interface Props {
  currentUser: User | null;
}

const HeaderInner: FC<Props> = ({ currentUser }) => (
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
    </div>
  </div>
);

const mapState = (state: RootState) => ({
  currentUser: state.user.currentUser,
});

export const Header = connect(mapState)(HeaderInner);
