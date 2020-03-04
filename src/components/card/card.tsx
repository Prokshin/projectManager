import React from "react";
import "./card.css";
import { Link, useRouteMatch } from "react-router-dom";

//!Добавить статусы, тип; для задач - проект > категорию, deadline.

export interface CardProps {
  id?: string;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = props => {
  const match = useRouteMatch();
  console.log(match);
  const { title, description, id = "" } = props;
  return (
    <Link to={`${match.url}/${id}`}>
      <div className="card">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <button className="card__button">Подробнее</button>
      </div>
    </Link>
  );
};
export default Card;
