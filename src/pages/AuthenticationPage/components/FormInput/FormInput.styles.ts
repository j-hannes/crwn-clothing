import { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
const subColor = "grey";

const shrinkLabelStyles = (mainColor: string) => css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

type InputProps = InputHTMLAttributes<HTMLInputElement> & { mainColor: string };

export const Input = styled.input<InputProps>`
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

export const Label = styled.label<{ shrink: boolean; mainColor: string }>`
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
