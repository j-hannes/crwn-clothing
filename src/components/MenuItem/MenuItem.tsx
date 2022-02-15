import clsx from "clsx";
import { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { Section } from "../../features/directory/directory-slice";
import "./styles.scss";

type Props = Omit<Section, "id">;

export const MenuItemInner: FC<Props & RouteComponentProps> = ({
  title,
  history,
  imageUrl,
  size,
  linkUrl,
}) => (
  <div
    className={clsx("menu-item", size)}
    onClick={() => history.push(linkUrl)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOW NOW</span>
    </div>
  </div>
);

export const MenuItem = withRouter(MenuItemInner);
