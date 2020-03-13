import React from "react";
import { Link } from "react-router-dom";

const NavigationItems = () => {
  return (
    <>
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
    </>
  );
};

export default NavigationItems;
