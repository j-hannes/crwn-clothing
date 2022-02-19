import { FC, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

import { useDarkMode } from "../../hooks/useDarkMode";

const subColor = "grey";

const shrinkLabelStyles = (mainColor: string) => css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

interface Props {
  label: string;
}

const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

type InputProps = InputHTMLAttributes<HTMLInputElement> & { mainColor: string };

const Input = styled.input<InputProps>`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${({ mainColor }) => shrinkLabelStyles(mainColor)}
  }
`;

const Label = styled.label<{ shrink: boolean; mainColor: string }>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink, mainColor }) => shrink && shrinkLabelStyles(mainColor)}
`;

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
