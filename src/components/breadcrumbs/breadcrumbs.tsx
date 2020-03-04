import React from "react";
import { Link } from "react-router-dom";

import "./breadcrumbs.css";

interface BreadcrumbsProps {
  links: [
    {
      url: string;
      name: string;
    }
  ];
}

//! Продумать получение данных о родителях
const Breadcrumbs: React.FC<BreadcrumbsProps> = props => {
  let first = true;
  const links = props.links.map(el => {
    let arrow = <></>;
    if (first) {
      first = !first;
    } else {
      arrow = <ion-icon name="chevron-forward-outline"></ion-icon>;
    }
    return (
      <span key={el.url}>
        {arrow}
        <Link to={el.url}>{el.name}</Link>
      </span>
    );
  });
  return <div className="breadcrumbs">{links}</div>;
};

export default Breadcrumbs;
