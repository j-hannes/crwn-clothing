import clsx from "clsx";
import "./form-input.styles.scss";

export const FormInput = ({ label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
      {label && (
        <label
          className={clsx("form-input-label", [props.value.length && "shrink"])}
        >
          {label}
        </label>
      )}
    </div>
  );
};
