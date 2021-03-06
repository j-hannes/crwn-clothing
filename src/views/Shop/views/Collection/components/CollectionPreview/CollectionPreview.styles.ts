import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
