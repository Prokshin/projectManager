import React from "react";
import "./card.css";
import { Link, useRouteMatch } from "react-router-dom";
import Status from "../status";
import { statusType } from "../status/status";

//Добавить deadline
interface CardProps {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  status?: statusType;
}

const Card: React.FC<CardProps> = props => {
  const match = useRouteMatch();

  const { title, description, id = "", status = null } = props;
  return (
    <Link to={`${match.url}/${id}`}>
      <div className="card">
        <Status status={status} />

        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <button className="card__button">Подробнее</button>
      </div>
    </Link>
  );
};
export default Card;
