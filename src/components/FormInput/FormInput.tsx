import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

import "./styles.scss";

interface Props {
  label: string;
}

export const FormInput: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  ...props
}) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
      {label && (
        <label
          className={clsx("form-input-label", {
            shrink: props.value !== undefined && props.value !== "",
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
};
