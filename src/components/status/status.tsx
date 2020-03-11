import React from "react";

import "./status.css";

export type status =
  | "completed"
  | "performed"
  | "available"
  | "not_available"
  | undefined
  | "unknown";

interface IStatusProps {
  status: status;
}

const Status = (props: IStatusProps) => {
  const { status } = props;
  let el = <span></span>;
  switch (status) {
    case "available":
      el = (
        <span className="status_available">
          <ion-icon name="ellipse" />
          Доступно
        </span>
      );
      break;
    case "completed":
      el = (
        <span className="status_complated">
          <ion-icon name="checkmark" />
          Завершено
        </span>
      );
      break;
    case "performed":
      el = (
        <span className="status_performed">
          {" "}
          <ion-icon name="sync" />
          Выполняется
        </span>
      );
      break;
    case "not_available":
      el = (
        <span className="status_not-available">
          <ion-icon name="close" />
          Недоступно
        </span>
      );
      break;
    default:
      break;
  }
  return <div className="status">{el}</div>;
};

export default Status;
