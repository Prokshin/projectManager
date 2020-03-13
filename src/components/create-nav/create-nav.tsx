import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./create-nav.css";

const CreateNav = () => {
  const match = useRouteMatch();

  return (
    <div className="wrap">
      <Link className="nav-button" to={`${match.url}`}>
        Создать проект
      </Link>
      <Link className="nav-button" to={`${match.url}/category`}>
        Создать категорию
      </Link>
      <Link className="nav-button" to={`${match.url}/group`}>
        Создать группу
      </Link>
      <Link className="nav-button" to={`${match.url}/task`}>
        Создать задачу
      </Link>
    </div>
  );
};

export default CreateNav;
