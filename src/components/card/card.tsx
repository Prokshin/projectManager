import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

//!Добавить статусы, тип; для задач - проект > категорию, deadline.

export interface CardProps {
  title: string;
  description: string;
  path: string;
}

const Card: React.FC<CardProps> = props => {
  const { title, description, path } = props;
  return (
    <Link to={path}>
      <div className="card">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <button className="card__button">Подробнее</button>
      </div>
    </Link>
  );
};
export default Card;
