import { signOut } from "firebase/auth";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

interface Props {
  hasCurrentUser: boolean;
}

export const Header: FC<Props> = ({ hasCurrentUser }) => (
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
      {hasCurrentUser ? (
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
