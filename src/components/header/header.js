import React, { Fragment } from "react";

import "./header.css";

const Header = props => {
  return (
    <Fragment>
      <h1 className="header">
        <ion-icon name={props.icon}></ion-icon>
        {props.text}
      </h1>
      <p className="header__description">{props.description}</p>
    </Fragment>
  );
};
export default Header;
