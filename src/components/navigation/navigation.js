import React from "react";
import "./navigation.css";

const Navigation = props => {
  return (
    <nav className="menu">
      <div className="menu__user">
        <div className="menu__user__name">Иванов Иван</div>
        <div className="menu__user__email">ivanov.ivan@mail.ru</div>
      </div>
      <div className="menu__item menu__item_active ">
        <a href="#">
          <ion-icon name="bar-chart"></ion-icon>Акуальные задачи
        </a>
      </div>
      <div className="menu__item">
        <a href="#">
          <ion-icon name="folder"></ion-icon>Проекты
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
