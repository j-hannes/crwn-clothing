import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

import "./custom-button.styles.scss";

interface Props {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: FC<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, isGoogleSignIn, inverted, ...props }) => {
  return (
    <button
      className={clsx("custom-button", {
        "google-sign-in": isGoogleSignIn,
        inverted: inverted,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
