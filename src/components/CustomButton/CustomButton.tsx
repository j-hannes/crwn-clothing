import { ButtonHTMLAttributes, FC } from "react";

import { Main } from "./CustomButton.styles";

interface Props {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: FC<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <Main {...props}>{children}</Main>;
};
