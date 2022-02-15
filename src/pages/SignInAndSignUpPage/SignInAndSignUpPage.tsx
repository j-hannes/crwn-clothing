import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";
import "./styles.scss";

export const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
