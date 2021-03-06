import styled from "styled-components";

import { CollectionItem } from "../../components/CollectionItem/CollectionItem";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

export const Item = styled(CollectionItem)`
  margin-bottom: 30px;
`;
