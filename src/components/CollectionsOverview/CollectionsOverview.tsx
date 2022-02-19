import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import { selectCollectionsForPreview } from "../../features/shop/shop-selectors";
import { CollectionPreview } from "../CollectionPreview/CollectionPreview";

const mapState = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverviewInner: FC<ReturnType<typeof mapState>> = ({
  collections,
}) => {
  return (
    <Container>
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </Container>
  );
};

export const CollectionsOverview = connect(mapState)(CollectionsOverviewInner);
