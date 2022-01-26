import clsx from "clsx";
import "./custom-button.styles.scss";

export const CustomButton = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <button
      className={clsx("custom-button", { "google-sign-in": isGoogleSignIn })}
      {...props}
    >
      {children}
    </button>
  );
};
