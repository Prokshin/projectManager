import React, { Fragment } from "react";

import "./header.css";

export interface HeaderProps {
  size?: "middle" | "small" | undefined;
  icon: string | undefined;
  text: string | undefined;
  description?: string;
}

const Header: React.FC<HeaderProps> = props => {
  let size: string = "";
  switch (props.size) {
    case "middle":
      size = "middle";
      break;
    case "small":
      size = "small";
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <h1 className={`header ${size}`}>
        <ion-icon name={props.icon} />
        {props.text}
      </h1>
      <p className="header__description">{props.description}</p>
    </Fragment>
  );
};
export default Header;
