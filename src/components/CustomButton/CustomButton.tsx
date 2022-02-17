import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

interface Props {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const regularVariant = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedVariant = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const blueVariant = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getVariant = (props: Props) => {
  if (props.isGoogleSignIn) {
    return blueVariant;
  }
  if (props.inverted) {
    return invertedVariant;
  }
  return regularVariant;
};

const Container = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getVariant}
`;

export const CustomButton: FC<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
