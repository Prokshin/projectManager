import React from "react";

import "./status.css";

export type statusType =
  | "IN_PROGRESS"
  | "COMPLETED"
  | undefined
  | null

interface IStatusProps {
  status: statusType;
}

const Status = (props: IStatusProps) => {
  const { status } = props;
  let el = <span></span>;
  switch (status) {
    case "IN_PROGRESS":
      el = (
        <span className="status_available">
          <ion-icon name="ellipse" />
          Выполняется
        </span>
      );
      break;
    case "COMPLETED":
      el = (
        <span className="status_complated">
          <ion-icon name="checkmark" />
          Завершено
        </span>
      );
      break;
    default:
      break;
  }
  return <div className="status">{el}</div>;
};

export default Status;
