import React, { Component } from "react";

import "./task.css";
import ApiService from "../../services/api-service";

interface ITaskProps {
  taskId?: string;
}

interface ITaskState {
  id?: string;
  title?: string;
  description?: string;
  text?: string;
  creator?: string;
  deadline?: Date;
}

export default class Task extends Component<ITaskProps, ITaskState> {
  constructor(props: ITaskProps) {
    super(props);
    this.state = {
      title: "Заголовок",
      description: "описание",
      text: "текст"
    };
  }

  apiService = new ApiService();

  componentDidMount() {
    this.apiService.getTask(this.props.taskId).then((res: any) => {
      this.setState({
        title: res.title,
        description: res.description,
        text: res.text
      });
    });
  }
  render() {
    console.log(this.props.taskId);
    return (
      <div>
        {" "}
        <div className="task">
          <h1 className="task__title">{this.state.title}</h1>
          <p className="task__description">{this.state.description}</p>
          <div className="task__text">{this.state.text}</div>
        </div>
      </div>
    );
  }
}
