import styled from "styled-components";

export const Main = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-top: 50px;
    margin-left: auto;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const Block = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const Warning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
