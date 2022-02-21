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
  return (
    <Group>
      <Input {...props} isDarkMode={isDarkMode} />
      {label && (
        <Label shrink={props.value !== undefined && props.value !== ""}>
          {label}
        </Label>
      )}
    </Group>
  );
};
