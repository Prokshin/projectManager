import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";

interface IProjectsState {
  projects: [
    {
      id?: string;
      title?: string;
      description?: string;
    }
  ];
}

export default class Projects extends Component<{}, IProjectsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      projects: [{}]
    };
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    this.apiService.getAllProjects().then((res: any) => {
      this.setState({ projects: res });
    });
  }
  //Создание массива карточек проектов
  renderItems() {
    return this.state.projects.map(el => {
      if (el.id === undefined) {
        return <span key="loading">Загрузка данных</span>;
      }
      return (
        <Card
          key={el.id}
          id={el.id}
          title={el.title}
          description={el.description}
        />
      );
    });
  }
  render() {
    const items = this.renderItems();
    return <div className="flex-wrapper">{items}</div>;
  }
}
