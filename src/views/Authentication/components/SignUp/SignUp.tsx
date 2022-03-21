import { ChangeEvent, FC, SyntheticEvent, useCallback, useState } from "react";

import { useAppDispatch } from ":app/hooks";
import { CustomButton } from ":components/CustomButton/CustomButton";
import { signUp } from ":features/user/user-slice";

import { FormInput } from "../FormInput/FormInput";
import { Main, Title } from "./SignUp.styles";

const initialFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp: FC = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      const { displayName, email, password, confirmPassword } = formValues;
      if (password !== confirmPassword) {
        // TODO move error into thunk and simply display error toast here
        alert("passwords don't match");
        return;
      }
      dispatch(signUp({ displayName, email, password }));
    },
    [dispatch, formValues]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues((state) => ({ ...state, [name]: value }));
  }, []);

  const { displayName, email, password, confirmPassword } = formValues;

  return (
    <Main>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </Main>
  );
};
