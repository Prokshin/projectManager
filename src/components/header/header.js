import React from "react";

import "./header.css";

const Header = props => {
  return (
    <h1 className="header">
      <ion-icon name={props.icon}></ion-icon>
      {props.text}
    </h1>
  );
};
export default Header;
