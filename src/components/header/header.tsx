import React, { Fragment } from "react";

import "./header.css";

export interface HeaderProps {
  size?: string;
  icon?: string;
  text?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = props => {
  let size: string = "";
  //!Сделать несколько вариантов размерности
  if (props.size === "middle") {
    size = "header_size_m";
  }
  return (
    <Fragment>
      <h1 className={`header ${size}`}>
        <ion-icon name={props.icon}/>
        {props.text}
      </h1>
      <p className="header__description">{props.description}</p>
    </Fragment>
  );
};
export default Header;
