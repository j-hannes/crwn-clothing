import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import { selectDirectorySections } from "../../features/directory/directory-selectors";
import { Section } from "../../features/directory/directory-slice";
import { MenuItem } from "../MenuItem/MenuItem";

interface Props {
  sections: Section[];
}

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DirectoryInner: FC<Props> = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </DirectoryMenu>
  );
};

const mapState = createStructuredSelector({
  sections: selectDirectorySections,
});

export const Directory = connect(mapState)(DirectoryInner);
