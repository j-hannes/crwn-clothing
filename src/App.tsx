import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./App.css";
import { Header } from "./components/Header/Header";
import type { User } from "./features/user/types";
import { selectCurrentUser } from "./features/user/user-selectors";
import { userRegistered, userUnregistered } from "./features/user/user-slice";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { SignInAndSignUpPage } from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";

interface Props {
  currentUser: User | null;
  userRegistered: ActionCreatorWithPayload<User>;
  userUnregistered: ActionCreatorWithoutPayload;
}

class App extends Component<Props> {
  unsubscribeFromAuth() {}

  componentDidMount() {
    const { userRegistered, userUnregistered } = this.props;
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = await createUserProfileDocument(currentUser);
        if (userRef) {
          onSnapshot(userRef, (snapshot) => {
            userRegistered({
              id: snapshot.id,
              ...(snapshot.data() as FirebaseUser),
            });
          });
        }
      } else {
        userUnregistered();
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              // TODO put redirect into SignInAndSignUpPage ?
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatch = {
  userRegistered,
  userUnregistered,
};

export default connect(mapState, mapDispatch)(App);
