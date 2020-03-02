import React from "react";

import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <h2 className="card__title">Проект 1</h2>
      <p className="card__description">
        Разработка системы управления проектами, с использованием иерархического
        структурирования бизнес задач
      </p>
      <button className="card__button">Подробнее</button>
    </div>
  );
};
export default Card;
