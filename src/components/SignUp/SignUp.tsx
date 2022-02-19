import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, Component, SyntheticEvent } from "react";
import styled from "styled-components";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { CustomButton } from "../CustomButton/CustomButton";
import { FormInput } from "../FormInput/FormInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

export class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      // TODO improve error handling?
      console.log("error on sign up", error);
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <Container>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </Container>
    );
  }
}
