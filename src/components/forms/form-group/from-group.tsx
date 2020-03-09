import React, { Component } from "react";

import "./form-group.css";
import GroupInputs from "./group-inputs";
import { SelectProject, SelectCategory } from "../form-select";

interface IFromCategoryState {
  name: string;
  description: string;
  projectId: string;
  categoryId: string;
}

const initialState: IFromCategoryState = {
  name: "",
  description: "",
  projectId: "",
  categoryId: "",
};

export default class FormGroup extends Component<{}, IFromCategoryState> {
  constructor(props: never) {
    super(props);
    this.state = initialState;
  }

  handleChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ name: event.currentTarget.value });
  };

  handleChangeDescription = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    this.setState({ description: event.currentTarget.value });
  };

  handleChangeProject = (
    selected: React.FormEvent<HTMLSelectElement>,
  ): void => {
    this.setState({ projectId: selected.currentTarget.value });
  };

  handleChangeCategory = (
    selected: React.FormEvent<HTMLSelectElement>,
  ): void => {
    this.setState({ categoryId: selected.currentTarget.value });
  };

  SendForm = () => {
    console.log("Обработка отправки формы");
    console.log(this.state);
    window.alert(
      `Форма отправлена. Название: ${this.state.name}, Описание: ${this.state.description}`,
    );
  };
  render() {
    const { name, description, projectId, categoryId } = this.state;
    return (
      <div className="wrap">
        <div className="form-project">
          <div className="form-project__description">
            <h2>
              <ion-icon name="shapes" />
              Группа
            </h2>
            <p>Введите название и описание группы</p>
            <button className="button green-bg" onClick={this.SendForm}>
              <ion-icon name={"add"} />
              Создать Группу
            </button>
          </div>
          <div className="form-project__inputs">
            <SelectProject
              projectIdValue={projectId}
              HandleChangeProject={this.handleChangeProject}
            />
            <SelectCategory
              projectIdValue={projectId}
              categoryIdValue={categoryId}
              HandleChangeCategory={this.handleChangeCategory}
            />
            <GroupInputs
              nameValue={name}
              descriptionValue={description}
              HandleChangeName={this.handleChangeName}
              HandleChangeDescription={this.handleChangeDescription}
            />
          </div>
        </div>
      </div>
    );
  }
}
