import { FC, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from ":app/hooks";
import { Header } from ":components/Header/Header";
import { selectCurrentUser } from ":features/user/user-selectors";
import { checkUserSession } from ":features/user/user-slice";

import { Authentication } from "./views/Authentication/Authentication";
import { Checkout } from "./views/Checkout/Checkout";
import { Home } from "./views/Home/Home";
import { Shop } from "./views/Shop/Shop";

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

export const App: FC = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

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
            currentUser ? <Redirect to="/" /> : <Authentication />
          }
        />
      </Switch>
    </Main>
  );
};
