import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

export const MenuItem = withRouter(
  ({ title, history, imageUrl, size, linkUrl }) => (
    <div className={`menu-item ${size}`} onClick={() => history.push(linkUrl)}>
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
  )
);
