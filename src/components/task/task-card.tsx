import React from "react";
import Status, { status } from "../status/status";

interface ITaskCard {
  title: string;
  description: string | undefined;
  text: string;
}

const TaskCard = (props: ITaskCard) => {
  let btn = <></>;
  // switch (status) {
  //   case "available":
  //     btn = <button className="button green-bg">Приступить</button>;
  //     break;
  //   default:
  //     break;
  // }
  return (
    <div className="task">
      {/* <Status status={props.status} /> */}
      <h1 className="task__title">{props.title}</h1>
      <p className="task__description">{props.description}</p>
      <div className="task__text">{props.text}</div>
      {btn}
    </div>
  );
};

export default TaskCard;
