import { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

const labelColor = "grey";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isDarkMode: boolean;
};

export const Input = styled.input<InputProps>`
  background: none;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#333" : "white")};
  color: ${labelColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${labelColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const Label = styled.label<{ shrink: boolean }>`
  color: ${labelColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;
