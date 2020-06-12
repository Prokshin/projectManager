import React, { Component } from "react";

import "./form-project.css";
import InputsProject from "./inputs-project";
import ApiService from "../../../services/api-service";
import { message } from "antd";

interface IFromProjectState {
  title: string;
  description: string;
}

export default class FormProject extends Component<{}, IFromProjectState> {
  constructor(props: never) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  apiService = new ApiService();

  handleChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ title: event.currentTarget.value });
  };
  handleChangeDescription = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ description: event.currentTarget.value });
  };
  SendForm = async () => {
    const { title, description } = this.state;
    if (title && description) {
      await this.apiService.saveProject(title, description).then((res) => console.log(res));
      message.success('Проект успешно создан');
    } else window.alert("Заполните форму");
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
            nameValue={this.state.title}
            HandleChangeName={this.handleChangeName}
            descriptionValue={this.state.description}
            HandleChangeDescription={this.handleChangeDescription}
          />
        </div>
      </div>
    );
  }
}
