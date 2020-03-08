import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import NavigationUser from "./navigation-user";

//!Реализовать раскрывающиеся пункты, с подгрузкой данных с сервера.
const Navigation = () => {
  return (
    <nav className="menu">
      <NavigationUser />
      <div className="menu__item">
        <Link to="/create">
          <ion-icon name="add-circle"></ion-icon>Создать
        </Link>
      </div>
      <div className="menu__item  ">
        <Link to="/">
          <ion-icon name="document"></ion-icon>Мои задачи
        </Link>
      </div>
      <div className="menu__item">
        <Link to="/projects">
          <ion-icon name="folder"></ion-icon>Проекты
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
