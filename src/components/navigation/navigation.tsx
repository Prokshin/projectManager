import React from "react";
import "./navigation.css";
import NavigationUser from "./navigation-user";
import NavigationItems from "./navigation-items";

//!Реализовать раскрывающиеся пункты, с подгрузкой данных с сервера.
const Navigation = () => {
  return (
    <nav className="menu">
      <NavigationUser id="gg" userName="Иванов Иван" email="ivanov-super-star@mail.ru" />
      <NavigationItems />
    </nav>
  );
};

export default Navigation;
