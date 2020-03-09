import React, { Component } from "react";

import "./form-project.css";
import InputsProject from "./inputs-project";

interface IFromProjectState {
  name: string;
  description: string;
}

export default class FormProject extends Component<{}, IFromProjectState> {
  constructor(props: never) {
    super(props);
    this.state = {
      name: "",
      description: ""
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
              <ion-icon name="folder" />
              Проект
            </h2>
            <p>Введите название и описание проекта</p>
            <button className="button green-bg" onClick={this.SendForm}>
              <ion-icon name={"add"} />
              Создать проект
            </button>
          </div>
          <InputsProject
            nameValue={this.state.name}
            HandleChangeName={this.handleChangeName}
            descriptionValue={this.state.description}
            HandleChangeDescription={this.handleChangeDescription}
          />
        </div>
      </div>
    );
  }
}
