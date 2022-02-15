import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../features/directory/directory-selectors";
import { Section } from "../../features/directory/directory-slice";
import { MenuItem } from "../MenuItem/MenuItem";
import "./styles.scss";

interface Props {
  sections: Section[];
}

const DirectoryInner: FC<Props> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
};

const mapState = createStructuredSelector({
  sections: selectDirectorySections,
});

export const Directory = connect(mapState)(DirectoryInner);
