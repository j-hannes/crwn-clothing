import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header.components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth() {}

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = await createUserProfileDocument(currentUser);
        if (userRef) {
          onSnapshot(userRef, (snapshot) => {
            this.setState(
              {
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data(),
                },
              },
              () => {
                console.log(this.state);
              }
            );
          });
        }
      } else {
        this.setState({ currentUser });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header hasCurrentUser={!!this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
