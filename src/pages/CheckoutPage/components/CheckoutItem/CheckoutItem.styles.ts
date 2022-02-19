import styled, { css } from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  width: 23%;
`;

export const Quantity = styled.span`
  display: flex;
  width: 23%;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const Increase = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const Decrease = styled(Increase)<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      color: #ccc;
    `}
`;

export const Price = styled.span`
  width: 23%;
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
