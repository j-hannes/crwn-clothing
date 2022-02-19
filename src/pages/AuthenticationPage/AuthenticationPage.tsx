import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";
import { Container } from "./AuthenticationPage.styles";

export const AuthenticationPage = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};
