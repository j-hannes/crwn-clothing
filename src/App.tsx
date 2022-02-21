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
import styled from "styled-components";

import {
  // addCollectionAndItems,
  auth,
  createUserProfileDocument,
} from ":app/firebase.utils";
import { Header } from ":components/Header/Header";
// import { Collection } from ":features/directory/types";
// import { selectCollectionsForPreview } from ":features/shop/shop-selectors";
import type { User } from ":features/user/types";
import { selectCurrentUser } from ":features/user/user-selectors";
import { userRegistered, userUnregistered } from ":features/user/user-slice";

import { Authentication } from "./views/Authentication/Authentication";
import { Checkout } from "./views/Checkout/Checkout";
import { Home } from "./views/Home/Home";
import { Shop } from "./views/Shop/Shop";

interface Props {
  currentUser: User | null;
  // collections: Collection[];
  userRegistered: ActionCreatorWithPayload<User>;
  userUnregistered: ActionCreatorWithoutPayload;
}

const Main = styled.div`
  padding: 20px 40px;
  min-height: 100vh;

  a {
    text-decoration: none;
    color: black;
  }

  @media (prefers-color-scheme: dark) {
    background: #333;
    color: white;

    a {
      color: white;
    }
  }
`;

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
      // addCollectionAndItems(
      //   "collections",
      //   collections.map(({ title, items }) => ({ title, items }))
      // );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/auth"
            render={() =>
              // TODO put redirect into Authentication component ?
              this.props.currentUser ? <Redirect to="/" /> : <Authentication />
            }
          />
        </Switch>
      </Main>
    );
  }
}

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collections: selectCollectionsForPreview,
});

const mapDispatch = {
  userRegistered,
  userUnregistered,
};

export default connect(mapState, mapDispatch)(App);
