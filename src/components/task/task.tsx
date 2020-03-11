import React, { Component } from "react";
import "./task.css";
import ApiService from "../../services/api-service";
import { statusType } from "../status/status";
import Comment from "../comment";
import { comment } from "../comment/comment";
import TaskCard from "./task-card";

interface ITaskProps {
  taskId?: string;
}

interface ITaskState {
  id: string;
  title: string;
  description?: string;
  text: string;
  status: statusType;
  creator?: string;
  deadline?: Date;
  comments?: comment[];
}

const initionalState: ITaskState = {
  id: "",
  title: "",
  description: "",
  text: "",
  status: "unknown",
  comments: [
    {
      text: "",
      author: "",
      link: {
        url: "",
        text: "",
      },
    },
  ],
};

export default class Task extends Component<ITaskProps, ITaskState> {
  constructor(props: ITaskProps) {
    super(props);
    this.state = initionalState;
  }

  apiService = new ApiService();

  componentDidMount() {
    this.apiService.getTask(this.props.taskId).then((res: any) => {
      this.setState({
        title: res.title,
        description: res.description,
        text: res.text,
        status: res.status,
        comments: res.comments,
      });
    });
  }

  handleClick = () => {
    window.alert("Вы начали выполнение задачи");
  };

  render() {
    console.log(this.state);
    const { title, description, text } = this.state;
    return (
      <div>
        <TaskCard
          title={title}
          text={text}
          description={description}
          status={this.state.status}
          handleClick={this.handleClick}
        />
        <Comment taskId={this.props.taskId} comments={this.state.comments} />
      </div>
    );
  }
}
