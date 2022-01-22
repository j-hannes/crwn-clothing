import "./custom-button.styles.scss";

export const CustomButton = ({ children, ...props }) => {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  );
};
