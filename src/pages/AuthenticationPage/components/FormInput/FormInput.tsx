import { FC, InputHTMLAttributes } from "react";

import { useDarkMode } from ":hooks/useDarkMode";

import { Group, Input, Label } from "./FormInput.styles";

interface Props {
  label: string;
}

export const FormInput: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  ...props
}) => {
  const isDarkMode = useDarkMode();
  const mainColor = isDarkMode ? "white" : "black";
  return (
    <Group>
      <Input {...props} mainColor={mainColor} />
      {label && (
        <Label
          mainColor={mainColor}
          shrink={props.value !== undefined && props.value !== ""}
        >
          {label}
        </Label>
      )}
    </Group>
  );
};
