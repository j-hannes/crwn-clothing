import styled from "styled-components";

export const Main = styled.div`
  position: absolute;
  width: 240px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  @media (prefers-color-scheme: dark) {
    background-color: #333;
    border-color: #ccc;
  }

  button {
    margin-top: auto;
  }
`;

export const CartItems = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
