import React, { Component } from "react";

import "./form-category.css";

import CategoryInputs from "./category-inputs";
import { SelectProject } from "../form-select";
import ApiService from "../../../services/api-service";

interface IFromCategoryState {
  title: string;
  description: string;
  projectId: string;
}

export default class FormCategoty extends Component<{}, IFromCategoryState> {
  constructor(props: never) {
    super(props);
    this.state = {
      title: "",
      description: "",
      projectId: "",
    };
  }
  apiService = new ApiService();
  handleChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ title: event.currentTarget.value });
  };
  handleChangeDescription = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ description: event.currentTarget.value });
  };
  handleChangeProject = (selected: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ projectId: selected.currentTarget.value });
    console.log(selected.currentTarget.value);
  };
  SendForm = async () => {
    const { title, description, projectId } = this.state;
    if (title && description && projectId) {
      await this.apiService.saveCategory(title, description, projectId);
    }
  };
  render() {
    const { projectId, title, description } = this.state;
    const { handleChangeName, handleChangeDescription, handleChangeProject, SendForm } = this;
    return (
      <div className="wrap">
        <div className="form-project">
          <div className="form-project__description">
            <h2>
              <ion-icon name="shapes" />
              Категория
            </h2>
            <p>Введите название и описание категоhии</p>
            <button className="button green-bg" onClick={SendForm}>
              <ion-icon name={"add"} />
              Создать категорию
            </button>
          </div>
          <div className="form-project__inputs">
            <SelectProject projectIdValue={projectId} HandleChangeProject={handleChangeProject} />
            <CategoryInputs
              nameValue={title}
              HandleChangeName={handleChangeName}
              descriptionValue={description}
              HandleChangeDescription={handleChangeDescription}
            />
          </div>
        </div>
      </div>
    );
  }
}
