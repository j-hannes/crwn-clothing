import { signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, Component, SyntheticEvent } from "react";
import styled from "styled-components";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { CustomButton } from "../CustomButton/CustomButton";
import { FormInput } from "../FormInput/FormInput";

const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("error on sign in", error);
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <Buttons>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </Buttons>
        </form>
      </Container>
    );
  }
}
