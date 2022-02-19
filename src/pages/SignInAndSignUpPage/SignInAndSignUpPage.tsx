import styled from "styled-components";

import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";

const Container = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

export const SignInAndSignUpPage = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};
