import styled from "styled-components";

import { Directory } from "../../components/Directory/Directory";

// TODO these styles are completely obsolete? (hence this component useless?)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePage = () => (
  <Container>
    <Directory />
  </Container>
);
