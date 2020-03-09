import React, { Component } from "react";

import "./form-task.css";
import TaskInputs from "./task-inputs";

interface IFromTaskState {
  name: string;
  description: string;
  projectId: string;
  categoryId: string;
  groupId: string;
}

export default class FormTask extends Component<{}, IFromTaskState> {
  constructor(props: never) {
    super(props);
    this.state = {
      name: "",
      description: "",
      projectId: "",
      categoryId: "",
      groupId: "",
    };
  }

  handleChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ name: event.currentTarget.value });
  };
  handleChangeDescription = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ description: event.currentTarget.value });
  };
  handleChangeProject = (selected: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ projectId: selected.currentTarget.value, categoryId: "" });

    console.log(selected.currentTarget.value);
  };
  handleChangeCategory = (selected: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ categoryId: selected.currentTarget.value });
  };
  handleChangeGroup = (selected: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ categoryId: selected.currentTarget.value });
  };
  SendForm = () => {
    console.log("Обработка отправки формы");
    console.log(this.state);
    window.alert(`${this.state.name} ${this.state.description}`);
  };
  render() {
    return (
      <div className="wrap">
        <div className="form-project">
          <div className="form-project__description">
            <h2>
              <ion-icon name="document-text" />
              Задача
            </h2>
            <p>Введите название и описание задачи</p>
            <button className="button green-bg" onClick={this.SendForm}>
              <ion-icon name={"add"} />
              Создать задачу
            </button>
          </div>
          <TaskInputs
            nameValue={this.state.name}
            HandleChangeName={this.handleChangeName}
            descriptionValue={this.state.description}
            HandleChangeDescription={this.handleChangeDescription}
            projectIdValue={this.state.projectId}
            HandleChangeProject={this.handleChangeProject}
            categoryIdValue={this.state.categoryId}
            HandleChangeCategory={this.handleChangeCategory}
            groupIdValue={this.state.groupId}
            HandleChangeGroup={this.handleChangeGroup}
          />
        </div>
      </div>
    );
  }
}
