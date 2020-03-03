import React, { Fragment } from "react";

import "./header.css";

const Header = props => {
  let size = "";
  if (props.size === "middle") {
    size = "header_size_m";
  }
  return (
    <Fragment>
      <h1 className={`header ${size}`}>
        <ion-icon name={props.icon}></ion-icon>
        {props.text}
      </h1>
      <p className="header__description">{props.description}</p>
    </Fragment>
  );
};
export default Header;
