import { ChangeEvent, FC, SyntheticEvent, useCallback, useState } from "react";

import { useAppDispatch } from ":app/hooks";
import { CustomButton } from ":components/CustomButton/CustomButton";
import { emailSignIn, googleSignIn } from ":features/user/user-slice";

import { FormInput } from "../FormInput/FormInput";
import { Buttons, Main, Title } from "./SignIn.styles";

const initialFormData = {
  email: "",
  password: "",
};

export const SignIn: FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      // try {
      //   await signInWithEmailAndPassword(auth, formData.email, formData.password);
      //   setEmailAndPassword(initialFormData);
      // } catch (error) {
      //   console.log("error on sign in", error);
      // }
      dispatch(emailSignIn.pending(formData));
      setFormData(initialFormData);
    },
    [dispatch, formData]
  );

  const handleGoogleSignIn = useCallback(
    async (e: SyntheticEvent) => {
      dispatch(googleSignIn.pending());
    },
    [dispatch]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  }, []);

  return (
    <Main>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          label="password"
          required
        />
        <Buttons>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </CustomButton>
        </Buttons>
      </form>
    </Main>
  );
};
