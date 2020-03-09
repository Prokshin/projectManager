import React, { Component } from "react";

import "./form-task.css";
import TaskInputs from "./task-inputs";
import { SelectProject, SelectCategory, SelectGroup } from "../form-select";

interface IFromTaskState {
  name: string;
  description: string;
  text: string;
  projectId: string;
  categoryId: string;
  groupId: string;
}

const initionalState: IFromTaskState = {
  name: "",
  description: "",
  text: "",
  projectId: "",
  categoryId: "",
  groupId: "",
};

export default class FormTask extends Component<{}, IFromTaskState> {
  constructor(props: never) {
    super(props);
    this.state = initionalState;
  }

  handleChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ name: event.currentTarget.value });
  };
  handleChangeDescription = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    this.setState({ description: event.currentTarget.value });
  };
  handleChangeText = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    this.setState({ text: event.currentTarget.value });
  };
  handleChangeProject = (
    selected: React.FormEvent<HTMLSelectElement>,
  ): void => {
    this.setState({ projectId: selected.currentTarget.value, categoryId: "" });

    console.log(selected.currentTarget.value);
  };
  handleChangeCategory = (
    selected: React.FormEvent<HTMLSelectElement>,
  ): void => {
    this.setState({ categoryId: selected.currentTarget.value });
  };
  handleChangeGroup = (selected: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ groupId: selected.currentTarget.value });
  };
  SendForm = () => {
    console.log("Обработка отправки формы");
    console.log(this.state);
    window.alert(`${this.state.name} ${this.state.description}`);
  };
  render() {
    console.log(this.state);
    const {
      name,
      description,
      text,
      projectId,
      categoryId,
      groupId,
    } = this.state;
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
              <ion-icon name="add" />
              Создать задачу
            </button>
          </div>
          <div className="form-project__inputs">
            <SelectProject
              projectIdValue={projectId}
              HandleChangeProject={this.handleChangeProject}
            />
            <SelectCategory
              categoryIdValue={categoryId}
              projectIdValue={projectId}
              HandleChangeCategory={this.handleChangeCategory}
            />
            <SelectGroup
              categoryIdValue={categoryId}
              projectIdValue={projectId}
              groupIdValue={groupId}
              HandleChangeGroup={this.handleChangeGroup}
            />
            <TaskInputs
              nameValue={name}
              descriptionValue={description}
              textValue={text}
              HandleChangeName={this.handleChangeName}
              HandleChangeDescription={this.handleChangeDescription}
              HandleChangeText={this.handleChangeText}
            />
          </div>
        </div>
      </div>
    );
  }
}
