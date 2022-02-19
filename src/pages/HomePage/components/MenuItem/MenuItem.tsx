import { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { Section } from "../../../../features/directory/directory-slice";
import {
  BackgroundImage,
  Content,
  Main,
  Subtitle,
  Title,
} from "./MenuItem.styles";

type Props = Omit<Section, "id">;

export const MenuItemInner: FC<Props & RouteComponentProps> = ({
  title,
  history,
  imageUrl,
  size,
  linkUrl,
}) => (
  <Main size={size} onClick={() => history.push(linkUrl)}>
    <BackgroundImage className="background-image" imageUrl={imageUrl} />
    <Content className="content">
      <Title>{title}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </Main>
);

export const MenuItem = withRouter(MenuItemInner);
