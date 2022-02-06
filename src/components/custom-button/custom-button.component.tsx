import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

import "./custom-button.styles.scss";

interface Props {
  isGoogleSignIn?: boolean;
}

export const CustomButton: FC<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <button
      className={clsx("custom-button", { "google-sign-in": isGoogleSignIn })}
      {...props}
    >
      {children}
    </button>
  );
};
