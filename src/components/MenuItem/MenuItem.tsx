import { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";

import { Section } from "../../features/directory/directory-slice";

type Props = Omit<Section, "id">;

const Container = styled.div<Pick<Props, "size">>`
  min-width: 30%;
  height: ${(props) => (props.size === "large" ? "380" : "240")}px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }
`;

const BackgroundImage = styled.div<Pick<Props, "imageUrl">>`
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  text-transform: uppercase;
  position: absolute;
`;

const Title = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  color: black;
`;

export const MenuItemInner: FC<Props & RouteComponentProps> = ({
  title,
  history,
  imageUrl,
  size,
  linkUrl,
}) => (
  <Container size={size} onClick={() => history.push(linkUrl)}>
    <BackgroundImage className="background-image" imageUrl={imageUrl} />
    <Content className="content">
      <Title>{title}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </Container>
);

export const MenuItem = withRouter(MenuItemInner);
