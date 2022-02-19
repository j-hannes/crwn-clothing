import { Container } from "./AuthenticationPage.styles";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";

export const AuthenticationPage = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};
