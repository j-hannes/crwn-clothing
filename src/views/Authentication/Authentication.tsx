import { Main } from "./Authentication.styles";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";

export const Authentication = () => {
  return (
    <Main>
      <SignIn />
      <SignUp />
    </Main>
  );
};
