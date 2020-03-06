import React, { Component } from "react";

import "./form-category.css";

import CategoryInputs from "./category-inputs";

interface IFromCategoryState {
  name: string;
  description: string;
  projectId: string;
}

export default class FormCategoty extends Component<{}, IFromCategoryState> {
  constructor(props: never) {
    super(props);
    this.state = {
      name: "",
      description: "",
      projectId: ""
    };
  }

  handleChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ name: event.currentTarget.value });
  };
  handleChangeDescription = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    this.setState({ description: event.currentTarget.value });
  };
  handleChangeProject = (
    selected: React.FormEvent<HTMLSelectElement>
  ): void => {
    this.setState({ projectId: selected.currentTarget.value });
    console.log(selected.currentTarget.value);
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
              <ion-icon name="shapes" />
              Категория
            </h2>
            <p>Введите название и описание категоhии</p>
            <button className="button green-bg" onClick={this.SendForm}>
              <ion-icon name={"add"} />
              Создать категорию
            </button>
          </div>
          <CategoryInputs
            nameValue={this.state.name}
            HandleChangeName={this.handleChangeName}
            descriptionValue={this.state.description}
            HandleChangeDescription={this.handleChangeDescription}
            projectIdValue={this.state.projectId}
            HandleChangeProject={this.handleChangeProject}
          />
        </div>
      </div>
    );
  }
}
