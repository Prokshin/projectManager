import React from "react";
import Status from "../status";
import { statusType } from "../status/status";
import { Button } from 'antd';
import ApiTaskService from '../../services/api-task-service';

interface ITaskCard {
  title: string;
  description: string | undefined;
  text: string;
  status: statusType;
  handleClick: () => void;
  deleteTask: () => void;
}

const TaskCard = (props: ITaskCard) => {
  let btn = <></>;

  switch (props.status) {
    case "IN_PROGRESS":
      btn = (
        <Button onClick={props.handleClick} >
          Завершить задачу
        </Button>
      );
      break;
    default:
      break;
  }
  return (
    <div className="task">
      <Status status={props.status} />
      <h1 className="task__title">{props.title}</h1>
      <p className="task__description">{props.description}</p>
      <div className="task__text">{props.text}</div>
      <div style={{marginTop:10}}>
        {btn}
        <Button danger onClick={props.deleteTask} style={{marginLeft: 20}}>Удалить задачу</Button>
      </div>
    </div>
  );
};

export default TaskCard;
