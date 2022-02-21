import { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from ":features/directory/directory-selectors";
import { Section } from ":features/directory/directory-slice";

import { MenuItem } from "./components/MenuItem/MenuItem";
import { Menu } from "./Home.style";

interface Props {
  sections: Section[];
}

const HomeInner: FC<Props> = ({ sections }) => {
  return (
    <Menu>
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </Menu>
  );
};

const mapState = createStructuredSelector({
  sections: selectDirectorySections,
});

export const Home = connect(mapState)(HomeInner);
