import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header.components";
import type { User } from "./features/user/types";
import { userRegistered, userUnregistered } from "./features/user/user-slice";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

interface Props {
  userRegistered: ActionCreatorWithPayload<User, string>;
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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {
  userRegistered,
  userUnregistered,
})(App);
