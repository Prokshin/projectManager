import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

//!Реализовать раскрывающиеся пункты, с подгрузкой данных с сервера.
export interface NavigationProps {}
const Navigation = () => {
  return (
    <nav className="menu">
      <Link to="/profile">
        <div className="menu__user">
          <div className="menu__user__name">Иванов Иван</div>
          <div className="menu__user__email">ivanov.ivan@mail.ru</div>
        </div>
      </Link>
      <div className="menu__item  ">
        <Link to="/">
          <ion-icon name="bar-chart"></ion-icon>Акуальные задачи
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
